
class oneVariableCalc{
    constructor(array){
        console.log(array)
        array.sort()
        console.log(array)
        this.minX = array[0]
        this.maxX = array[-1]

        this.n = array.length

        let total = 0
        let sqtotal = 0
        array.forEach(i => {
            total += i
            sqtotal += i**2
        })
        
        this.sumX = total
        this.mean = total/this.n
        this.sumXSq = sqtotal

        let Sxx = this.sumXSq - (this.sumX**2)/(this.n)
        this.variance = Sxx/this.n
        this.standardDeviation = Math.sqrt(this.variance)

        function quartiles(coefficient, n){
            if(n%coefficient == 0){
                let index = parseInt(n/coefficient)-1
                let value = (array[index]+array[index+1])/2
                return value
            }else{
                let index = Math.ceil(n/coefficient)-1
                return array[index]
            }
        }

        this.Q1 = quartiles(4, this.n)
        this.Q2 = quartiles(2, this.n)
        this.Q3 = quartiles(4/3, this.n)
    }
}

var tableActive = false
var probabilityActive = false



function execute(calculation){
    function appendElement(text){
        let output = document.getElementById("output1")
        let element = document.createElement("li")
        element.innerHTML = text
        output.appendChild(element)

        let yourMother = document.createElement("br")
        // Yr'oue*
        output.appendChild(yourMother)

    }

    appendElement(`Mean = ${calculation.mean}`)
    appendElement(`Sum of values = ${calculation.sumX}`)
    appendElement(`Sum of squares = ${calculation.sumXSq}`)
    appendElement(`Variance = ${calculation.variance}`)
    appendElement(`Standard Deviation = ${calculation.standardDeviation}`)
    appendElement(`Lower Quartile = ${calculation.Q1}`)
    appendElement(`Median = ${calculation.Q2}`)
    appendElement(`Upper Quartile = ${calculation.Q3}`)


}

// No longer works because of how <tbody> is a thing redo this aaron you schmuck
// Don't worry I fixed it aaron love you 
function removeRow(id){
    let tbody = document.getElementById(id).children[0]
    tbody.removeChild(tbody.lastChild)
}

function addRow(id){
    let table = document.getElementById(id)
    let tbody = table.children[0]
    let newRowIndex = tbody.rows.length - 1
    
    let valueTextArea = document.createElement('textarea')
    valueTextArea.id = id+`X_${newRowIndex}`
    
    let frequencyTextArea = document.createElement('textarea')
    frequencyTextArea.id = id+`Y_${newRowIndex}`

    valueTextArea.className = frequencyTextArea.className = 'tableArea'

    let row = table.insertRow()
    let valueCell = row.insertCell(0)
    let frequencyCell = row.insertCell(1)

    valueCell.appendChild(valueTextArea)
    frequencyCell.appendChild(frequencyTextArea)

}

function execute1(){
    document.getElementById("output1").innerHTML = ""
    let text = document.getElementById("oneVariableInput").value
    if(text == ""){
        return
    }
    let array = text.split(" ")
    for(let i=0;i<array.length;i++){
        array[i] = Number(array[i])
    }
    let calculation = new oneVariableCalc(array)
    execute(calculation)
}


function execute2(){
    // This is the function that is executed to take the data out of the table
    // And put it in the formula
    let array = []
    let table = document.getElementById("freqTable")
    let output = document.getElementById("output2")
    output.innerHTML = ""
    
    for(let i=0;i<table.rows.length-1;i++){
        subArray = []
        subArray.push(Number(document.getElementById("freqTableX_"+String(i)).value))
        subArray.push(Number(document.getElementById("freqTableY_"+String(i)).value))
        array.push(subArray)
    }
    
    let newArray = []
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i][1];j++){
            newArray.push(Number(array[i][0]))
        }
    }
    let calculationF = new oneVariableCalc(newArray)
    execute(calculationF)
}

function factorialise(x){
    let result = x
    if(x == 0 || x == 1){
        return 1
    }else{
        while(x > 2){
            x--
            result = result*x
        }
        return result
    }
}

function binomialPD(n, r, p){
    // P(X == r) = (nCr)(p)^r(1-p)^(n-r)
    let bCoefficient = factorialise(n)/(factorialise(r)*factorialise(n-r))
    let probability = bCoefficient*(p**r)*((1-p)**(n-r))
    return probability
}

function binomialCD(n, r, p){
    let probability = 0
    for(let i=r; i>-1; i--){
        probability += binomialPD(n, i, p)
    }
    return probability
}

