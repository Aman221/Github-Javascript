<<<<<<< HEAD
const { json } = require("express");
    taskService = require('../services/TaskService');

module.exports = (() => {
    let self= {};

    self.getTask = (req, res, done) => {
        let task = taskService.getTasks();
        res.json(task);
    };

    self.sayHello = (res, req, done) => {
        let msg = taskService.sayHello();
        res.send(msg);
    };

    self.getMyProfile = (req, res, done) => {
        let profile = taskService.getMyProfile();
        res.send(profile);
    };

    return self;

});
=======
>>>>>>> parent of d8cf180... Separation of secretary, gopher, and workers
