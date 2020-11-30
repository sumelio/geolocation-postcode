import { SERVICE_NAME } from '../config'
import * as controller from '../controllers/file.controller'

export const routes = (app) => {
    app.post(`/v1/${SERVICE_NAME}/api/upload`, controller.upload);
}