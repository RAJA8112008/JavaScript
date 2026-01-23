
     /*Promice chaining*/

// function getData(dataId){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Data: ",dataId);
//         resolve("Sucess");
//     },3000);
// });
// }
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//     console.log(res);
// })
// })
         /*async Await*/

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data :",dataId);
//             resolve("Sucess");
//         },2000);
//     })
// }

// async function deserveData() {
//       await getData(1);
//       await getData(2);
//       await getData(3);
// }

            /*IIFE*/
     
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data :",dataId);
            resolve("Sucess");
        },2000);
    })
}
(async function() {
      await getData(1);
      await getData(2);
      await getData(3);
})();