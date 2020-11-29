import * as controller from '../controllers/file.controller'

export const routes = (app) => {
    app.post("/upload", controller.upload);
}