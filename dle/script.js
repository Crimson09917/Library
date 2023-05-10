var targetColour = [0, 0, 0]
var currentColour = [0, 0, 0]

var TButton = [0, 0, 0]
var CButton = [0, 0, 0]

var Ttext = [0, 0, 0]
var Ctext = [0, 0, 0]

var timeoutTime = 1

var sites = [
    "https://www.nytimes.com/games/wordle/index.html",
    "https://wrodeo.com",
    "https://qntm.org/files/absurdle/absurdle.html",
    "https://referdle.com",
    "https://www.idelan.com/lingpal/",
    "https://globle-game.com",
    "https://daydle.com",
    "https://nerdlegame.com",
    "https://segmentle.com",
    "https://wordawazzle.com.au",
    "https://mlbpickle.com",
    "https://semantle.pimanrul.es",
    "https://semantle.com",
    "https://gordle.com",
    "https://reversle.net",
    "https://crosswordle.vercel.app/",
    "https://pictle.web.app",
    "https://dawdl.in",
    "https://sweardle.com",
    "https://www.spotify.com/heardle/",
    "https://musicle.app",
    "https://www.beatle.pro",
    "https://factle.app",
    "https://brdl.alex.gd",
    "https://pacdudegames.com/pundle/",
    "https://unlockle.app",
    "https://www.flagdle.org",
    "https://squirdle.fireblend.com",
    "https://www.dungleon.com",
    "https://murdle.vercel.app",
    "https://quizl.io",
    "https://wordle.starwars.guide",
    "https://www.chigozie.co.uk/invisidle/",
    "https://jackli.gg/chessle/",
    "https://wheredle.xyz",
    "https://marvelguessr.igorjung.com/en"
]

var siteDictionary = [
    "www.worlde"
]

function compareColours(colour1, colour2){
    if(colour1 > colour2){
        return 1
    }else if(colour1 < colour2){
        return -1
    }else{
        return 0
    }
}

function generateRandomColour() {
    // generate random R, G, and B values between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // return a string in the format "rgb(r, g, b)"
    return [r, g, b]
}

 
function transitionColour(){

    if(targetColour[0] == currentColour[0] && targetColour[1] == currentColour[1] && targetColour[2] == currentColour[2]){
        targetColour = generateRandomColour()
        
    }else{
        
        currentColour[0] += compareColours(targetColour[0], currentColour[0])
        currentColour[1] += compareColours(targetColour[1], currentColour[1])
        currentColour[2] += compareColours(targetColour[2], currentColour[2])

        
        document.body.style.backgroundColor = `rgb(${currentColour[0]}, ${currentColour[1]}, ${currentColour[2]})`;

    }
    if(TButton[0] == CButton[0] && TButton[1] == CButton[1] && TButton[2] == CButton[2]){
        TButton = generateRandomColour()
        
    }else{
        
        CButton[0] += compareColours(TButton[0], CButton[0])
        CButton[1] += compareColours(TButton[1], CButton[1])
        CButton[2] += compareColours(TButton[2], CButton[2])

        let button = document.getElementById("button")
        button.style.backgroundColor = `rgb(${CButton[0]}, ${CButton[1]}, ${CButton[2]})`;

    }

    if(Ttext[0] == Ctext[0] && Ttext[1] == Ctext[1] && Ttext[2] == Ctext[2]){
        Ttext = generateRandomColour()
        
    }else{
        Ctext[0] += compareColours(Ttext[0], Ctext[0])
        Ctext[1] += compareColours(Ttext[1], Ctext[1])
        Ctext[2] += compareColours(Ttext[2], Ctext[2])


        document.getElementById("heading").style.color = `rgb(${Ctext[0]}, ${Ctext[1]}, ${Ctext[2]})`;
        document.getElementById("button").style.color = `rgb(${Ctext[0]}, ${Ctext[1]}, ${Ctext[2]})`;

    }



    setTimeout(transitionColour, timeoutTime)
}

function goToWebsite(){
    let link = sites[Math.floor(Math.random()*sites.length)]
    window.open(link, "_blank");
}

transitionColour();