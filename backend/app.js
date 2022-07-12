const express = require("express");
const bodyParsar = require("body-parser");
const Cors = require("cors");
const app = express();
const userRouter = require("./src/routes/routing");
app.use(Cors());
app.use(bodyParsar.json());
app.use(bodyParsar.urlencoded({ extended: true }));
app.use("/", userRouter);
app.listen(process.env.PORT || 8000);
console.log("app started at port 8000");
// In Model Folder consists of logic related to database
//Route folder consists of routing logic
//utility for check input data and validate output data
//service responsible for returning data(response)
//app.js file like a parent one all things can be handled from here
//body-parser It helps in parsing the request body
//bodyParser.json() to parse the request body into json
//bodyParser.urlencoded({ extended: true }) it is a middleware function helps to parse the request
//app.js->route.js(routes)->collector.js(utility)->server.js(service)->db.js(model)
