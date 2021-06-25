function tableCreate() {
    let body = document.body,
        tbl = document.createElement('table');
        tbl.style.border = '2px solid black';

    for (let i = 0; i < 40; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < 60; j++) {
            let td = tr.insertCell();
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}
tableCreate();

function getColor(){
    let color = document.getElementById("favcolor");
    return color.value;
}

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