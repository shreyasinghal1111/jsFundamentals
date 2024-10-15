let user={
    name:"John",
    age:30,
    welcomeMessage:function(){
        console.log(this.name);
        console.log(this);
    }
};
user.welcomeMessage();
// this keyword refers to the object that is executing the current function
user.name="Sam";
user.welcomeMessage();