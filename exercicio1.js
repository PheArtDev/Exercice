let para = document.querySelector('#p1');
let para2 = document.querySelector('#p2');
let para3= document.querySelector('#p3');
let para4 = document.querySelector('#p4');

let inputA = document.querySelector('#A');
let inputB = document.querySelector('#B');

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let A = inputA.value;
    let B = inputB.value;
    
    if (!(A === Number & B === Number)){
        let soma = parseInt(A) + parseInt(B); 
        let sub = parseInt(A) - parseInt(B);
        let mult = parseInt(A) * parseInt(B);
        let Divi = parseInt(A) / parseInt(B);

        para.textContent =  A + ' + ' + B + ' = '  + soma;
        para2.textContent =  A + ' - ' + B + ' = ' + sub;
        para3.textContent =  A + ' * ' + B + ' = ' + mult;
        para4.textContent =  A + ' / ' + B + ' = ' + Divi;
        

    }else{
        para.textContent = 'Insira um número.' 
    } 
    
})