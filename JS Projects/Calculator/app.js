var main = document.getElementById("heading")

function handleclick(value) {
    if (main.innerHTML == 0) main.innerHTML = value
    else main.innerHTML += value 
}
function sum () {
    main.innerHTML = eval(main.innerHTML)
}
function clearentry () {
    main.innerHTML = '0'
}

