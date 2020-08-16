const controller = require('../controllers/index');

exports.include = (app) => {
    app.get("/", controller.sayHello);
    app.get("/getTasks", controller.getTask);
    app.get("/getMyProfile", controller.getMyProfile);
};
