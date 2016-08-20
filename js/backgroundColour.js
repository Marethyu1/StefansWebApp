// toggle_color("#61beb3", "#90a2c6", 4000, 4000);

// function toggle_color(color1, color2, cycle_time, 
// ) {

//     setInterval(function first_color() {
//         document.body.style.backgroundColor = color1;
//         setTimeout(change_color, wait_time);
//     }, cycle_time);

//     function change_color() {
//         document.body.style.backgroundColor = color2;
//     }
// } 

function set() {
   
    var c = "#00FFFF";
    var d = "#FFFFFF";


    test(c);
    c =  "#FFFFFF";
    test(c);
    //test(d);
    //setTimeout2;
    


}


function test(c){
    setTimeout(function (){

             //something you want delayed
             
             document.body.style.background =  c;

         }, 1000);


}



// function change_bg(){



// }
// //document.body.style.background = "#00FFFF";
// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }


// function wait(ms){
//    var start = new Date().getTime();
//    var end = start;
//    while(end < start + ms) {
//      end = new Date().getTime();
//   }
// }