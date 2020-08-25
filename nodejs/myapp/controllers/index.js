const { json, response } = require("express");
    taskService = require('../services/TaskService');

module.exports = (() => {
    let self= {};

    self.sayHello = (req, res, done) => {
        let msg = taskService.sayHello();
        res.send(msg);
    };

    self.getTask = (req, res, done) => {
        let task = taskService.getTasks();
        res.json(task);
    };

    self.getMyProfile = (req, res, done) => {
        let profile = taskService.getMyProfile();
        res.send(profile);
    };

    self.getTaskById = (req, res, done) => {
        let taskId = req.params.id;
        let taskData = taskService.getTaskById(taskId);
        res.send(taskData);
    };

    self.deleteTask = (req, res, done) => {
        let taskId = req.params.id;
        let result = taskService.deleteTask(taskId);
        let responseData = {
            id: taskId,
            recordDeleted: result
        }
        res.send(responseData);
    };
    
    self.addTask = (req, res, done) => {
        let data = req.body;
        let repsonseData = taskService.addTask(data);
        res.send(repsonseData);
    };

    return self;

})();