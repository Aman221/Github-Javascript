exports.getMyProfile = (req, res, done)=>{
  let user = {
    name: "Aman",
    email: "me@gmail.com",
    phone: "999-9999",
    favoriteColor: "Blue"
  };
  return res.send(user);
};

exports.getTasks = (req, res, done)=>{
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
  return res.send(task);
};

exports.sayHello = (req, res, done)=>{
    return res.send({
        action: "default",
        message: "hello world"
    });
};