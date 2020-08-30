const Repo = require('../services/repoService');

module.exports = (() => {
  let self = {};

  self.sayHello = ()=>{
    let greeting = Repo.sayHello();
    return greeting;
  };

  self.getMyProfile = ()=>{
    let profile = Repo.getMyProfile();
    return profile;
  };

  self.getTasks = ()=>{
    let taskList = Repo.getTasks();
    return taskList;
  };
  
  self.getTaskById = (taskID)=>{
    let specifictask = Repo.getTaskById(taskID);
    return specifictask;
  };

  self.deleteTask = (taskID)=>{
    let deletedtask = Repo.deleteTask(taskID);
    return deletedtask;
  };
  
  self.addTask = (newTask)=>{
    let addedtask = Repo.addTask(newTask);
    return addedtask;  
  };

  return self;
})();