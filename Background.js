//generate a random color

const rColor = function (){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let interval //global scope
const startchanging = function (){
        //avoids corner cases
    if(!interval){
        interval = setInterval(bgColor,50)
    }
    
    function bgColor(){
        document.body.style.backgroundColor = rColor()

    }
}

const stopchanging = function (){
    clearInterval(interval)
    interval = null //to de-reference the value aka flush value
}
document.querySelector("#start").addEventListener('click',startchanging)

document.querySelector("#stop").addEventListener('click',stopchanging)