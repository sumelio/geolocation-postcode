"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTCODE_MONGO_PASSWORD = exports.POSTCODE_MONGO_USER = exports.POSTCODE_MONGO_HOSTS_PORT = exports.API_POSTCODE_OI = exports.SERVICE_NAME = exports.PORT = exports.PATH_FILE = void 0;
// File
exports.PATH_FILE = process.env.FILES_PATH || '/Users/orioninfiniti/Documents/test/geolocation-postcode/geolocation-postcode/tmp/';
// api
exports.PORT = Number(process.env.PORT || 8200);
exports.SERVICE_NAME = 'geolocation-postcode';
// External api
exports.API_POSTCODE_OI = process.env.API_POSTCODE_OI || 'https://postcodes.io/postcodes';
// DB
exports.POSTCODE_MONGO_HOSTS_PORT = process.env.POSTCODE_MONGO_HOSTS_PORT || 'localhost:27018';
exports.POSTCODE_MONGO_USER = process.env.POSTCODE_MONGO_USER;
exports.POSTCODE_MONGO_PASSWORD = process.env.POSTCODE_MONGO_PASSWORD;
//# sourceMappingURL=index.js.map