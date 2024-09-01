// CALCULATOR

var num1 = +prompt('Enter Value 1')
var num2 = +prompt('Enter Value 2')
var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2
var mod = num1 % num2

document.write(
    "<table border='2px groove white'>"+
        "<tr>"+
            "<th>"+
                "Addition"+
            "</th>"+
            "<th>"+
                "Subtraction"+
            "</th>"+
            "<th>"+
                "Multiplication"+
            "</th>"+
            "<th>"+
                "Division"+
            "</th>"+
            "<th>"+
                "Modules"+
            "</th>"+
        "</tr>"+
        "<tr>"+
            "<td>" +add+ "</td>"+
            "<td>" +sub+ "</td>"+
            "<td>" +mul+ "</td>"+
            "<td>" +div+ "</td>"+
            "<td>" +mod+ "</td>"+
        "</tr>"+
    
    "</table>"
)