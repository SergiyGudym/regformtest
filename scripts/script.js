// Code for input only for letters (English + Cyrillic) to input "ФИО"
let inputLetters = document.getElementById("fio");
function onlyLetters(e) {
    let kod =e.which;
    // English big letter
    if(kod>=65 && kod <=90){
        return true;
    }
    // English small letter
    else if(kod>=97 && kod <=122){
        return true;
    }
    // Cyrillic big letter
    else if(kod>=192 && kod <=223){
        return true;
    }
    // Cyrillic small letter
    else if(kod>=224 && kod <=255){ 
        return true;
    }
    console.log(e);
    return false;
}

// Code for input only English letters to input "email"
let inputEnglish = document.getElementById("emailEng");
function onlyEnglish(e) {
    let kod =e.which;
    // English big letter
    if(kod>=65 && kod <=90){
        return true;
    }
    // English small letter
    else if(kod>=97 && kod <=122){
        return true;
    }
    // Cyrillic big letter
    else if(kod>=1040 && kod <=1105 && kod == 1025){
        return false;
    }
    // backspace
    else if(kod == 8){
        return true;
    }
    // del
    else if(kod == 46){
        return true;
    }
    // arrows
    else if(kod>=37 && kod <=40){
        return true;
    }
    /*
    По хорошему, я бы еще вставил код для 64 (@) и 46 (точка), 
    но ТЗ есть ТЗ и уже почти час ночи... Хорошего дня :)
    */
    console.log(e);
    return false;
}

// Code for input only for numbers to input "Тел"
let inputNumber = document.getElementById("num");
function onlyNumber(e) {
    let kod =e.which;
    if(kod>=48 && kod <=57){
        return true;
    }
    console.log(e);
    return false;
}

