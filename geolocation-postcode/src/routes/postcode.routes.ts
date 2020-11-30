import * as controller from '../controllers/postcode.controller'

export const routes = (app) => {
    app.post("/v1/api/postcode", controller.postcode);
}