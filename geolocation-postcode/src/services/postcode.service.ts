import axios from 'axios';
import Process from '../model/process.model';
import { API_POSTCODE_OI } from '../config';

const saveResult = (result, process) => {
    if (result) {
       process.counter.ok += 1
       // save mongo geolocation with postcode
    } else {
       process.counter.nodata += 1
       // geolocation without postcode
    }
 }

export const onPostcode = (readable, process) => async (row) => {

    readable.pause()
    const { data: { status, result } } = await axios.get(`${API_POSTCODE_OI}?lon=${row.lon}&lat=${row.lat}`)
    // console.log('data', result )
    if (status === 200) {
       saveResult(result, process)
    } else {
       process.counter.error += 1
       // geolocation error
    }
    setTimeout(() => {
       console.debug(process.counter)
       readable.resume();
    }, 1);
 }

 export const endProcess = (process, id) => async () => {
    process.endDate = new Date()
    console.debug('CSV file successfully processed');
    console.debug(process)
    await Process.update({ _id: id}, process.toObject())
 }