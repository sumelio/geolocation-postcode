import axios from 'axios';
import Process from '../model/process.model';
import GeoPostcode from '../model/geoPostcode.model';
import { API_POSTCODE_OI } from '../config';
import { ProcessDto, State } from '../dto/process.dto';

const getPostcodeFromResult = (result) => (Array.isArray(result) && result.length > 0) ? result[0].postcode : result.postcode

const setPostcode = async (result, process, geoPostcodeDto) => {
   if (result) {
      process.counter.ok += 1
      geoPostcodeDto.postcode = getPostcodeFromResult(result)
   } else {
      process.counter.nodata += 1
      geoPostcodeDto.detail = 'No Data Found'
   }
}

export const postcodeProcessById = async (id) => {
   const find = await Process.findOne({processId: id})
   return find
}

export const createProcessGetPostCodes = async (processId) => {
   const process = new ProcessDto(processId, new Date())
   process.state = State.START
   const processModel = new Process(process.toObject())
   await processModel.save()
   process.id = processModel.id
   return process
}

const savePostcode = async (geoPostcodeDto) => {
   const { lon, lat } = geoPostcodeDto
   const find = await GeoPostcode.findOne({ lon, lat })
   if (find && find.id) {
      await GeoPostcode.update({ id: find.id }, geoPostcodeDto)
   } else {
      const geoPostcode = new GeoPostcode(geoPostcodeDto)
      await geoPostcode.save()
   }
}
export const isParameterValid = (req) => req && req.body && req.body.processId

export const onPostcode = (readable, process) => async ({ lon, lat }) => {

   readable.pause()
   const geoPostcodeDto = {
      lon,
      lat,
      detail: undefined
   }
   const { data: { status, result } } = await axios.get(`${API_POSTCODE_OI}?lon=${lon}&lat=${lat}`)

   if (status === 200) {
      setPostcode(result, process, geoPostcodeDto)
   } else {
      process.counter.error += 1
      geoPostcodeDto.detail = status
   }
   process.state = State.PROCESSING
   await savePostcode(geoPostcodeDto)
   await Process.update({ _id: process.id }, process.toObject())
   setTimeout(() => {
      readable.resume();
   }, 1);
}

export const endProcess = (process: ProcessDto, state: State) => async () => {
   process.endDate = new Date()
   process.state = state
   console.debug(process.toObject())
   await Process.update({ id: process.id }, process.toObject())
}
