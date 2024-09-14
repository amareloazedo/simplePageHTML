'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('temaescuro')
    
    var className = document.body.className;
    if(className == "temaclaro") {
        this.textContent = "tema escuro"; 
    } else {
        this.textContent = "tema calro";
    }

    console.log('current class name: ' + className);
});