"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_fileupload_1 = require("express-fileupload");
const app = express_1.default();
app.use(express_fileupload_1.default());
const port = 8100; // default port to listen
app.post("/upload", (req, res) => {
    // render the index template
    res.send("Hello world!11");
    req.file.mov()
    console.log(req.file);
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map