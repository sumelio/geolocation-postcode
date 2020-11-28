const fs = require('fs').promises;

const data = "My data from geolocation-file!";

 async function writeTest() {
    try {
        await fs.writeFile('/usr/src/app/files/postcode.txt', data);
      } catch (error) {
        console.log(error)
      }
}

writeTest()