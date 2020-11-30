export const PATH_FILE : string = process.env.FILES_PATH  || '/Users/orioninfiniti/Documents/test/geolocation-postcode/geolocation-postcode/tmp/'
export const PORT : number = Number(process.env.PORT || 8200)
export const API_POSTCODE_OI : string = process.env.API_POSTCODE_OI || 'https://postcodes.io/postcodes'

// DB
export const POSTCODE_MONGO_HOSTS_PORT : string = process.env.POSTCODE_MONGO_HOSTS_PORT || 'localhost:27018'
export const POSTCODE_MONGO_USER : string = process.env.POSTCODE_MONGO_USER || 'admin'
export const POSTCODE_MONGO_PASSWORD : string = process.env.POSTCODE_MONGO_PASSWORD || '1235813'
