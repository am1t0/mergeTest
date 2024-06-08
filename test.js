
function RicePromise(){
    const bucket = ['biscuits','chips','Poha','vegies','Chicken','eggs','aftrica','t20WC','ICC']
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