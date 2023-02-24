const express = require("express");
const rootRoute = require("./src/routes/rootRoute");
const app = express();
app.use(express.json());
app.use(express.static("."));
app.use("/api", rootRoute);
app.listen(8080);