function execute3(){
    probabilityActive = true
    tableActive = false
    let output = document.getElementById("output2")
    let x = document.getElementById("binomialX").value
    let n = document.getElementById("binomialN").value
    let p = document.getElementById("binomialP").value
    let label = document.createElement("label")
    let operator = document.getElementById("operator").value
    output.innerHTML = ""
    if(operator == "="){
        label.innerHTML = "P(X = "+String(x)+") = "+String(binomialPD(n, x, p))
    }else{
        if(operator == "<="){
            label.innerHTML = "P(X <= "+String(x)+") = "+String(binomialCD(n, x, p))
        }else if(operator == "<"){
            label.innerHTML = "P(X < "+String(x)+") = "+String(binomialCD(n, x-1, p))
        }else if(operator == ">"){
            label.innerHTML = "P(X > "+String(x)+") = "+String(1-binomialCD(n, x, p))
        }
        else if(operator == ">="){
            label.innerHTML = "P(X >= "+String(x)+") = "+String(1-binomialCD(n, x-1, p))
        }
    }
    output.appendChild(label)
}

function execute4(){
    tableActive = true
    probabilityActive = false
    let table = document.getElementById("output2")
    table.innerHTML = ""

    let n = document.getElementById("binomialN").value
    let operator = document.getElementById("operator").value
    if(operator == "="){
        table.innerHTML = "Set operator to not '='"
        return
    }
    if(n == 69){
        document.getElementById("output2").innerHTML = "Aaron you're a schmuck"
        return
    }
    
    let header = table.createTHead()
    var row  = header.insertRow()
    var cell = row.insertCell()

    cell.innerHTML = 'n = '+String(n)+', p = '
    cell.className = "leftSide"

    for(let p=0.05;p<0.50; p+=0.05){
        let cell = row.insertCell()
        let x = p.toFixed(2)
        cell.innerHTML = x
    }

    function addCells(n, operator){
        
        let end = false
        let x = 0

        while(end == false){
            var row = table.insertRow()
            var cell = row.insertCell()
            cell.className = "leftSide"
            cell.innerHTML = "x "+operator+" "+String(x)
            for(let P=0.05; P<0.50; P+=0.05){
                let p = P.toFixed(2)
                var cell = row.insertCell()
                if(operator == "<="){
                    cell.innerHTML = binomialCD(n, x, p).toFixed(4)
                }else if(operator == ">="){
                    cell.innerHTML = (1-binomialCD(n, x-1, p)).toFixed(4)
                }else if(operator == "<"){
                    cell.innerHTML = binomialCD(n, x-1, p).toFixed(4)
                }else if(operator == ">"){
                    cell.innerHTML = (1-binomialCD(n, x, p)).toFixed(4)
                }
            }
            if(binomialCD(n, x, 0.50).toFixed(4) == 1.0000){
                end = true
            }
            x++
        }
    }
    addCells(n, operator)
}

function changeOperator(){
    let label = document.getElementById("changing")
    let operator = document.getElementById("operator").value
    label.innerHTML = `P(X ${operator} `
    if(tableActive == true){
        execute4()
    }else if(probabilityActive == true){
        execute3()
    }
}

function execute5(){
    let array = []
    let tbody = document.getElementById("scatterTable").children[0]
    for(let i=0;i<tbody.rows.length-1;i++){
        let subArray = {}
        subArray.x = Number(document.getElementById("scatterTableX_"+String(i)).value)
        subArray.y = Number(document.getElementById("scatterTableY_"+String(i)).value)
        array.push(subArray)
    }
    console.log(array)

    new Chart("scatterGraph", {
        type: "scatter",
        data: {
          datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgba(0,0,255,1)",
            data: array,
            trendlineLinear: {
                style: "rgb(43 ,66 ,255, 0.3)",
                lineStyle: "dotted|solid",
                width: 2
            }
          }]
        }
      })
}

function execute6(){
    function testProbability(testType, probability){
        if(testType == ">"){
            if(probability>0.95){
                return false
            }
        }else if(testType == "<"){
            if(probability<0.05){
                return false
            }
        }else if(testType == "!="){
            if(probability>0.95 || probability<0.95){
                return false
            }
        }
        return true

    }
    let graph = document.getElementById("probabilityGraph")
    let n = document.getElementById("binomialN").value
    let p = document.getElementById("binomialP").value
    if(n == "" || p == ""){
        graph.innerHTML = "You must enter a value for N and p"
    }

    let xValues = []
    let yValues = []

    let critXValues = []
    let critYValues = []

    let testType = document.getElementById("testType").value
    for(let i=0;i<n;i++){
        let probability = binomialPD(n, i, p).toFixed(10)
        // if(testProbability(testType, probability) == false){
        //     critYValues.push(probability)
        // }
        xValues.push(i)
        yValues.push(probability*100)
    }
    console.log(xValues)
    console.log(yValues)

    new Chart("probabilityGraph", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{
            fill: false,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255)",
            data: yValues
          }, { 
            data: critYValues,
            borderColor: "green",
            fill: false
          }]
        },
        options: {
          legend: {display: false}
        }
      });
}