async function initialiseSite(skip){
    let textArray = ['COMPBIO (C) 1973 Motherboard, Inc.',
        'BIOS Date 08/29/73 02:43:29 Ver: 08.00.15',
        'CPU: NEC µCOM-4 @ 2 MHz',
        'Speed: 2 MHz',
        '',
        'Memory Clock: 16 MHz',
        'Memory Test: 128420K OK',
        '',
        'PMU ROM Version: 9303',
        'NVMM ROM Version: 4.092.88',
        'Initalizing LAN Connection DONE',
        'Connection OK',
        '',
        'Auto-Detecting Input Devices DONE',
        'Input Device(s): 1 Keyboard, 1 Mouse, 1 Hub, 2 Storage Device(s)',
        'Auto-Detecting Storage Devices DONE',
        'Device #01: CDC 9762 80 MB',
        'Device #02: CDC 9921 120 MB',
        '',
        '(C) Motherboard, Inc.',
        '64-0100-00001-001011111-092909-79297-1AE0V003-Y2UC',
        'Booting from Hard Disk DONE',
        '',
        '',
    ]

    if(skip == false){
        for(let i=0;i<textArray.length;i++){
            await enterFirst(textArray[i], "enterHere", 600)
        }
    }

    let br = document.createElement("br")
    let container = document.getElementById("info")
    subcontainer = createSubContainer(container, 0)

    let span = createLine("span", "U", "usernamePrompt", "")
    subcontainer.appendChild(span)
    await enter(document.getElementById("usernamePrompt"), "sername:", 100)
    subcontainer.appendChild(br)
    span = createLine("span", ">>", "", "")
    subcontainer.appendChild(span)
    span = createLine("span", " ", "usernameInput", "userInput")
    subcontainer.appendChild(span)
    await enter(document.getElementById("usernameInput"), " ", 1000)
    await enter(document.getElementById("usernameInput"), "Pre", 100)
    await enter(document.getElementById("usernameInput"), "sRN", 300)
    await enter(document.getElementById("usernameInput"), "ixon", 100)
    await enter(document.getElementById("usernameInput"), " ", 500)



    br = document.createElement("br")
    subcontainer = createSubContainer(container, 1)

    span = createLine("span", "P", "passwordPrompt", "")
    subcontainer.appendChild(span)
    await enter(document.getElementById("passwordPrompt"), "assword:", 100)
    subcontainer.appendChild(br)
    span = createLine("span", ">>", "", "")
    subcontainer.appendChild(span)
    span = createLine("span", " ", "passwordInput", "userInput")
    subcontainer.appendChild(span)
    await enter(document.getElementById("passwordInput"), "******", 300)
    await enter(document.getElementById("passwordInput"), "***", 200)
    await enter(document.getElementById("passwordInput"), "***", 100)
    await enter(document.getElementById("usernameInput"), " ", 500)

    container.appendChild(document.createElement("br"))
    container.appendChild(document.createElement("br"))
    await enter(container, "Verifying", 100)
    container.appendChild(document.createElement("br"))
    container.appendChild(document.createElement("br"))
    await enter(container, ".....", 500)
    await enter(container, "VERIFIED", 200)
    await enter(container, " ", 1000)

    window.location.replace("game.html");
    

}

function createSubContainer(container, index){
    let subcontainer = document.createElement("div")
    subcontainer.id = "subcontainer"+String(index)
    container.appendChild(subcontainer)
    return subcontainer
}

async function enter(container, text, speed){
    let array = text.split("")
    for(let i=0;i<array.length;i++){
        await new Promise(r => setTimeout(r, speed))
        container.innerHTML += array[i]
    }
}

async function enterFirst(string, id, delay){
    let array = string.split("")
    console.log(array)
    let doDone = false
    if(array.slice(-4).join("") == "DONE"){
        console.log("DONE detected")
        doDone = true
        array = array.slice(0, -4)
    }

    let entry = document.getElementById(id)

    let paragraph = document.createElement("span")
    paragraph.id = "tempID"
    entry.appendChild(paragraph)
    entry.append(document.createElement("br"))

    paragraph = document.getElementById("tempID")
    for(let i=0;i<array.length;i++){
        await new Promise(r => setTimeout(r, 50));
        paragraph.innerHTML += array[i]
    }
    if(doDone == true){
        await done(paragraph)
    }
    await new Promise(r => setTimeout(r, delay));
    document.getElementById("tempID").id = ""
}

async function done(element){
    for(let i=0;i<3;i++){
        await new Promise(r => setTimeout(r, 300));
        element.innerHTML += ". "
    }
    await new Promise(r => setTimeout(r, 500));
    element.innerHTML += "Done"
}

function createLine(tag, inner, id, className){
    let element = document.createElement(tag)
    if(inner.length != 0){
        element.innerHTML = inner
    }
    if(id.length != 0){
        element.id = id
    }
    if(className.length != 0){
        element.className = className
    }
    return element
}

initialiseSite(false)