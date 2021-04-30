(async function(){
    try{
        await Promise.all([
            interview(1),
            interview(2),
            interview(3),
            interview(4)
        ])
    }
    catch(e){
       return console.log('fail in ' + e.round);
    }
    console.log('smlie');
})()



function interview(round){
    return new Promise((res,rej)=>{ 
        setTimeout(()=>{
            if(Math.random() > 0.1){
                res()
            }else{
                let e = new Error("failed")
                e.round = round
                rej(e)
            } 
        }, 300)
    })
}
// function interview(round) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.2) {
//                 const error = new Error('failed');
//                 error.round = round;
//                 reject(error);

//             } else {
//                 resolve('success');
//             }
//         }, 500)
//     })
// }