import axios from 'axios';
import { GEOLOCATION_POSTCODE } from "../config";

export const sendFileProcessId = async (fileProcessId: number) => {
    console.log('Start to call ' + fileProcessId   + `  url ${GEOLOCATION_POSTCODE}/v1/geolocation-postcode/api/postcode`)

    try {
        const result = await axios({
            method: 'post',
            url: `${GEOLOCATION_POSTCODE}/v1/geolocation-postcode/api/postcode`,
            headers: {},
            data: {
                processId: fileProcessId
            }
        });
        return result.data.message
    } catch (error) {
        console.error(error)
    }

    return null;
}