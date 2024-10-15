const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task")
        resolve();
    },1000)
});
promiseOne.then(function(){
    console.log("execute promiseOne");
})




new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000);

}).then(function(){
    console.log("execute promise 2");

})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sarvdhan",email:"abc@sardhan.com"})
    })
}).then(function(user){
    console.log(user)
})



const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"sarvdhan",email:"abc@sardhan.com"})
        }
        else
        {
            reject("Error:something went wrong")
        }
    },1000);
}).then(function(user){
    console.log(user);
    return user.username;
    return user.email;
})
.then(function(username)
{
    console.log(username);
})
.catch((error)=>{
    console.error(error)
})
.finally(()=>{
    console.log("finally is called")
})