window.onload = function(){

var clock= document.getElementById("clock");



    //käivitan intervalli/500= 500 millisekundit = 0,5s
          writeDate();//et ära peita 0:0:0
    window.setInterval(function(){
          writeDate();
    }, 500);

};

//võtab aja ja kirjutab aja clock elemendi sisse
function writeDate(){
  var today = new Date();
  var hours= today.getHours("H");
  var minutes= today.getMinutes("Min");
  var seconds = today.getSeconds("Sec");
  clock.innerHTML = addZeroBefore(hours) + ":" +addZeroBefore(minutes)+":"+addZeroBefore(seconds);

}
 function addZeroBefore(number){


  if (number<10){
    number= "0"+number;
}

   return number;
 }
