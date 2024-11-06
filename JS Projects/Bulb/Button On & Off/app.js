var activeBulb = document.getElementById('bulb')
var glow = "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png"
var medium = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjivg8N4lgsDOUgULcKjmPEsXh_zPScTsrew&s"
var off = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdehwzhgB2P6rDnVu9Ac8meCbhvOfcfI_bA&s"

var title = document.getElementById('title')
function turnOn() {
    activeBulb.src = glow;
    title.innerHTML="Bulb is On"
}
function mediumGlow() {
    activeBulb.src = medium;
    title.innerHTML="It's sleeping time"
}
function turnOff() {
    activeBulb.src = off;
    title.innerHTML="Good Night!"
}


