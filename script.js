let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
}) 
document.addEventListener("keydown", (e) => {
    if("0123456789+-*/.%".includes(e.key)){
        string += e.key;
        input.value = string;
    }
    else if(e.key === "Enter"){
        input.value = eval(string);
    }
    else if(e.key === "Backspace"){
        string = string.slice(0,-1);
        input.value = string;
    }
    else if(e.key === "Escape"){
        string = "";
        input.value = "";
    }
});
document.addEventListener("keydown", (e) => {

    let key = e.key;

    document.querySelectorAll("button").forEach(btn => {

        if(btn.innerHTML === key ||
           (key === "Enter" && btn.innerHTML === "=") ||
           (key === "Backspace" && btn.innerHTML === "DEL")) {

            btn.classList.add("active");

            setTimeout(() => {
                btn.classList.remove("active");
            }, 150);
        }
    });

});