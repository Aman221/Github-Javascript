const { json } = require("express");

modules.exports = (() => {
    let self= {};

    self.getTask = (req, res, done) => {
        let task = taskService.findALL();
        res.json(task);
    };

    self.create = (req, res, done) => {
        let newTask = service.add(task)
        res.json(newTask);
    };

    self.sayHello = (res, req, done) => {
        let msg = taskService.sayHello();
        res.send(msg);
    };

    self.getMyProfile = (req, res, done) => {

    };

    return self;

});