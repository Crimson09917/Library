/*
SVG templates
<rect x="0px" y="0px" width="10px" height="10px" fill="rgb(0,0,0)"></rect> -- This is a black
<rect x="0px" y="0px" width="10px" height="10px" fill="rgb(255,255,255)"></rect> -- This is a white
*/
/*
DIV templates
<div class="pixel" id="(x*10,y*10)"></div>
*/

/*
async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
function randomise(){
    let value = Math.floor(Math.random() * 1000)
    if(value == 0){
        return "white"
    }else{
        return "black"
    }
}

function generate(){
    document.getElementById("canvas").innerHTML = ""
    for(let j=0; j<100; j++){
        document.getElementById("canvas").innerHTML += '<div id="row'+j+'" class="row"></div>'
        for(let i=0; i<100; i++){
            let x=i*10
            let y=j*10
            document.getElementById("row"+j).innerHTML += '<div class="pixel" id="'+x+','+y+'" style="background-color: '+randomise()+';"></div>'
        }
    }
}
function count(x,y){
    function subCount(id){
        let idSplit = id.split(",")
        // console.log(idSplit)
        if (idSplit[0] < 0 || idSplit[1] < 0){
            return 0
        }
        if (idSplit[0] > 990 || idSplit[1] > 990){
            return 0
        }
        if(document.getElementById(id).style.backgroundColor == "white"){
            return 1
        } else {
            return 0
        }    
    }
    // When this function is called, provide the x and y value of the pixel being counted
    let neighboursAlive = 0

    neighboursAlive += subCount((x-10)+","+(y-10))
    neighboursAlive += subCount((x)+","+(y-10))
    neighboursAlive += subCount((x+10)+","+(y-10))
    neighboursAlive += subCount((x-10)+","+(y))
    neighboursAlive += subCount((x-10)+","+(y+10))
    neighboursAlive += subCount((x+10)+","+(y))
    neighboursAlive += subCount((x)+","+(y+10))
    neighboursAlive += subCount((x+10)+","+(y+10))
    return neighboursAlive
}

function checkRow(row){
    // When this function is called, provide the y value of every pixel in that row.
    for(let i=0; i<100; i++){
        state = document.getElementById(i*10+","+row).style.backgroundColor
        let neighbours = count(i*10,row)
        // console.log(neighbours)
        if(state == "black"){
            if(neighbours==3){
                document.getElementById(i*10+","+row).style.backgroundColor = "white"
            }
        }else{
            if(neighbours<2){
                document.getElementById(i*10+","+row).style.backgroundColor = "black"
            }
            if(neighbours>=4){
                document.getElementById(i*10+","+row).style.backgroundColor = "black"
            }
        }
    }
}
function iteration(){
    for(i=0;i<100;i++){
        checkRow(i*10)
    }
}
*/