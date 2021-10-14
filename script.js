const textarea = document.querySelector(".text");
const btn_converter = document.querySelector(".btn-converter");

function convert(){
    
    const str = textarea.value;
    const string = str.toUpperCase();
    const lowerCase = str.toLowerCase();

    if( textarea.value === string){
        textarea.value = lowerCase;
    }else if(textarea.value = lowerCase){
        textarea.value = string;
    }
}

btn_converter.addEventListener("click", convert);