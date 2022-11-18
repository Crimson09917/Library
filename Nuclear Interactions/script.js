function makeDropdown(){
    let dropdown = document.createElement("select")

    for(var key in optionList){
        if (optionList.hasOwnProperty(key)){
            let option = document.createElement("option")
            option.innerHTML = optionList[key].name
            option.value = key
            dropdown.appendChild(option)
        }
    }
    
    return dropdown
}
var leftBoxes = -1
function addLeftSide(){
    leftBoxes++
    let container = document.getElementById("leftSide")
    
    let dropdown = makeDropdown()
    dropdown.id = "left"+String(leftBoxes)

    container.appendChild(dropdown)
}
function removeLeftSide(){
    if(leftBoxes != -1){
        let dropdown = document.getElementById("left"+String(leftBoxes))
        dropdown.remove()
        leftBoxes--
    }
}

var rightBoxes = -1
function addRightSide(){
    rightBoxes++
    let container = document.getElementById("rightSide")

    let dropdown = makeDropdown()
    dropdown.id = "right"+String(rightBoxes)
    
    container.appendChild(dropdown)
}
function removeRightSide(){
    if(rightBoxes != -1){
        let dropdown = document.getElementById("left"+String(rightBoxes))
        console.log("Removing box", rightBoxes)
        dropdown.remove()
        rightBoxes--
    }
}

function calculate(){
    
    let leftTotals = {
        "charge":0,
        "leptonNumber":0,
        "baryonNumber":0,
        "strangeness":0
    }
    let rightTotals = {
        "charge":0,
        "leptonNumber":0,
        "baryonNumber":0,
        "strangeness":0
    }

    for(let i=0;i<leftBoxes;i++){
        let key = document.getElementById("left"+String(i)).value
        let particle = optionList[key]
        // calculations["charge"] += particle["charge"]
        // calculations["leptonNumber"] += particle["lepton"]
        // calculations["baryonNumber"] += particle["baryon"]
        // calculations["strangeness"] += particle["strangeness"]
        leftTotals["charge"] += particle["charge"]
        leftTotals["leptonNumber"] += particle["lepton"]
        leftTotals["baryonNumber"] += particle["baryon"]
        leftTotals["strangeness"] += particle["strangeness"]
    }
    
    for(let i=0;i<rightBoxes;i++){
        let key = document.getElementById("right" + String(i)).value
        let particle = optionList[key]
        // calculations["charge"] += particle["charge"]
        // calculations["leptonNumber"] += particle["lepton"]
        // calculations["baryonNumber"] += particle["baryon"]
        // calculations["strangeness"] += particle["strangeness"]
        rightTotals["charge"] += particle["charge"]
        rightTotals["leptonNumber"] += particle["lepton"]
        rightTotals["baryonNumber"] += particle["baryon"]
        rightTotals["strangeness"] += particle["strangeness"]
    }
    
    let chargeFeedback = document.createElement("div")
    let leptonFeedback = document.createElement("div")
    let baryonFeedback = document.createElement("div")
    let strangenessFeedback = document.createElement("div")

    if(leftTotals.charge - rightTotals.charge != 0){
        chargeFeedback.innerHTML = `
            <span>Charge is not conserved:</span>
            <br>
            <ul><li>On the left side the charge is ${leftTotals.charge}</li><li>On the right side the charge is ${rightTotals.charge}</li></ul>
        `
    }else{
        chargeFeedback.innerHTML = `
            <span>Charge is conserved:</span>
            <br>
            <ul><li>On the left side the charge is ${leftTotals.charge}</li><li>On the right side the charge is ${rightTotals.charge}</li></ul>
        `
    }

    if (leftTotals.leptonNumber - rightTotals.leptonNumber != 0){
        leptonFeedback.innerHTML = `
            <span>Leptons are not conserved:</span>
            <br>
            <ul><li>On the left side the lepton number is ${leftTotals.leptonNumber}</li><li>On the right side the lepton number is ${rightTotals.leptonNumber}</li></ul>
        `
    }else{
        leptonFeedback.innerHTML = `
            <span>Leptons are conserved:</span>
            <br>
            <ul><li>On the left side the lepton number is ${leftTotals.leptonNumber}</li><li>On the right side the lepton number is ${rightTotals.leptonNumber}</li></ul>
        `
    }
        
        
    if(leftTotals.baryonNumber - rightTotals.baryonNumber !=0){
        baryonFeedback.innerHTML = `
            <span>Baryons are not conserved:</span>
            <br>
            <ul><li>On the left side the baryon number is ${leftTotals.baryonNumber}</li><li>On the right side the baryon number is ${rightTotals.baryonNumber}</li></ul>
        `
    }else{
        baryonFeedback.innerHTML = `
            <span>Baryons are conserved:</span>
            <br>
            <ul><li>On the left side the baryon number is ${leftTotals.baryonNumber}</li><li>On the right side the baryon number is ${rightTotals.baryonNumber}</li></ul>
        `
    }

    if(leftTotals.strangeness - rightTotals.strangeness !=0){
        strangenessFeedback.innerHTML = `
            <span>Strangeness is not conserved:</span>
            <br>
            <ul><li>On the left side the strangeness is ${leftTotals.strangeness}</li><li>On the right side the strangeness is ${rightTotals.strangeness}</li></ul>
        `
    }else{
        strangenessFeedback.innerHTML = `
            <span>Strangeness is conserved:</span>
            <br>
            <ul><li>On the left side the strangeness is ${leftTotals.strangeness}</li><li>On the right side the strangeness is ${rightTotals.strangeness}</li></ul>
        `
    }
    document.getElementById("feedback").innerHTML = ""
    document.getElementById("feedback").appendChild(chargeFeedback)
    document.innerHTML += "<br>"
    document.getElementById("feedback").appendChild(leptonFeedback)
    document.innerHTML += "<br>"
    document.getElementById("feedback").appendChild(baryonFeedback)
    document.innerHTML += "<br>"
    document.getElementById("feedback").appendChild(strangenessFeedback)
}