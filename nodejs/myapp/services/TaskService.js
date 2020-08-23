module.exports = (() => {
  let self = {};
  let tasks = [
    {
      id: "1",
      title: "Task One",
      date: "2020-07-18",
      status: "new",
      dateCreated: Date()
    },
    {
      id: "2",
      title: "Task One",
      date: "2020-07-18",
      status: "new",
      dateCreated: Date()
    }
  ];

  self.getMyProfile = (req, res)=>{
    let user = {
      name: "Aman",
      email: "me@gmail.com",
      phone: "999-9999",
      favoriteColor: "Blue"
    };
    return res.send(user);
  };

  self.getTasks = (req, res)=>{
    return res.send(tasks);
  };

  self.sayHello = (req, res)=>{
    return res.send({
        action: "default",
        message: "hello world"
    });
  };
  
  self.getSpecificTask = (req, res, )=>{
    return res.send(tasks)
  };
  
  // self.addtask = (req, res)=>{
  //   let newTask = req.body.newTask;
  //   tasks.push(newTask);
  //   res.redirect('/');
  //   tasks(array)
  // };

  return self;
})();