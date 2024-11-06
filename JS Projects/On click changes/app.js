// var heading = document.getElementById("one")

// function convert() {
//      heading.innerHTML = `<h3 id="one" onclick="convert()"> Heading 2 </h3>`     
// }

// function convert() {
//     heading.outerHTML = `<h3 onclick="convert()"> Heading 2 </h3>`     
// }



// Heading 6 k bad heading 1 pe ajaega

// var count = 1;

// function convert() {
//     var tag = document.getElementById("one")
//     if (count == 6) count = 1
//     else count++
//     tag.outerHTML = `<h${count} id="one" onclick="convert()">Heading h${count}</h${count}>`
//     // count++
// }


// is me Even Num slide ho k aega or odd normal.. % Mode=0 mean k remainder 0 hai or ye jb hoga tb even num hoga

var count = 1;

function convert() {
    var tag = document.getElementById("one");
    count == 6 ? count=1 : count++
    if (count % 2 == 0) {
        tag.outerHTML = `<h${count} id="one" onclick="convert()"><marquee> Heading h${count}</marquee> </h${count}>`;
    } else {
        tag.outerHTML = `<h${count} id="one" onclick="convert()">Heading h${count}</h${count}>`;
    }
}

