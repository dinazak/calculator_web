

function display(ind)
{
document.getElementById("d").value+= ind
 }


function result()
{
let x = document.getElementById("d").value
let y = eval(x)
document.getElementById("d").value = y
}

function empty()
{
document.getElementById("d").value = ""
}
