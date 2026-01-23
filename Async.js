// console.log("1");
// console.log('2');
// //Uses for Asynchronus Execution in which we came time after completion of time function run
// setTimeout(()=>{
// console.log('3');
// },4000);
// console.log('4');
// console.log('5');


          /*Callback*/ //used for each instruction delay for some time

          function getData(dataId,nextdata){
            setTimeout(()=>{
                 console.log("Data:",dataId);
                 if(getData){
                   getData(2);
                 }
                
            },2000)
           
          }
          getData(1,()=>{
            getData(2);
          })



     