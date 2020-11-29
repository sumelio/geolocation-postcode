"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("./config/express");
const config_1 = require("./config");
const file_routes_1 = require("./routes/file.routes");
file_routes_1.routes(express_1.app);
express_1.app.listen(config_1.PORT, () => {
    console.log(`Server is running on port ${config_1.PORT}.`);
});
//# sourceMappingURL=index.js.map