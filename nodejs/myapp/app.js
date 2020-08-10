// imports
const express = require('express'),
  app = express(),
  taskService = require("./Source/Services/TaskService"),
  hostname = '127.0.0.1',
  port = 3000;

// app.use((express.json)),

app.get("/", (req, res, done)=> taskService.sayHello);
app.get("/getTasks", taskService.getTasks);
app.get("/getMyProfile", taskService.getMyProfile);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});