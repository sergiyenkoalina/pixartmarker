function tableCreate() {
    var body = document.body,
        tbl = document.createElement('table');
        tbl.style.border = '2px solid black';

    for (var i = 0; i < 40; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 60; j++) {
            var td = tr.insertCell();
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}
tableCreate();

function changeColor(){
    let table = document.body.table;
    table.children.forEach(e => e.style.setProperty("background-color", getColor()));
}

function getColor(){
    let color = document.getElementById("favcolor");
    return color.value;
}
document.getElementById("favcolor").addEventListener('input', changeColor);

const table = document.querySelector("table");
  table.onclick = function(event) {
    let target = event.target; // где был клик?
    if (target.tagName != 'TD') return; // не на TD? тогда не интересует
    target.style.backgroundColor = getColor();
  };

  table.onmouseover = function(event) {
    let target = event.target;
    if (target.tagName != 'TD') return;
    if(event.ctrlKey)
    target.style.background = getColor(); //беспрерывно рисовать выбранным цветом
  };