
// Generate
let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener('click', function(){
    let generateInput = document.getElementById('generateInput');
    let value = Math.random();
    let output = Math.round(value*10000);
    generateInput.value = output;
});
// buttons
let ClassName = document.getElementsByClassName("button");
for (let i = 0; i < ClassName.length; i++) {
    let element = ClassName[i];
    element.addEventListener('click', function(){
       let CalcInput = document.getElementById("CalcInput"); ;
        CalcInput.value =CalcInput.value + this.innerText;

    });
}
// clear
let Clear = document.getElementById("Clear");
Clear.addEventListener('click', function(){
    document.getElementById("CalcInput").value = "";
    document.getElementById("Thanku").style.display="none"
    document.getElementById("Sorry").style.display='none';
});
let Submit = document.getElementById("Submit");
Submit.addEventListener('click', function(){
    if(generateInput.value == CalcInput.value){
       let Enter = document.getElementById("Thanku");
       Enter.style.display = 'block'
    }
    else {
        let Sorry = document.getElementById("Sorry");
        Sorry.style.display = 'block';

    }
})
// backspace
var backspace = function() {
    
    let BackSpace  = document.getElementById('CalcInput').value;
    document.getElementById('CalcInput').value=BackSpace.substring(0,BackSpace.length -1);
    document.getElementById("Thanku").style.display="none"
    document.getElementById("Sorry").style.display='none';
  
  }