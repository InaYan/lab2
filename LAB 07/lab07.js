var firstSelect;
var firstDiv;
var firstButton;
var secondSelect;
var secondDiv;
var tableNameInput;
var columnsNumberInput;
var attrInput = new Array();
var table = new Array();


window.onload = function() {
    firstSelect = document.getElementById("select1");
    firstDiv = document.getElementById("div1");
    firstButton = document.getElementById("button1");
    secondSelect = document.getElementById("select2");
    secondDiv = document.getElementById("div2");
    firstButton.style.display = "none";
};

function chooseS1() {
    firstButton.style.display = "block";
    firstDiv.innerHTML = "";
    if(firstSelect.value=="SELECT ONE"){
        firstButton.style.display = "none";
        firstDiv.innerHTML = "";
    }
    if(firstSelect.value=="CREATE TABLE"){
        secondDiv.innerHTML = "";
        firstButton.style.display = "none";
        tableNameInput = document.createElement("input");
        tableNameInput.placeholder = "Table Name";
        tableNameInput.type = "text";
        columnsNumberInput = document.createElement("input");
        columnsNumberInput.placeholder = "Columns Number";
        columnsNumberInput.type = "number";
        firstDiv.appendChild(tableNameInput);
        firstDiv.appendChild(columnsNumberInput);
        let br = document.createElement("br");
        firstDiv.appendChild(br);
        tableNameInput.onchange = function () {
            Function1();
        }
        columnsNumberInput.onchange =function () {
            Function1();
        }




    }
    if(firstSelect.value=="ADD ROW"){
        var index = secondSelect.selectedIndex-1;

        for (let i = 0; i<table[index].rows[0].cells.length; i++) {
            attrInput[i] = document.createElement("input");
            attrInput[i].placeholder = table[index].rows[0].cells[i].textContent;
            attrInput[i].type = "text";
            firstDiv.appendChild(attrInput[i]);
        }
    }
    if(firstSelect.value=="DELETE ROW"){
        var index = secondSelect.selectedIndex-1;

        for (let i = 0; i<table[index].rows[0].cells.length; i++) {
            attrInput[i] = document.createElement("input");
            attrInput[i].placeholder = table[index].rows[0].cells[i].textContent;
            attrInput[i].type = "text";
            firstDiv.appendChild(attrInput[i]);
        }
    }
    if(firstSelect.value=="DELETE TABLE"){
        if(secondSelect.selectedIndex == 0) return;
        firstDiv.innerHTML = "WARNING: You cannot undo this action!";
    }
}

function chooseS2() {
    secondDiv.innerHTML = "";
    firstSelect.onchange();
    if(secondSelect.value=="SELECT(default: last created)"){
        return;
    }
    let index = secondSelect.selectedIndex;

    secondDiv.appendChild(table[index-1]);

}

function clickB() {

    if(firstSelect.value=="CREATE TABLE"){
        for(let i=0; i < attrInput.length; i++){
           if (attrInput[i].value=="") return;
        }

        var l = table.length;
        table[l] = document.createElement("table");
        table[l].insertRow(0);
        for(let i=0; i < attrInput.length; i++){
            let th = document.createElement("th");
            th.textContent = attrInput[i].value;
            table[l].rows[0].appendChild(th);
        }
        secondDiv.innerHTML = "";
        secondDiv.appendChild(table[l]);
        let a = document.createElement("option");
        a.value = tableNameInput.value;
        a.textContent = tableNameInput.value;

        secondSelect.appendChild(a);
        a.selected = true;
    }

    if(firstSelect.value=="ADD ROW"){

        let index = secondSelect.selectedIndex - 1;
        let l = table[index].rows.length;
        table[index].insertRow(l);
        for (let i = 0; i < table[index].rows[0].cells.length; i++){
            let td = table[index].rows[l].insertCell(i);
            td.textContent = attrInput[i].value;

        }
    }
    if(firstSelect.value=="DELETE ROW"){
        let index = secondSelect.selectedIndex - 1;
        let l = table[index].rows.length;
        for (let i = l-1; i >= 1; i--){
            let flag = true;
            for (let j = 0; j < table[index].rows[0].cells.length; j++){
                if(attrInput[j].value === "") continue;
                 if (attrInput[j].value!=table[index].rows[i].cells[j].textContent) {flag= false;break;}
            }
            if( flag) table[index].deleteRow(i);
        }
    }
    if(firstSelect.value=="DELETE TABLE"){
        secondDiv.innerHTML ="";
        let index = secondSelect.selectedIndex - 1;

        let t = secondSelect.children[index+1];
        secondSelect.removeChild(t);

        table.splice(index,1);
        if (secondSelect.options.length>1){
            secondSelect.children[1].selected=true;
            secondDiv.appendChild(table[0]);

        }
        else {
            secondSelect.children[0].selected = true;
        }
    }

}



function Function1() {
    for(let i=0;i<attrInput.length;i++)
    {
        if(firstDiv == attrInput[i].parentNode){
            firstDiv.removeChild(attrInput[i]);
        }
    }
    if (tableNameInput.value==""||columnsNumberInput.value==""){
        if (firstButton.style.display == "block") firstButton.style.display = "none";
        return;
    }

    attrInput = new Array();
    firstButton.style.display = "block";
    let columnsNumber = parseInt(columnsNumberInput.value);
    for(let i = 0; i<columnsNumber; i++){
        attrInput[i] = document.createElement("input");
        attrInput[i].placeholder = "Attribute";
        attrInput[i].type = "text";
        firstDiv.appendChild(attrInput[i]);
    }
}
