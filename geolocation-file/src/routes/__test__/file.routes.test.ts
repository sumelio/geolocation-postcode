import { app } from '../../config/express'
import fs from 'fs'
import supertest from 'supertest'
import { routes } from '../file.routes'

describe('Test Files Routes', () => {
    let req
    beforeAll(async () => {
        routes(app)
    })

    beforeEach(() => {
        req = supertest(app)
    })

    describe('POST - Validation successfully', () => {
        test('Should respond with status 200', (done) => {
            req
                .post(`/v1/api/upload`)
                .attach('postcodesgeo', 'src/routes/__test__/postcodesgeo1.csv')
                .end((_, res) => {
                    expect(res.status).toBe(200)
                    done()
                })
        })
        test('Should respond with status 400', (done) => {

            req
                .post(`/v1/api/upload`)
                .end((_, res) => {
                    expect(res.status).toBe(400)
                    done()
                })
        })

    })
})
