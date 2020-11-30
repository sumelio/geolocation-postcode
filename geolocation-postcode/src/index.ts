import db from './utils/db'
import { app } from './config/express'
import { PORT } from './config'
import { routes } from './routes/postcode.routes'


async function startup() {
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 5000)
      })
    await db.open({})

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });

    app.get("/", (req, res) => {
        res.json({ message: `Welcome to geolocation-postcode v.1.0 application. Time:  ${new Date()}` });
    });

    routes(app)

}

startup();
