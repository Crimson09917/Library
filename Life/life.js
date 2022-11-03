// Completely redoing file
var rows
var columns = 100
var repeat
var centreColumn = Math.ceil(columns/2)
var centreRow = Math.ceil(rows/2)
var verticalOn = false
var horizontalOn = false
var preset = "none"

var dead = "black"
var alive = "white"

var borderActive = dead

var reference

var creatingPreset = false
var setOrigin = false
var setPreset1 = false
var setPreset2 = false

var customOrigin = false
var customCoords1 = false
var customCoords2 = false


function createCanvas(){
    rows = document.forms["toolbar"]["height"].value
    columns = document.forms["toolbar"]["width"].value

    centreColumn = Math.ceil(columns/2)
    centreRow = Math.ceil(rows/2)

    let canvas = document.getElementById("canvas")
    canvas.innerHTML = ""
    for(y=0; y<=rows; y++){
        let row = document.createElement("div")
        row.className = "row"
        row.id = y
        canvas.appendChild(row)
        for(x=0; x<=columns; x++){
            let pixel = document.createElement("div")
            pixel.className = "pixel"
            pixel.id = x+","+y
            pixel.style.backgroundColor = dead
            pixel.style.border = "0.5px"
            pixel.style.borderColor = dead
            pixel.style.borderStyle = "solid"
            pixel.setAttribute("onclick", "pixelClick(this)")
            pixel.setAttribute("ondragover", "pixelClick(this)")
            pixel.draggable = true
            row.appendChild(pixel)
        }
    }
}

function generate(){
    createCanvas()
    let input = document.forms["toolbar"]["weight"].value
    for(y=0; y<100; y++){
        for(x=0; x<columns; x++){
            let pixel = document.getElementById(x+","+y)
            weight = Math.floor(Math.random()*input)
            if(weight == 0){
                pixel.style.backgroundColor = alive
            }
        }
    }
}
function iterate(){
    living = []
    for(y=0;y<rows;y++){
        for(x=0;x<rows;x++){
            let pixel = document.getElementById(x+","+y)
            let state = pixel.style.backgroundColor
            if(state==alive){
                living.push(x+","+y)
            }
        }
    }
    // There are spaces in the rgb thingy.
    let affected = []
    living.forEach(pixel => {
        let idSplit = pixel.split(",")
        for(y=-1;y<2;y++){
            for(x=-1;x<2;x++){
                let newPixel = (parseInt(idSplit[0])+x)+","+(parseInt(idSplit[1])+y)
                if(exists(newPixel)){
                    affected.push(newPixel)
                }
            }
        }
    })
    var originalColour = alive
    let changes = []
    affected.forEach(pixel =>{
        let neighbours = 0
        let idSplit = pixel.split(",")
        for(y=-1;y<2;y++){
            for(x=-1;x<2;x++){
                let newPixel = (parseInt(idSplit[0])+x)+","+(parseInt(idSplit[1])+y)
                if(newPixel == pixel){
                    continue
                }
                if(exists(newPixel)){
                    if(document.getElementById(newPixel).style.backgroundColor == originalColour){
                        neighbours ++
                    }
                }
            }
        }
        // If the pixel itself is alive, then we need to deduct one neigbour

        // Now that we've calculated the number of alive neighbours, we call the function rules
        changes.push([pixel,rules(pixel, neighbours)])

    })
    // The changes have been calculated, now we execute them at the same time.
    console.log(changes)
    // Need to execute changes after the colours have been changed but the changes are defined by the for loop before. So the rules function needs to be called after the colours are changed. <-------------------------------------------
    if(rgbToggled){
       var randomRed = Math.floor(Math.random()*255);
       var randomGreen = Math.floor(Math.random()*255);
       var randomBlue = Math.floor(Math.random()*255);
       var randomColor = "rgb("+String(randomRed)+", "+String(randomGreen)+", "+String(randomBlue)+")"
       document.getElementById("aliveColour").value = randomColor
       alive = randomColor
       living.forEach(pixel => {
           document.getElementById(pixel).style.backgroundColor = alive
        })
    }
    execute(changes)
}
function exists(id){
    let idSplit = id.split(",")
    if(idSplit[0] < 0 || idSplit[0] > columns-1){
        return false
    }
    if(idSplit[1] < 0 || idSplit[1] > rows-1){
        return false
    }
    return true
}
function rules(pixel, neighbours){
    state = document.getElementById(pixel).style.backgroundColor
    if(state == alive){
        if(neighbours < 2){
            return dead
        }else if(neighbours > 3){
            return dead
        }else{
            return alive
        }
    }else if(state == dead){
        if(neighbours == 3){
            return alive
        }
    }
}

