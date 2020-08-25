const controller = require('../controllers/index');

exports.include = (app) => {
    app.get("/", controller.sayHello);
    app.get("/task", controller.getTask);
    app.get("/profile", controller.getMyProfile);
    app.get("/task/:id", controller.getTaskById);
    app.delete('/task/:id', controller.deleteTask)
    app.post('/task', controller.addTask);
};
