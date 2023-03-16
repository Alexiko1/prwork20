		
const form1 = document.forms.Form1; 
const form2 = document.forms.Form2; 
let square = document.getElementById('square');  
let result = document.getElementById('result'); 
let allFlat = document.getElementById('allFlat');  
let bath = document.getElementById('bath');  

form1.onchange = form1.oninput = calcTotal1; 
function calcTotal1() {	
    let typeValue = Form1.selectionName.value;	
    let bathValue = Form1.bathType.value;	
    let ceilValue = Form1.selectionCeil.value;	
    let repairValue = Form1.selectionRepair.value;	
// Если выбрана "Вся квартира", отображаем вторую форму
    if (typeValue === "1") { 
        allFlat.classList.remove('hide');
        roomsAmount.classList.remove('hide');				
        }
    else {					
        allFlat.classList.add('hide');
        roomsAmount.classList.add('hide');
        };
    if (typeValue === "1500") { // Для опции селекта "Ванна"
        bath.classList.remove('hide');					
        } 
    else {
        bath.classList.add('hide');						
        };						
    let finalSquare = square.value; 
    result.innerHTML = Math.floor(typeValue * bathValue * ceilValue * repairValue * finalSquare); 
}
// Если выбрана "Вся квартира" - переходим ко второй форме с вариантами жилья и выполняем функцию расчета №2.
form2.onchange = form2.oninput = calcTotal2;
function calcTotal2() {
    let ceilValue = Form1.selectionCeil.value;	
    let repairValue = Form1.selectionRepair.value;	
    let variantValue = Form2.selectionVariant.value; 
    let roomsValue = Form2.selectionRooms.value;
    let finalSquare = square.value; 
    result.innerHTML = Math.floor(variantValue * roomsValue * repairValue * ceilValue * finalSquare); 
}
form1.onchange = calcTotal3;
function calcTotal3() {
    if (allFlat.classList.contains('hide')) {
        square.oninput = calcTotal1;
    } else {
        square.oninput = calcTotal2;
        form1.onchange = form1.oninput = calcTotal2;
    }
}