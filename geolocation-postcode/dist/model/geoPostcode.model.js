"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoPostcode = void 0;
const mongoose_1 = require("mongoose");
const geoPostcodeSchema = new mongoose_1.Schema({
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    postcode: { type: String },
    detail: { type: String }
}, { strict: true })
    .index({ lat: 1, lon: 1 }, { unique: true, collation: { strength: 1 }, sparse: true });
exports.GeoPostcode = mongoose_1.model('GeoPostcode', geoPostcodeSchema);
exports.default = exports.GeoPostcode;
//# sourceMappingURL=geoPostcode.model.js.map