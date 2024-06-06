

let p = new Promise((resolve,reject)=>{
     setTimeout(()=>{
         console.log('Ok ji ')
         resolve(1);
     },1000)
})

p.then((value)=>{
    console.log('resolved 1');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log('reolved1 ke ander')
             resolve(1111)
        },1000)
    })
}).then((value)=>{
    console.log('first handler ka resolved vlaue',value);
})

p.then((value)=>{
    console.log('resolved 2');
    return 22222222222;
}).then((value)=>{
    console.log('iske pehele wale handler se koi bhi value reslove me ni isliye old hi rahega value 1 ',1);
})