let divContainer = document.querySelector(".gridContainer");
let divArray = new Array();

// grid button varables
let button = document.querySelectorAll('#grid');
let gridbtn = Array.from(button);
let root = document.querySelector(':root');
let rootstyle = getComputedStyle(root);

// color button varables
let colorBtn = document.querySelectorAll('#color');
let colorBtnArray = Array.from(colorBtn);
let setColor = 'background-color: black;';
let colorPicker = document.querySelector('#piker');
function divCreator(divNumber){
    let number=divNumber*divNumber;
    for(let i=0; i<number;i++){
        divArray[i] = document.createElement('div');
        divArray[i].setAttribute('id',i);
        divContainer.appendChild(divArray[i]);
    }  
    selectColor();
    setColorPiker();

}

gridbtn.forEach(function(item){
    item.addEventListener('click', (e)=> {
        gridClener();
        root.style.setProperty('--divRC',item.value);
        divCreator(item.value); 
    })
    
})

function gridClener(){
    divContainer.innerHTML=''; 
}
function setColorPiker(){
    divArray.forEach((items) => {
        items.addEventListener('mouseenter', () => {
             items.setAttribute('style',setColor);
             
          });
     })

}
function selectColor(){
    let selectedColor;
    colorBtnArray.forEach(function(item){
        item.addEventListener('click',()=>{
            if(item.value==1){
                selectedColor='background-color: white;'
            }
            else if(item.value==2){
                selectedColor='background-color: black;';
            }
            else if(item.value==3){
                let randomColor = colorPicker.value;
                selectedColor = 'background-color:'+randomColor+';';
                  
            }          
            setColor=selectedColor;
            
        })
        
    })
    
}
