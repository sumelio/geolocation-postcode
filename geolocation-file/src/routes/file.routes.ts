import * as controller from '../controllers/file.controller'

export const routes = (app) => {
    app.post("/v1/api/upload", controller.upload);
}