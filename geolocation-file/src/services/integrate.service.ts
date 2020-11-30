import axios from 'axios';
import { GEOLOCATION_POSTCODE } from "../config";

export const sendFileProcessId = async (fileProcessId: number) => {
    console.log('Start to call executePostcode...' +fileProcessId +' '+ process.env.GEOLOCATION_POSTCODE)
   
    const result = await axios({
        method: 'post',
        url: `${GEOLOCATION_POSTCODE}/v1/geolocation-postcode/api/postcode`,
        headers: {}, 
        data: {
            processId: fileProcessId, // This is the body part
        }
      });
   return result;
}