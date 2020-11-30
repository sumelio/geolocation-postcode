import { SERVICE_NAME } from '../config';
import * as controller from '../controllers/postcode.controller'

export const routes = (app) => {
    console.log(`/v1/${SERVICE_NAME}/api/postcode`)
    app.post(`/v1/${SERVICE_NAME}/api/postcode`, controller.postcode);
    app.get(`/v1/${SERVICE_NAME}/api/postcode/process/:id`, controller.postcodeProcessById);
}