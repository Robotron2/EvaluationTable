let tableRow = rowNumber.value;
let tableColumn = colNumber.value;
const makeTableBtn = document.getElementById("makeTable")


function displayAll() {
    var operator = selectOperator.value
    var table = "<table>"
    table += "<tr>"
    for (var i = 1; i <= parseInt(colNumber.value); i++) {
        table += "<td>"
        for (var j = 1; j <= parseInt(rowNumber.value); j++) {
            var evaluation = (eval(i + operator + j))

            if (evaluation % 1 !== 0) {
                var evaluation = parseFloat(eval(i + operator + j)).toFixed(2)
            }
            table += i + operator + j + "=" + evaluation + "<br>" + "<br>";
        }

    }
    table += "</table>"
    dispTable.innerHTML = table
}
makeTableBtn.addEventListener("click", displayAll)