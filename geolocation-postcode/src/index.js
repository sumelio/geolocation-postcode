console.log('Geolocation postcode ....')

const fs = require('fs').promises;

async function read() {
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 10000)
      })
    try {
      const data = await fs.readFile('/usr/src/app/files/postcode.txt');
      console.log(' data in postcode: ' + data); 
    } catch (error) {
      console.log(error)
    }
}

read()