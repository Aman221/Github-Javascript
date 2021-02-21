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

    return self; 
})();



/*

Adding part

INSERT INTO `appschema`.`task`
(`title`,
`date`,
`status`,
`dateCreated`)
VALUES
('Task 1',
'2020-09-01',
'new',
SYSDATE());


Get Part

SELECT * FROM `appschema`.`task`


Get specific

SELECT * FROM `appschema`.`task` WHERE id = 2


Delete Specific

DELETE FROM `appschema`.`task` WHERE id = 2


Change Specific

UPDATE `appschema`.`task` SET
title = 'Fixed Task',
status = 'unfinished'
WHERE id = 1

*/