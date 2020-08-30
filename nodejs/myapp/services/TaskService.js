const Repo = require('./services/repoService');

module.exports = (() => {
  let self = {};

  self.sayHello = ()=>{
    let greeting = Repo.findAll();
    return welcomemessage;
  };

  self.getMyProfile = ()=>{
    let profile = Repo.findAll();
    return user;
  };

  self.getTasks = ()=>{
    let task = Repo.findAll();
    return taskList;
  };
  
  self.getTaskById = ()=>{
    let specifictask = Repo.findAll();
    return task;
  };

  self.deleteTask = (taskID)=>{
    let deletedtask = Repo.deleteTask();
    return taskID;
  };
  
  self.addTask = ()=>{
    let addedtask = Repo.findAll();
    return newTask;  
  };

  return self;
})();