function execute(changes){
    for(i=0;i<changes.length;i++){
        document.getElementById(changes[i][0]).style.backgroundColor = changes[i][1]
    }
}
function play(){
    if(repeat == 1){
        repeat = setInterval(iterate, document.getElementById("clock").value)
    }else{
        pause()
        repeat = setInterval(iterate, document.getElementById("clock").value)
    }
}
function pause(){
    clearInterval(repeat)
}
function pixelClick(pixel){
    if(creatingPreset == false){
        if(preset == "none"){
            var coords = (pixel.id).split(",")

            function vertical(coords, repeat){
                let newCoords = (centreColumn+(centreColumn-parseInt(coords[0])))+","+coords[1]
                let state = document.getElementById(newCoords).style.backgroundColor
                document.getElementById(newCoords).style.backgroundColor = update(state)
                if(repeat){
                    horizontal(coords)
                    horizontal(newCoords.split(","))
                }
            }
            function horizontal(coords){
                let newCoords = coords[0]+","+(centreRow+(centreRow-parseInt(coords[1])))
                let state = document.getElementById(newCoords).style.backgroundColor
                document.getElementById(newCoords).style.backgroundColor = update(state)
            }

            if(verticalOn && !horizontalOn){
                vertical(coords, false)
            }
            if(horizontalOn && !verticalOn){
                horizontal(coords)
            }
            if(verticalOn && horizontalOn){
                vertical(coords, true)
            }
            pixel.style.backgroundColor = update(pixel.style.backgroundColor)
        }else{
            loadPreset(pixel)
        }
    }else if(creatingPreset == true){
        if(setOrigin == true){
            customOrigin = (pixel.id).split(",")
            createPreset1()
        }else if(setPreset1 == true){
            customCoords1 = (pixel.id).split(",")
            createPreset2()
        }else if(setPreset2 == true){
            customCoords2 = (pixel.id).split(",")
            finishPreset()
        }
    }
}
function update(state){
    if(state == alive){
        return dead
    }else{
        return alive
    }
}
function checkbox(checkbox){
    if(checkbox == "vertical"){
        if(verticalOn == true){
            verticalOn = false
        }else{
            verticalOn = true
        }
    }else{
        if(horizontalOn == true){
            horizontalOn = false
        }else{
            horizontalOn = true
        }
    }
}
function setColours(){
    formerAlive = alive
    formerDead = dead
    alive = String(document.getElementById("aliveColour").value)
    dead = String(document.getElementById("deadColour").value)
    document.getElementById("borderState").value = dead

    for(y=0; y<=rows; y++){
        for(x=0; x<=columns; x++){
            let state = document.getElementById(x+","+y).style.backgroundColor
            if(state==formerAlive){
                document.getElementById(x+","+y).style.backgroundColor = alive
            }else{
                document.getElementById(x+","+y).style.backgroundColor = dead
            }
        }
    }
}
function invertColours(){
    document.getElementById("aliveColour").value = dead
    document.getElementById("deadColour").value = alive
    setColours()
    activateBorder()
}

function radio(input){
    preset = input
}
function loadPreset(pixel){ // Pixel is the entire div btw
    let origin = (pixel.id).split(",")
    let x = parseInt(origin[0])
    let y = parseInt(origin[1])
    if(preset=="line"){
        reference = presets.line
    }else if(preset=="pulsar"){
        reference = presets.pulsar
    }else if(preset=="gliderGun"){
        reference = presets.gliderGun
    }
    for(i=0;i<reference.length;i++){
        if(exists((reference[i][0]+x)+","+(reference[i][1]+y))){document.getElementById((reference[i][0]+x)+","+(reference[i][1]+y)).style.backgroundColor = alive}
    }
}
function activateBorder(){
    if(borderActive != dead){
        borderActive = dead
    }else if(borderActive == dead){
        borderActive = document.getElementById("borderState").value
    }
    for(y=0;y<=rows;y++){
        for(x=0;x<=columns;x++){
            document.getElementById(x+","+y).style.borderColor = borderActive
        }
    }
}
var customPresets = 0
function addRadio(){
    let newRadio = document.createElement("input")
    newRadio.setAttribute("id", "customPreset"+customPresets)
    newRadio.setAttribute("name", "preset")
    newRadio.setAttribute("onclick","radio('customPreset"+customPresets+"')")
    customPresets++
    radios.appendChild(newRadio)
}
function createOrigin(){
    creatingPreset = true
    setOrigin = true
    alert("Click on origin pixel")
}
function createPreset1(){
    setOrigin = false
    setPreset1 = true
    alert("Click on boundary 1 pixel")
}
function createPreset2(){
    setPreset1 = false
    setPreset2 = true
    alert("Click on boundary 2 pixel")
}
function finishPreset(){
    creatingPreset = false
    setPreset2 = false
    alert("Creating Preset")
    console.log(customOrigin, customCoords1, customCoords2)

    customCoords1[0] = Number(customCoords1[0])
    customCoords1[1] = Number(customCoords1[1])
    customCoords2[0] = Number(customCoords2[0])
    customCoords2[1] = Number(customCoords2[1])

    // Create a for loop that adds all the pixels within the bounds to an array
    // Not so easy, maybe best to consider things in terms of a rectangle and locate the top-left corner of said rectangle. (Find the lowest x value from customCoords1 and 2, then y).
    // Then express each of these coordinates in relation to the origin.

    // for(y=customCoords1[0];y<customCoords2[0]){}
}
var rgbToggled = false 
function rgb(){
    if(rgbToggled == true){
        rgbToggled = false
    }else{
        rgbToggled = true
    }
}
var epilepsyToggled = false
function epilepsyToggled(){
    if(epilepsyToggled == true){
        epilepsyToggled = false
    }else{
        epilepsyToggled = true
    }
}
function spaceMovie(){
    window.location.href = "https://www.google.com/search?q=space+movie+1992"
}



createCanvas()


/*
Error list:
(Because apparently I need one of these now)

- Hashtags (Hexadecimal Colours) don't work in the alive colour.
    - And they cause really weird stuff to happen when used as the dead colour.
- Toggle border is all kinds of wrong.

*/
