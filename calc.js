//ootame kuni leht on laetud

window.onload = function(){



//saan kätte väljad


var cm = document.getElementById("cm");
var inch= document.getElementById("inch");
//lisan nuppudele kuularid

document.getElementById("to-inch").addEventListener("click",converToInch);
document.getElementById("to-cm").addEventListener("click",function(){
  cm.value = inch.value*2.54;
});


};
function converToInch(){

    inch.value= cm.value/2.54;
}
