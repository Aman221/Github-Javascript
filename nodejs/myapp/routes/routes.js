const controller = require('../controller/index');

exports.include = (app) => {
    app.get("/", controller.sayHello);
    app.get("/getTasks", controller.getTasks);
    app.get("/getMyProfile", controller.getMyProfile);
};
