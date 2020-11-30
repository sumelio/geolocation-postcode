import { app } from './config/express'
import { PORT } from './config'
import { routes } from './routes/postcode.routes'

routes(app)

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
} );