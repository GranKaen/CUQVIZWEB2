let write = document.querySelector(".write");
let theTimer = document.querySelector(".timer");
let originText = document.querySelector("#test p").innerHTML;
let testArea = document.querySelector("#test-area");
let Button = document.querySelector("#button");

var timertrue = false;
var timer = [0,0,0,0];
var x;

function decimal(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
 }
function Timer() {
    let currentTime = decimal(timer[0]) + ":" + decimal(timer[1]) + ":" + decimal(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
    
    if(timer[1] == 30){
        reset()
        write.style.borderColor = "red";
        testArea.value = "დრო გაგივიდა, სცადე თავიდან.";
    }
}
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timertrue) {
        timertrue= true;
        x = setInterval(Timer, 10);
    }
    console.log(textEnterdLength);
}
function Check() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);
    if (textEntered == originText) {
        clearInterval(x);
        write.style.borderColor = "gold";
    
    } else {
        if (textEntered == originTextMatch) {
            write.style.borderColor = "green";
        } else {
            write.style.borderColor = "red";
        }
    }
}
function reset() {
    clearInterval(x);
    x = null;
    timer = [0,0,0,0];
    timertrue = false;
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    write.style.borderColor = "black";
}
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", Check, false);
Button.addEventListener("click", reset, false);

