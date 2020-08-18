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

    self.getSpecificTask = (req, res, done) => {
        res.render('test', {output: req.params.id});
    };
    // self.addTask = (req, res, done) => {
    //     let newtask = taskService.addtask();
    //     res.render(newtask);
    // };

    return self;

});
