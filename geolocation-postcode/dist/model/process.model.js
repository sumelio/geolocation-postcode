"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
const mongoose_1 = require("mongoose");
const processSchema = new mongoose_1.Schema({
    processId: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
    state: { type: String },
    counter: { type: Object },
    error: { type: String }
}, { strict: true })
    .index({ processId: 1 }, { unique: true, collation: { strength: 1 }, sparse: true });
exports.Process = mongoose_1.model('Process', processSchema);
exports.default = exports.Process;
//# sourceMappingURL=process.model.js.map