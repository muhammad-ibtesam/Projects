




// OnClick Bulb On & Off:
// var activeBulb = "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png"

// function handlebulb(ibtesam){
//     if (ibtesam.src == activeBulb) {
//         ibtesam.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHDbwnDZtl_JRH9t9jGczWhcQHoeOq0VeFw&s'
//     }
//     else {ibtesam.src=activeBulb
//    }
// }


// Get Local Image Files:
// function handlebulb(ibty) {
//     var activeBulb = document.getElementById('bulb'); 
//     if (activeBulb.src.includes ("on_bulb")) {
//         activeBulb.src = "./off_bulb.png";
//     }
//     else { activeBulb.src = "./on_bulb.png" };
// }


// 
function handlebulb() {
    var activeBulb = document.getElementById('bulb')
    var bulbIsOn = activeBulb.src.includes ("on_bulb")
    // activeBulb.src = bulbIsOn? "./off_bulb.png" : "./on_bulb.png";
    if (bulbIsOn) {
        activeBulb.src = "./off_bulb.png";
    } else {
        activeBulb.src = "./on_bulb.png";
    }
}
