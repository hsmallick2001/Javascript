let onoff = document.getElementById("OnOff")
onoff.style.backgroundColor = "red"
onoff.innerHTML = "OFF"
onoff.style.transform = "rotate(-90deg)"
let light = document.querySelectorAll(".light")
let bright = document.getElementById("bright")
let a = 0
function LightONOFF() {
    if (a == 0) {
        onoff.innerHTML = "ON"
        for (let lightdiv of light) {
            lightdiv.style.filter = "drop-shadow(0px 0px 10px yellow)"
        }
        onoff.style.backgroundColor = "green"
        onoff.style.transform = "translate(50px) rotate(-90deg)"
        a = 1
        bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"
        bright.style.backgroundColor = "rgba(255, 255, 0, 0.5)"
    }
    else if (a == 1) {
        onoff.innerHTML = "OFF"
        let light = document.querySelectorAll(".light")
        for (let lightdiv of light) {
            lightdiv.style.filter = "drop-shadow(0px 0px 0px white)"
            lightdiv.style.backgroundColor = "white"
        }
        onoff.style.transform = "translate(0px) rotate(-90deg)"
        onoff.style.backgroundColor = "red"
        bright.style.filter = ""
        bright.style.backgroundColor = ""

        a = 0
    }

}


function ColorRed() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "red"
            bright.style.backgroundColor = "red"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"


        }
    }
}
function ColorBlue() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "blue"
            bright.style.backgroundColor = "blue"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"


        }
    }
}
function ColorGreen() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "green"
            bright.style.backgroundColor = "green"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"


        }
    }
}
function ColorYellow() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "yellow"
            bright.style.backgroundColor = "yellow"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"


        }
    }
}
function ColorOrange() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "orange"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"

            bright.style.backgroundColor = "orange"

        }
    }
}
function ColorOrangered() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "orangered"
            bright.style.backgroundColor = "orangered"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"


        }
    }
}
function ColorViolet() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "violet"
            bright.style.backgroundColor = "violet"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"


        }
    }
}
function ColorGrey() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "grey"
            bright.style.backgroundColor = "grey"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"


        }
    }
}
function ColorBlack() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "black"
            document.getElementById("bright").style.filter = ""
            document.getElementById("bright").style.backgroundColor = "black"

        }
    }
}
function ColorWhite() {
    if (onoff.innerHTML == "ON") {
        for (let lightdiv of light) {
            lightdiv.style.backgroundColor = "white"
            bright.style.filter = "blur(200px) drop-shadow(0px 0px 50px yellow)"
            bright.style.backgroundColor = "white"

        }
    }
}
