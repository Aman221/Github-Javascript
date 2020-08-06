const { sayHello, getMyProfile, getTasks } = require('./Source/Services/Task_Service');

const express = require('express'), 
app = express(),
hostname = '127.0.0.1',
taskService = require("./Source/Services/Task_Service"),
port = 3000;

app.get("/", (req, res, done)=> taskService.sayHello);
app.get("/", taskService.getTasks);
app.get("/", taskService.getMyProfile)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});