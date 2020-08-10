// imports
const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  taskService = require("./Source/Services/TaskService"),
  hostname = '127.0.0.1',
  port = 3000;

app.use(bodyParser.json({extender: true, limit: "20mb"}));

app.get("/", taskService.sayHello);
app.get("/getTasks", taskService.getTasks);
app.get("/getMyProfile", taskService.getMyProfile);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});