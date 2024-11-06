var officeChair = "https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-black-office-chair-png-image_11537176.png"
var dineChair = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYQdvex_8kxemE_L7SkV3ATMKSR97yaTPPg&s"

var orderChair = prompt("Which chair do you want?")

if (orderChair.toLowerCase().trim() == "office chair") {
    document.getElementById('chairImg').src = officeChair
} else {
    document.getElementById('chairImg').src = dineChair
}

