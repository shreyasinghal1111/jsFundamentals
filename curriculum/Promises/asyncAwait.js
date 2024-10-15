const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"sarvdhan",email:"abc@sardhan.com"})
        }
        else
        {
            reject("Error:something went wrong");
        }

    },1000);
});
async function consumePromise(){
    try {
        const response=await promise;
        console.log(response);
        
    } catch (error) {
        console.error(error);
        
    }
    
}
consumePromise();




// example 2



async function getUsers(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        // if I don't use await below then it will return a promise in pending state
        const data= await response.json(); 
        console.log(data)

        
    } catch (error) {
        console.log(error)
        
    }
}
getUsers();


