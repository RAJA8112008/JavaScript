//    let div=document.querySelector('div');
// div.innerText;

//OUTPUT-> 'Fruits\n\nMango\nApple\nGauava\nBanana'

//div.innerHTML;

/*output-> '\n    <ul>\n        <p>Fruits</p>\n\n        <li>Mango</li>\n       <li>Apple</li>\n       <li>Gauava</li>\n       <li>Banana</li>\n\n    </ul>\n    '*/

//div.innerText='Raja'; ->change the content of that particular tag

// div.innerHTML='<div>Raja</div>';
//output->'<div>Raja</div>'

                           /* 2. Practice  Question */
      //input->hello js ,from apna college  ->output->hello js ,from apna college  append,(apna collegee)
//   let h2=document.querySelector('h2');
//   h2.innerText='apna college';  ->output-> Apna college
    // h2.innerText=h2.innerText+'from Apna college';
   

                        /* practice  Question ->give unique name each div*/

     let divs= document.querySelectorAll('.box');
        let index=1;
    // for(let div of divs){
    //  div.innerText=`first div ${index}`;
    //  index++;
    //  }
    divs.forEach((div)=>{
         div.innerText=`first div ${index}`;
          index++;
    })