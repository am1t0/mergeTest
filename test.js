
function RicePromise(){
   const bucket = ['coffee','chips','vegies','salt']
   return new Promise((resolve,reject)=>{
    if(bucket.includes('vegies') && bucket.includes('salt'))
         resolve({value:'friedRice'})
     else 
         reject('not possible');   
   })
}

RicePromise().then((value)=>{
    console.log('value',value);
}).catch((error)=> console.log(error))