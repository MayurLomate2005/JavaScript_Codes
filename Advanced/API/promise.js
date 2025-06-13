const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is my first promise");
        resolve(); // You must call resolve or reject to complete the promise
    }, 2000);
});

myPromise.then(()=>{
    console.log("it is running well");
    
})

//This is Syntax of promise 



async function usefetch (){
   try{
     const fetching = await fetch("https://api.github.com/users/MayurLomate2005")
    const data = await fetching.json();
    console.log(`the total data is :`,data )
   }
   catch(e){
    console.log("the error is :-",e);
    

   }

   
}

usefetch()

// now this is done using try and catch block 

const datafetch = fetch("https://api.github.com/users/MayurLomate2005")
datafetch
.then((response)=>{
    return response.json();
})
.then((data) =>{
    console.log("the data is :",data);
    
})
.catch((e) => {
        console.log("The error is:", e);
 })

 // now the same is done by using then and catch block 