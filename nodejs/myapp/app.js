// imports
const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  router = require('./routes/routes'),
  taskService = require('./services/TaskService'),
  hostname = '127.0.0.1',
  port = 3000;

app.use(bodyParser.json({extender: true, limit: "20mb"}));
router.include(app);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

