var intialised = false
var rows = 50
var columns = 50
var mines = []
var flags = []

function generate(rows,columns){
    let grid = document.getElementById("grid")
    grid.innerHTML = ""
    for(let y=0;y<columns;y++){
        let column = document.createElement("div")
        column.setAttribute("id","column"+y)
        column.setAttribute("class","column")
        grid.appendChild(column)
        for(let x=0;x<rows;x++){
            let pixel = document.createElement("div")
            pixel.setAttribute("id",x+","+y)
            pixel.className = "pixel"
            pixel.style.border = "1px rgb(39, 21, 7) solid"
            pixel.setAttribute("onclick","clickPixel(this)")
            column.appendChild(pixel)
        }
    }
}
function submitNow(){
    rows = Number(document.getElementById("x").value)
    columns = Number(document.getElementById("y").value)
    generate(rows,columns)
    document.getElementById("feedback").innerHTML = ""
}

function clickPixel(pixel){
    if(intialised){
        let coords = pixel.id
        // let div = document.getElementById(coords)

        if(pixel.innerHTML != ""){
            return false
        }

        if(numberedGrid[coords] == "mine"){
           revealMines()
        }else if(numberedGrid[coords] == 0){
            chainReaction(coords)
        }else{
            if(numberedGrid[coords] == "revealed"){
                return false
            }
            pixel.innerHTML = numberedGrid[coords]
            pixel.style.backgroundColor = "rgb(69, 21, 7)"
            numberedGrid[coords] == "revealed"
        }



    }else{
        alert("You must initialise the game first")
    }
}
function generate_mines(){
    var newMines = []
    if(document.getElementById("weight").checked == true){
        let weight = document.getElementById("minesInput").value
        for(let y=0;y<columns;y++){
            for(let x=0;x<rows;x++){
                mineValue = Math.floor(Math.random()*weight)
                if(mineValue == 0){
                    newMines.push(x+","+y)
                }
            }
        }
        
    }
    if(document.getElementById("fixed").checked == true){
        let grid = obtainGrid()
        let fixed = document.getElementById("minesInput").value
        console.log(fixed)
        console.log(grid.length)
        if(fixed < grid.length){
            for(let i=0;i<fixed;i++){
                let index = Math.floor(Math.random()*grid.length)
                newMines.push(grid[index])
                grid.splice(index,1)
            }
        }else{
            alert("You cannot have more mines than squares")
        }
    }
    mines = newMines
}

submitNow()

function initialise(){
    // Initial checks
    if(columns <= 0 || rows <= 0){
        alert("The grid is too empty")
        return false
    }
    if(mines.length == 0){
        console.log(mines)
        alert("You haven't generated any mines!!!!")
        return false
    }
    intialised = true
    // Generate numbers
    numbers()
}

function obtainGrid(){
    let grid = []
    for(let y=0;y<columns;y++){
        for(let x=0;x<rows;x++){
            grid.push(x+","+y)
        }
    }
    return grid
}
function revealMines(){
    mines.forEach(coords => {
        if(document.getElementById(coords).innerHTML == ""){
            let mineImage = document.createElement("img")
            mineImage.setAttribute("src","images/bomb.png")
            mineImage.className = "icon"
            document.getElementById(coords).appendChild(mineImage)
        }
        document.getElementById(coords).style.backgroundColor = "red"
    });
    gameOver()
}
function gameOver(){
    function checkFlags(mines, flags){
        let correct = 0
        let incorrect = 0
        loop1:
        for(let i=0;i<flags.length;i++){
            for(let j=0;j<mines.length;j++){
                if(mines[j] == flags[i]){
                    correct++
                    // incorrect--//In order to correct for the incorrect count after the loop Is it necessary??
                    continue loop1
                }
            }
            incorrect++
        }
        let missedMines = mines.length - correct
        let feedback = document.getElementById("feedback")
        feedback.innerHTML = `
        <p>You successfully labeled `+correct+` mines</p>
        <p>You unsuccessfully labeled `+incorrect+` mines</p>
        <p>You failed to label `+missedMines+` mines</p>
        `
        alert("You successfully labeled "+correct+" mines and unsuccessfully labeled"+incorrect+". You failed to label "+missedMines+".")
    }
    intialised = false
    checkFlags(mines, flags)
}
function numbers(){
    numberedGrid = {}
    for(let y=0;y<columns;y++){
        for(let x=0;x<rows;x++){
            numberedGrid[x+","+y] = 0
        }
    }
    mines.forEach(element => {
        let coords = element.split(",")
        coords[0] = Number(coords[0])
        coords[1] = Number(coords[1])
        numberedGrid[String(coords[0]-1)+","+(String(coords[1]-1))]++
        numberedGrid[String(coords[0])+","+(String(coords[1]-1))]++
        numberedGrid[String(coords[0]+1)+","+(String(coords[1]-1))]++
        numberedGrid[String(coords[0]-1)+","+(String(coords[1]))]++
        numberedGrid[String(coords[0]+1)+","+(String(coords[1]))]++
        numberedGrid[String(coords[0]-1)+","+(String(coords[1]+1))]++
        numberedGrid[String(coords[0])+","+(String(coords[1]+1))]++
        numberedGrid[String(coords[0]+1)+","+(String(coords[1]+1))]++
    });
    mines.forEach(element => {
        numberedGrid[element] = "mine"
    });
    // Should remove redundant coordinates
    // Do it during creation?? Nahhhhhhhh
    for(let i=-1;i<columns;i++){
        delete numberedGrid["-1,"+i]
        delete numberedGrid[i+","+columns]
        delete numberedGrid[i+","+rows]
    }
    for(let i=-1;i<columns;i++){
        delete numberedGrid[i+",-1"]
        delete numberedGrid[rows+","+i]
        delete numberedGrid[columns+","+i]
    }
    console.log(numberedGrid)
}

