import "bootstrap";
import "./style.css";




  const myButton1  = document.querySelector('.mybutton')
  const card = document.querySelector('.card')

  let generateRandomNumber = () =>{
    
    let numbers =["A","2", "3","4","5","6","7","8","9","J","Q","K"];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
  };

  let generateRandomSuit = () => {
    let suit = ["diams","spade","hearts","clubs"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
  };

  let generatedCard =() => {
    card.className="card";
    let suit =generateRandomSuit ();
    card.classList.add(suit);
    card.innerHTML = generateRandomNumber ();

  };
  
window.onload = generatedCard;
myButton1.addEventListener("click", generatedCard);
