// SUVAT STUFF  

function jax(){
  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

function execute(){
  document.getElementById("substitution").innerHTML = ""
  document.getElementById("calculation").innerHTML = ""
  let subject = document.getElementById("subject").value
  let missing = document.getElementById("missing").value
  let equation = document.getElementById("equation")
  if(subject==missing){
    console.log("Both values cannot be equal")
    equation.innerHTML = "The subject and missing value cannot be the same"
    return
  }
  if(subject == "s"){
    if(missing == "u"){
      equation.innerHTML = "$$s = vt - \\frac{1}{2} at^2$$";
    }else if(missing == "v"){
      equation.innerHTML = "$$s = ut + \\frac{1}{2} at^2$$";
    }else if(missing == "a"){
      equation.innerHTML = "$$s= \\frac{t}{2}(u+v)$$";
    }else if(missing == "t"){
      equation.innerHTML = "$$s = \\frac{u^2 + v^2}{2a}$$";
    }
  }else if(subject == "u"){
    if(missing == "s"){
      equation.innerHTML = "$$u=v-at$$";
    }else if(missing == "v"){
      equation.innerHTML = "$$u=\\frac{s-at^2}{2t}$$";
    }else if(missing == "a"){
      equation.innerHTML = "$$u=\\frac{2s}{t}+v$$";
    }else if(missing == "t"){
      equation.innerHTML = "$$u=\\sqrt{2as-v^2}$$";
    }
  }else if(subject == "v"){
    if(missing == "s"){
      equation.innerHTML = "$$v=u+at$$"
    }else if(missing == "u"){
      equation.innerHTML = "$$v=\\frac{s+at^2}{2t}$$"
    }else if(missing == "a"){
      equation.innerHTML = "$$v=\\frac{2s}{t}-u$$"
    }else if(missing == "t"){
      equation.innerHTML = "$$v=\\sqrt{u^2+2as}$$"
    }
  }else if(subject == "a"){
    if(missing=="s"){
      equation.innerHTML = "$$a=\\frac{v-u}{t}$$"
    }else if(missing=="u"){
      equation.innerHTML = "$$a=\\frac{2(vt-s)}{t^2}$$"
    }else if(missing == "v"){
      equation.innerHTML = "$$a=\\frac{2(s-ut)}{t^2}$$"
    }else if(missing == "t"){
      equation.innerHTML = "$$a=\\frac{v^2-u^2}{2s}$$"
    }
  }else if(subject == "t"){
    if(missing == "s"){
      equation.innerHTML = "$$t=\\frac{v-u}{a}$$"
    }else if(missing == "u"){
      equation.innerHTML = "$$t = \\frac{v-\\sqrt{v^2-2as}}{a}$$"
    }else if(missing == "v"){
      equation.innerHTML = "$$t = \\frac{\\sqrt{2as+u^2}-u}{a}$$"
    }else if(missing == "a"){
      equation.innerHTML = "$$t=\\frac{2s}{u+v}$$"
    }
  }
  jax()
  values(subject,missing)
}

function values(subject, missing){
  function append(label, element){
    valueDiv.appendChild(label)
    valueDiv.appendChild(element)
    valueDiv.appendChild(document.createElement("div"))
  }
  var valueDiv = document.getElementById("values")
  valueDiv.innerHTML = ""
  if(subject != "s" && missing != "s"){
    let label = document.createElement("label")
    label.innerHTML = "s = "
    let element = document.createElement("input")
    element.id = "sValue"
    append(label, element)
  }
  if(subject != "u" && missing != "u"){
    let label = document.createElement("label")
    label.innerHTML = "u = "
    let element = document.createElement("input")
    element.id = "uValue"
    append(label, element)
  }
  if(subject != "v" && missing != "v"){
    let label = document.createElement("label")
    label.innerHTML = "v = "
    let element = document.createElement("input")
    element.id = "vValue"
    append(label, element)
  }
  if(subject != "a" && missing != "a"){
    let label = document.createElement("label")
    label.innerHTML = "a = "
    let element = document.createElement("input")
    element.id = "aValue"
    append(label, element)
  }
  if(subject != "t" && missing != "t"){
    let label = document.createElement("label")
    label.innerHTML = "t = "
    let element = document.createElement("input")
    element.id = "tValue"
    append(label, element)
  }
  let button = document.createElement("button")
  button.innerHTML = "Solve equation"
  button.setAttribute("onclick","substitute()")
  valueDiv.appendChild(button)
}

function substitute(){
  let subject = document.getElementById("subject").value
  let equation = document.getElementById("substitution")
  let missing = document.getElementById("missing").value

  if(document.getElementById("sValue")){
    var s = document.getElementById("sValue").value
    if(s == ""){
      equation.innerHTML = "Ensure all boxes have values"
      return false
    }
  }
  if(document.getElementById("aValue")){
    var a = document.getElementById("aValue").value
    if(a == ""){
      equation.innerHTML = "Ensure all boxes have values"
      return false
    }
  }
  if(document.getElementById("vValue")){
    var v = document.getElementById("vValue").value
    if(v == ""){
      equation.innerHTML = "Ensure all boxes have values"
      return false
    }
  }
  if(document.getElementById("uValue")){
    var u = document.getElementById("uValue").value
    if(u == ""){
      equation.innerHTML = "Ensure all boxes have values"
      return false
    }
  }
  if(document.getElementById("tValue")){
    if(t == ""){
      equation.innerHTML = "Ensure all boxes have values"
      return false
    }
    var t = document.getElementById("tValue").value
  }

  if(subject == "s"){
    if(missing == "u"){
      equation.innerHTML = "$$s = "+v+"*"+t+" - \\frac{1}{2} *"+a+"*"+t+"^2$$";
    }else if(missing == "v"){
      equation.innerHTML = "$$s = "+u+"*"+t+" + \\frac{1}{2} *"+a+"*"+t+"^2$$";
    }else if(missing == "a"){
      equation.innerHTML = "$$s= \\frac{"+t+"}{"+2+"}("+u+"+"+v+")$$";
    }else if(missing == "t"){
      equation.innerHTML = "$$s = \\frac{"+u+"^2 + "+v+"^2}{2*"+a+"}$$";
    }
  }else if(subject == "u"){
    if(missing == "s"){
      equation.innerHTML = "$$u="+v+"-"+a+"*"+t+"$$";
    }else if(missing == "v"){
      equation.innerHTML = "$$u=\\frac{"+s+"-"+a+"*"+t+"^2}{2*"+t+"}$$";
    }else if(missing == "a"){
      equation.innerHTML = "$$u=\\frac{2*"+s+"}{"+t+"}+"+v+"$$";
    }else if(missing == "t"){
      equation.innerHTML = "$$u=\\sqrt{2*"+a+"*"+s+"-"+v+"^2}$$";
    }
  }else if(subject == "v"){
    if(missing == "s"){
      equation.innerHTML = "$$v="+u+"+"+a+"*"+t+"$$"
    }else if(missing == "u"){
      equation.innerHTML = "$$v=\\frac{"+s+"+"+a+"*"+t+"^2}{2*"+t+"}$$"
    }else if(missing == "a"){
      equation.innerHTML = "$$v=\\frac{2*"+s+"}{"+t+"}-"+u+"$$"
    }else if(missing == "t"){
      equation.innerHTML = "$$v=\\sqrt{"+u+"^2+2*"+a+"*"+s+"}$$"
    }
  }else if(subject == "a"){
    if(missing=="s"){
      equation.innerHTML = "$$a=\\frac{"+v+"-"+u+"}{"+t+"}$$"
    }else if(missing=="u"){
      equation.innerHTML = "$$a=\\frac{2("+v+"*"+t+"-"+s+")}{"+t+"^2}$$"
    }else if(missing == "v"){
      equation.innerHTML = "$$a=\\frac{2("+s+"-"+u+"*"+t+")}{"+t+"^2}$$"
    }else if(missing == "t"){
      equation.innerHTML = "$$a=\\frac{"+v+"^2-"+u+"^2}{2*"+s+"}$$"
    }
  }else if(subject == "t"){
    if(missing == "s"){
      equation.innerHTML = "$$t=\\frac{"+v+"-"+u+"}{"+a+"}$$"
    }else if(missing == "u"){
      equation.innerHTML = "$$t = \\frac{"+v+"-\\sqrt{"+v+"^2-2*"+a+"*"+s+"}}{"+a+"}$$"
    }else if(missing == "v"){
      equation.innerHTML = "$$t = \\frac{\\sqrt{2*"+a+"*"+s+"+"+u+"^2}-"+u+"}{"+a+"}$$"
    }else if(missing == "a"){
      equation.innerHTML = "$$t=\\frac{2*"+s+"}{"+u+"+"+v+"}$$"
    }
  }
  jax()
  calculate()
}
function calculate(){
  let subject = document.getElementById("subject").value
  let equation = document.getElementById("calculation")
  let missing = document.getElementById("missing").value

  if(document.getElementById("sValue")){
    var s = Number(document.getElementById("sValue").value)
  }
  if(document.getElementById("aValue")){
    var a = Number(document.getElementById("aValue").value)
  }
  if(document.getElementById("vValue")){
    var v = Number(document.getElementById("vValue").value)
  }
  if(document.getElementById("uValue")){
    var u = Number(document.getElementById("uValue").value)
  }
  if(document.getElementById("tValue")){
    var t = Number(document.getElementById("tValue").value)
  }

  if(subject == "s"){
    if(missing == "u"){
      equation.innerHTML = "$$s= "+((v*t)-0.5*a*(t**2))+"$$"
    }else if(missing == "v"){
      equation.innerHTML = "$$s= "+((u*t)+0.5*a*(t**2))+"$$"
    }else if(missing == "a"){
      equation.innerHTML = "$$s= "+(t/2)*(u+v)+"$$"
    }else if(missing == "t"){
      equation.innerHTML = "$$s = "+(((u**2)+(v**2))/(2*a))+"$$"
    }
  }else if(subject == "u"){
    if(missing == "s"){
      equation.innerHTML = "$$u="+(v-(a*t))+"$$";
    }else if(missing == "v"){
      equation.innerHTML = "$$u="+((s-(a*(t**2)))/(2*t))+"$$";
    }else if(missing == "a"){
      equation.innerHTML = "$$u="+(((2*s)/t)+v)+"$$";
    }else if(missing == "t"){
      equation.innerHTML = "$$u="+Math.sqrt((2*a*s)-(v**2))+"$$";
    }
  }else if(subject == "v"){
    if(missing == "s"){
      equation.innerHTML = "$$v="+(u+(a*t))+"$$"
    }else if(missing == "u"){
      equation.innerHTML = "$$v="+(s+(a*(t**2)))/(2*t)+"$$"
    }else if(missing == "a"){
      equation.innerHTML = "$$v="+((2*s)/(t)-u)+"$$"
    }else if(missing == "t"){
      equation.innerHTML = "$$v="+Math.sqrt((u**2)+(2*a*s))+"$$"
    }
  }else if(subject == "a"){
    if(missing=="s"){
      equation.innerHTML = "$$a="+((v-u)/t)+"$$"
    }else if(missing=="u"){
      equation.innerHTML = "$$a="+(2*((v*t)-s))/(t**2)+"$$"
    }else if(missing == "v"){
      equation.innerHTML = "$$a="+(2*(s-(u*t)))/(t**2)+"$$"
    }else if(missing == "t"){
      equation.innerHTML = "$$a="+((v**2)-(u**2))/(2*s)+"$$"
    }
  }else if(subject == "t"){
    if(missing == "s"){
      equation.innerHTML = "$$t="+((v-u)/a)+"$$"
    }else if(missing == "u"){
      equation.innerHTML = "$$t="+((v-Math.sqrt(v**2-(2*a*s)))/a)+"$$"
    }else if(missing == "v"){
      equation.innerHTML = "$$t="+((Math.sqrt((2*a*s)+(u**2))-u)/a)+"$$"
    }else if(missing == "a"){
      equation.innerHTML = "$$t="+((2*s)/(u+v))+"$$"
    }
  }
  jax()
}