import axios from 'axios';
import { format } from 'date-fns'
import { API_POSTCODE_OI } from '../config';

import { FORMAT_DATE_LARGE } from '../constants/message'


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

 export const endProcess = (process) => () => {
    process.endDate = format(new Date(), FORMAT_DATE_LARGE)
    console.debug('CSV file successfully processed');
    console.debug(process)
 }