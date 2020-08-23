// imports
const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  taskService = require("./services/TaskService"),
  route = require("./routes/routes"),
  hostname = '127.0.0.1',
  port = 3000;

app.use(bodyParser.json({extender: true, limit: "20mb"}));

route.include(app);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});