function chainReaction(coords){
    numberedGrid[coords] = "revealed"
    document.getElementById(coords).style.backgroundColor = "rgb(69, 21, 7)"
    array = coords.split(",")
    let x = Number(array[0])
    let y = Number(array[1])
    if(numberedGrid[(x-1)+","+(y-1)] != "revealed" && typeof numberedGrid[(x-1)+","+(y-1)] != "undefined"){
        clickPixel(document.getElementById((x-1)+","+(y-1)))
    }
    if(numberedGrid[(x)+","+(y-1)] != "revealed" && typeof numberedGrid[(x)+","+(y-1)] != "undefined"){
        clickPixel(document.getElementById((x)+","+(y-1)))
    }
    if(numberedGrid[(x+1)+","+(y-1)] != "revealed" && typeof numberedGrid[(x+1)+","+(y-1)] != "undefined"){
    clickPixel(document.getElementById((x+1)+","+(y-1)))
    }
    if(numberedGrid[(x-1)+","+(y)] != "revealed" && typeof numberedGrid[(x-1)+","+(y)] != "undefined"){
        clickPixel(document.getElementById((x-1)+","+(y)))
    }
    if(numberedGrid[(x+1)+","+(y)] != "revealed" && typeof numberedGrid[(x+1)+","+(y)] != "undefined"){
        clickPixel(document.getElementById((x+1)+","+(y)))
    }

    if(numberedGrid[(x-1)+","+(y+1)] != "revealed" && typeof numberedGrid[(x-1)+","+(y+1)] != "undefined"){
        clickPixel(document.getElementById((x-1)+","+(y+1)))
    }
    if(numberedGrid[(x)+","+(y+1)] != "revealed" && typeof numberedGrid[(x)+","+(y+1)] != "undefined"){
        clickPixel(document.getElementById((x)+","+(y+1)))
    }
    if(numberedGrid[(x+1)+","+(y+1)] != "revealed" && typeof numberedGrid[(x+1)+","+(y+1)] != "undefined"){
        clickPixel(document.getElementById((x+1)+","+(y+1)))
    }
}
function placeFlag(pixel){
    let hasFlag = false
    let coords = pixel.id
    if(pixel.className == "icon"){
        hasFlag = true
        console.log("You clicked on a flag")
        let parent = pixel.parentElement
        parent.innerHTML = ""
        flagCounter(-1,"INCREMENT")
    }
    for(let i=0;i<flags.length;i++){
        if(flags[i] == parent.id){
            flags.splice(i,1)
        }
    }
    if(hasFlag == false){
        if(document.getElementById(coords).style.backgroundColor == "rgb(69, 21, 7)"){
            return false
        }
        let flagImage = document.createElement("img")
        flagImage.setAttribute("src","images/flag.png")
        flagImage.className = "icon"
        document.getElementById(coords).appendChild(flagImage)
        flags.push(coords)
        flagCounter(1,"INCREMENT")
    }
}

window.addEventListener('mousedown', (event) => {
    if(event.button == 2){
        placeFlag(event.target)
    }
  })

function flagCounter(data, command){
    function initialise(){
        let counter = document.getElementById("counter")
        counter.innerHTML = 0
    }
    function increment(data){
        let counter = document.getElementById("counter")
        let count = Number(counter.innerHTML)
        counter.innerHTML = count+data
    }
    if(command == "INCREMENT"){
        increment(data)
        if(flags.length == mines.length){
            let finish = document.createElement("button")
            finish.setAttribute("onclick","finish()")
            finish.id = "finishButton"
            document.getElementById("counterLabel").appendChild(finish)
        }
        else{

        }
    }else if(command == "INITIALISE"){
        initialise()
    }
}

/*
Early access alpha testing:

Fix button innit
Also multiple flags huh??????????
*/