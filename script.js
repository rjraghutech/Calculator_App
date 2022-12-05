let string = "";
let buttons = document.querySelectorAll('.button');
console.log(buttons);
Array.from(buttons).forEach((button) => {
  button.addEventListener('click',(e) => {
    console.log(button.innerText);
    if(button.innerText == '='){
      string = eval(string);
      document.querySelector('.input').value = string;
    }
    else if(button.innerText == 'AC'){
      string = '';
      document.querySelector('.input').value = string;
    }
    else if(button.innerText == 'X'){
      string += '*';
      document.querySelector('.input').value = string;
    }
    else {
      string += button.innerText;
      document.querySelector('.input').value = string;
    }
  })
})
