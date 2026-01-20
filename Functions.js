// function myfunction(){
//     console.log("Welcome");
//     console.log("Hello");
// }
//  myfunction();

/* Arrow Function*/
//  const Arrsum=(a,b)=>{
//     console.log(a+b);
//  };

//  Arrsum(7,3);

//  const printHell0=()=>{
//   console.log("Hello friends");
//  }



      /*1.Practice Question*/  // Hello ->vowels->2

     // methode 1
      
//   function countVowel(val) {
//     let count = 0;
//     let vowel = ['A','E','I','O','U','a','e','i','o','u'];

//     for (let i of val) {
//         for (let j of vowel) {
//             if (i === j) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// console.log(countVowel("hello"));

            //Methode 2
    // function countVowel(val){
    //     let count=0;
    //     let vowel="AEIOUaeiou";
    //     for(let i of val){
    //         if(vowel.includes(i)){
    //             count++;
    //         }
    //     }
    //     return count;
    // }
    // console.log(countVowel("Hello"));

    /* USING ARROW FUNCTION*/
//     const countvowel=(val)=>{
//         let count = 0;
//    let vowel = ['A','E','I','O','U','a','e','i','o','u'];

//     for (let i of val) {
//          for (let j of vowel) {
//            if (i === j) {
//                  count++;
//             }
//        }
//      }
//     return count;

//     }
//     console.log(countvowel("hello"));

    //FOR EACH LOOP


    let arr=[10,20,30,40,50];
    arr.forEach(function printval(val){
        console.log(val);
    })