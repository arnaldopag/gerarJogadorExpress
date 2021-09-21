const express = require("express");
const router = require("./routes");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors);
app.use(router);
app.listen(port);
