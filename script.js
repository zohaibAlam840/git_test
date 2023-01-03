let divContainer = document.querySelector(".gridContainer");
let divArray = new Array();
let button = document.querySelectorAll('#grid');
let gridbtn = Array.from(button);
let root = document.querySelector(':root');
let rootstyle = getComputedStyle(root);
function divCreator(divNumber){
    let number=divNumber*divNumber;
    for(let i=0; i<number;i++){
        divArray[i] = document.createElement('div');
        divArray[i].setAttribute('id',i);
        divContainer.appendChild(divArray[i]);
    }
}

gridbtn.forEach(function(item){
    item.addEventListener('click', (e)=> {
        root.style.setProperty('--divRC',item.value);
        divCreator(item.value); 
        let val = item.value; 
        if(val==0){
            gridClener();
        }
    })
    
})
function gridClener(){
    divContainer.innerHTML=''; 
}