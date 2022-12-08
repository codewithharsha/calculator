let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        // console.log("button text=",buttonText);
        if(buttonText == 'C'){
           screen.value = '';
           screenValue='';
        }
        else if(buttonText == '='){
            screenValue = eval(screenValue);
            screen.value=screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value=screenValue;
        }
    })
}