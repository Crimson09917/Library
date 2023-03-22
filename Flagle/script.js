function restart(){
    location.reload()
}

function victory(fullName){
    for(let i=0;i<quadrants.length;i++){
        let rectangle = document.getElementById(`rectangle${quadrants[i]}`)
        rectangle.remove()
    }
    let textContainer = document.getElementById("textContainer")
    textContainer.innerHTML = `Correct! The country was:<br>${fullName}<br><br>`
    let button = document.createElement("button")
    button.innerHTML = "Play again"
    button.onclick = restart
    textContainer.appendChild(button)

}
function failure(){
    let textContainer = document.getElementById("textContainer")
    textContainer.innerHTML = `The country was:<br>${fullName}`
    let button = document.createElement("button")
    button.innerHTML = "Play again"
    button.onclick = "restart()"
    textContainer.appendChild(button)
}

function initialise(){
    // Adds all the selection options
    let select = document.getElementById("countrySelect")
    for(key in flagDictionary){
        let option = document.createElement("option")
        option.value = key
        option.name = flagDictionary[key].fullName
        option.innerHTML = flagDictionary[key].fullName
        select.appendChild(option)
    }
    play()
}

var countryImg = "none"
var quadrants = [1, 2, 3, 4, 5, 6]


function play(){
    // Set up from previous game
    document.getElementById("guessList").innerHTML = ""
    // Select random country
    let countryNames = []
    for(key in flagDictionary){
        countryNames.push(key)
    }
    let index = Math.floor(Math.random()*countryNames.length)
    countryImg = countryNames[index]
    
    console.log(countryImg)
    var ratio = flagDictionary[countryImg].ratio
    console.log(ratio)

    document.getElementById("country_img").src = `flags/${countryImg}`
    document.getElementById("mainContainer").style.height = 500*ratio
    for(let i=1;i<7;i++){
        document.getElementById(`rectangle${i}`).style.height = (500*ratio)/2
    }
}

function guess(){
    let guess = document.getElementById("countrySelect").value
    fullName = flagDictionary[guess].fullName
    if(guess == countryImg){
        victory(fullName)
    }else{
        // Add to guess list:
        document.getElementById("guessList").innerHTML += `<br>${fullName}`
        // Select random rectangle
        let index = Math.floor(Math.random()*quadrants.length)
        let rectangle = document.getElementById(`rectangle${quadrants[index]}`)
        quadrants.splice(index,1)
        rectangle.remove()
        if(quadrants.length == 0){
            failure()
        }
    }
}

$(function () {
    $("select").select2();
  });


initialise()