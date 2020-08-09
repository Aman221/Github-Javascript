const { sayHello, getMyProfile, getTasks } = require('./Source/Services/Task_Service');
const express = require('express');
const Joi = require('Joi');
const app = express();
app.use((express.json));
hostname = '127.0.0.1',
taskService = require("./Source/Services/Task_Service"),
port = 3000;

app.get("/", (req, res, done)=> taskService.sayHello);
app.get("/getTasks", taskService.getTasks);
app.get("/getMyProfile", taskService.getMyProfile)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});