const controller = require('../controllers/index');

exports.include = ((app) => {
    app.get("/", controller.sayHello);
    app.get("/task", controller.getTask);
    app.get("/profile", controller.getMyProfile);
    app.get("/task/:id", controller.getSpecificTask);
    // app.post('/addtask', controller.addTask);
});
