var fan = document.getElementById('tag')

function on() {
    fan.style.animation = "spinFan 1s linear infinite";  
}
function off() {
    fan.style.animation = "none";  
}
function high() {
    fan.style.animation = "spinFan 0.4s linear infinite";  
}
function medium() {
    fan.style.animation = "spinFan 1s linear infinite";  
}
function low() {
    fan.style.animation = "spinFan 2s linear infinite";  
}


        // Buttons - THIS CODE IS NOT WORKING PROPERLY

// var fan = document.getElementById('tag')

// function high() {
//     fan.style.transform = 'rotate(10000deg)';
//     fan.style.transitionDuration = '15s';
// }
// function medium() {
//     fan.style.transform = 'rotate(5000deg)';
//     fan.style.transitionDuration = '15s';
// }
// function low() {
//     fan.style.transform = 'rotate(1000deg)';
//     fan.style.transitionDuration = '10s';
// }
// function off() {
//     console.log(fan.style.transform);
//     fan.style.transform = 'rotate(0deg)';
//     fan.style.transitionDuration = '15s';
// }






