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
    let target = event.target; 
    if (target.tagName != 'TD') return;
    target.style.backgroundColor = getColor();
  };

  //continuous painting with pressing ctrl key
  // table.onmouseover = function(event) {
  //   let target = event.target;
  //   if (target.tagName != 'TD') return;
  //   //if(event.ctrlKey)
  //   target.style.background = getColor();
  // };

  //continuous painting with pressing mouse
  document.onmousedown=(event)=>{fire('first', event);};
  document.onmouseover=(event)=>{fire('second', event);};
  let got = { first : 0, second : 0 };
  table.onmouseup=()=>{got = { first : 0, second : 0 }};
  
  function fire(event_type, event) {
    got[ event_type ] = 1;
    if( got.first && got.second )
    {
        let target = event.target;
        if (target.tagName != 'TD') return;
        target.style.background = getColor();
    }
  }