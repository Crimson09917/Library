async function initalise(){
    var running = true
    addMap()
    start()
//     while(running){
        
//         console.log("AUAGUUHGHGH")
//     }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var clockInterval = null;
var countdownInterval = null;
function start() {
  stop(); // stoping the previous counting (if any)
  clockInterval = setInterval(upClock, 1000);
  countdownInterval = setInterval(downClock, 1000);
}
var stop = function() {
  clearInterval(clockInterval);
  clearInterval(countdownInterval);
}

var clock = ["02", "44", "53"]
var countdown = ["14", "00", "00"]
function upClock(){
    clock[0] = Number(clock[0])
    clock[1] = Number(clock[1])
    clock[2] = Number(clock[2])
    
    clock[2] += 1
    if(clock[2] == 60){
        clock[2] = 0
        clock[1] += 1
        if(clock[1] == 60){
            clock[1] = 0
            clock[0] += 1
        }
    }
    for(let i=0;i<3;i++){
        if(clock[i] < 10){
            clock[i] = "0"+String(clock[i])
        }else{
            clock[i] = String(clock[i])
        }
    };
    if(!stateTriggered){
        let newClock = clock[0]+":"+clock[1]+":"+clock[2]
        document.getElementById("clock").innerHTML = newClock
    }
}

function downClock() {
    countdown[0] = Number(countdown[0])
    countdown[1] = Number(countdown[1])
    countdown[2] = Number(countdown[2])
    countdown[2] -= 1
    if(countdown[2] == -1){
        countdown[2] = 59
        countdown[1] -= 1
        if(countdown[1] == -1){
            countdown[1] = 59
            countdown[0] -= 1
        }
    }
    for(let i=0;i<3;i++){
        if(countdown[i] < 10){
            countdown[i] = "0"+String(countdown[i])
        }else{
            countdown[i] = String(countdown[i])
        }
    };
    if(!stateTriggered){
        let newClock = countdown[0]+":"+countdown[1]+":"+countdown[2]
        document.getElementById("countdown").innerHTML = newClock
    }
}

var stateTriggered = false
var saved = ""
stateClicked = ""
function stateClick(state){
    if(!stateTriggered){
        stateTriggered = true
        stateClicked = state
    }else{
        if(state == stateClicked){
            stateTriggered = false
            stateClicked = ""
        }else{
            stateClicked = state
        }
    }

    if(stateTriggered){
        state = states[state]

        heading = document.createElement("h3")
        heading.innerHTML = state.binomial
        
        para = document.createElement("p")
        para.innerHTML = `<span>NAME: </span><span class='userInput righters'>${state.name}</span>`
        para.innerHTML += "<br>"
        para.innerHTML += `<span>POPULATION: </span><span class='userInput righters'>${state.population}</span>`
        para.innerHTML += "<br>"
        para.innerHTML += `<span>CAPITAL: </span><span class='userInput righters'>${state.capital}</span>`
        para.innerHTML += "<br>"
        para.innerHTML += `<span>LARGEST CITY: </span><span class='userInput righters'>${state.largestCity}</span>`
        para.innerHTML += "<br>"

        document.getElementById("infoBox").innerHTML = ""
        document.getElementById("infoBox").appendChild(heading)
        document.getElementById("infoBox").appendChild(para)
    }else{
        generateInfoBox()
    }
}
function generateInfoBox(){
    document.getElementById("infoBox").innerHTML = `
    <p>TIME:
        <span id="clock" style="font-family: digital-clock-font;">${clock[0]}:${clock[1]}:${clock[2]}</span>
        <span>     </span>
        <span>DETONATION:</span> 
        <span id="countdown" class="RED" style="font-family: digital-clock-font">${countdown[0]}:${countdown[1]}:${countdown[2]}</span>
    </p>
    <p>
        DEATHS:<span id="deaths" class="RED" style="position: absolute; right:740px">0</span>
    </p>
    <p>
        EVACUATIONS:<span id="evacuations" class="BLUE" style="position: absolute; right:740px">0</span>
    </p>
    `
}

function addMap(){
    document.getElementById("mapDiv").innerHTML = svgMap
}

initalise()