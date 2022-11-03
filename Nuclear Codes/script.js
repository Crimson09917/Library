async function initalise(){
    running = true
    setInterval(iterateClock(), 1000)
    // while(running){
        
    //     console.log("AUAGUUHGHGH")
    // }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function iterateClock(){
    let clockText = document.getElementById("clock").innerHTML
    let array = clockText.split(":")
    array[0] = Number(array[0])
    array[1] = Number(array[1])
    array[2] = Number(array[2])

    array[2] += 1
    if(array[2] == 60){
        array[2] = 0
        array[1] += 1
        if(array[1] == 60){
            array[1] = 0
            array[0] += 1
        }
    }
    for(let i=0;i<3;i++){
        if(array[i] < 10){
            array[i] = "0"+String(array[i])
        }else{
            array[i] = String(array[i])
        }
    };
    console.log(array)
    newClock = array[0]+":"+array[1]+":"+array[2]
    document.getElementById("clock").innerHTML = newClock
}

initalise()