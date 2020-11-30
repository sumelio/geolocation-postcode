"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_NAME = exports.GEOLOCATION_POSTCODE = exports.PORT = exports.PATH_FILE = void 0;
exports.PATH_FILE = process.env.FILES_PATH || './tmp';
exports.PORT = Number(process.env.PORT || 8100);
exports.GEOLOCATION_POSTCODE = process.env.GEOLOCATION_POSTCODE;
exports.SERVICE_NAME = `geolocation-file`;
//# sourceMappingURL=index.js.map