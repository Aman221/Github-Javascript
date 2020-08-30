module.exports=(()=>{
    let tasks = {
        "1": { 
            id: "1", 
            title: "Task One", 
            date: "2020-07-18",
            status: "new",
            dateCreated: Date() 
        }, 
        "2": { 
            id: "2", 
            title: "Task One", 
            date: "2020-07-18", 
            status: "new", 
            dateCreated: Date() 
        } 
    } 
    let self= {};
    self.sayHello = ()=>{
        return {
            action: "default",
            message: "hello world"
        };
    };
    self.getMyProfile = ()=>{
        let user = {
            name: "Aman",
            email: "me@gmail.com",
            phone: "999-9999",
            favoriteColor: "Blue"
        };
        return user;
    };
    self.getTasks = ()=>{
        let taskList = [];
        for(key in tasks){
            let task = tasks[key];
            taskList.push(task)
        }
        return taskList;
    };
    self.getTaskById = (taskId)=>{
        let task = tasks[taskId];
        return task;
    };
    self.deleteTask = (taskId)=>{
        try{
          delete tasks[taskId];
          return true;
        }catch(e){
          return false;
        }
    };
    self.addTask = (newTask)=>{
        const id = (new Date().getTime());
        newTask.id = id;
        newTask.dateCreated = new Date()
        newTask.status = "New";
    
        tasks[id] = newTask;
        return newTask;  
    };
    /** * Define methods heere */ 
    return self; 
})();
