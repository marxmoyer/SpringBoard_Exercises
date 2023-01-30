// function countDown(num){
    
//     let subtract = setInterval(function(){
//         num--;
//         if(num <= 0){
//             clearInterval(subtract);
//             console. log('Done!')
//         }
//         else{
//             console.log (num)
//         }

//     },1000)
// }

function randomGame(){
   let val;
   let count = 0;
   let timer = setInterval(function(){
         val = Math.random();
         count++
            if(val > .75){
                clearInterval(timer)
                console.log("it took", count,"times to find a number highter then .75", val)
               

            }
        },1000)
        
         
    }

