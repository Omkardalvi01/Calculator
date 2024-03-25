let a = 0;
let b = 0;
let c;
let s ;
const buttons = document.querySelectorAll(".button") ;
const dis = document.getElementById("screen");
const pdis = document.getElementById("pscreen");
let ac = true;
function appendtodis(x){
    if(ac){
    dis.value += x;
    }
}
function Calculate(){
    b += parseFloat(dis.value);
    s= s + dis.value;
    pdis.value = s;
    switch(c){
        case'+':
            dis.value = a + b;
            break;
        case'-':
            dis.value = a - b;
            break;
        case'x':
            dis.value = a * b;
            break;
        case'÷':
            dis.value = a / b;
            break;
    }
    ac = false;
    
}
function operate(x){
    a += parseFloat(dis.value);
    s = dis.value + x;
    pdis.value = s;
    c = x;
    dis.value = "";

}
function reset(){
    a = 0;
    b = 0;
    dis.value = "";
    s ="";
    pdis.value = s;
    ac = true;
    
}