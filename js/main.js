function strType(e){
  let count=0;
  for(let i=0;i<e.length;i++){
    if(e[i]===" "){
      count++;
    }
  }
  if(count>0){
    return "Stringa";
  } else{
    return "parola";
  }
}
function isPalindrome(e) {
  //rimuoviamo spazi di inizio fine  e rendiamo tutto minuscolo
  e = e.toLowerCase().trim();
  console.log(e);
  eReverse = e.split("").reverse().join("");
  console.log(eReverse);
  if (e === eReverse) return true;
  else return false;
}
function isPalindromeFor(e) {
  let nospace;
  let reverseStr;
  for(let i=e.length-1;i>=0;i--){
    if(e[i]!==" "){
      reverseStr+= e[i];
    }
  }
for(i=0;i<e.length;i++){
  if(e[i]!==" "){
    nospace+= e[i];
  }
}
  if(nospace.toLowerCase()===reverseStr.toLowerCase()){
    return true;
  }else{
    return false;
  }
}

function addResponseClass(e) {
  e.classList.add(
    "container",
    "bg-dark",
    "bg-gradient",
    "text-white",
    "p-4",
    "mt-1"
  );
}

const sendWord = document.getElementById("send_word");
const response = document.getElementById("response");
const sendWordFor = document.getElementById("send_word_for");
const responseFor = document.getElementById("response_for");

sendWord.addEventListener("click", () => {
  const userString = prompt("Inserisci una Stringa di testo");
  addResponseClass(response);
  if (userString.length === 0) {
    response.textContent =
      'Non posso fare molto per te se non inserisci una Stringa, però posso farti un esempio di frase Palindroma: "Anna cala la canna" ';
  } else if (!isNaN(userString) && isPalindrome(userString)) {
    response.textContent = `"${userString}" è un numero tuttavia è in forma Palindroma`;
  } else if (!isNaN(userString)) {
    response.textContent = `"${userString}" è un numero ed inoltre non è in forma Palindroma`;
  } else if (isPalindrome(userString)) {
    response.textContent = `"${userString}" risulta essere una ${strType(userString)} Palindroma`;
    console.log(userString);
  } else {
    response.textContent = `"${userString}" risulta non essere una ${strType(userString)} Palindroma`;
  }
});

sendWordFor.addEventListener("click", () => {
  const userStringFor = prompt("Inserisci una Stringa di testo");
  addResponseClass(responseFor);
  if (userStringFor.length === 0) {
    responseFor.textContent =
      'Non posso fare molto per te se non inserisci una Stringa, però posso farti un esempio di frase Palindroma: "Anna cala la canna" ';
  } else if (!isNaN(userStringFor) && isPalindromeFor(userStringFor)) {
    responseFor.textContent = `"${userStringFor}" è un numero tuttavia è in forma Palindroma`;
  } else if (!isNaN(userStringFor)) {
    responseFor.textContent = `"${userStringFor}" è un numero ed inoltre non è in forma Palindroma`;
  } else if (isPalindromeFor(userStringFor)) {
    responseFor.textContent = `"${userStringFor}" risulta essere una ${strType(userStringFor)} Palindroma`;
    console.log(userStringFor);
  } else {
    responseFor.textContent = `"${userStringFor}" risulta non essere una ${strType(userStringFor)} Palindroma`;
  }
});


//PARTE 2 ESERCIZIO
function randomNum(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

const even = document.getElementById("even");
const odd = document.getElementById("odd");
const sendNumber = document.getElementById("sendNumber");
const winner = document.getElementById("winner");
const myMin = 1;
const myMax = 5;
let evenChoose = true;

even.addEventListener("click", () => {
  evenChoose = true;
});

odd.addEventListener("click", () => {
  evenChoose = false;
});

sendNumber.addEventListener("click", () => {
  do {
    const userNumber = prompt("Inserisci un numero da 1 a 5");
    num = Number(userNumber);
  } while (num > 5 || num < 1 || isNaN(num));
  {
    addResponseClass(winner);
    computerNum = randomNum(myMin, myMax);
    let sum = num + computerNum;

    if (sum % 2 === 0) {
      if (evenChoose) {
        winner.textContent = `You Win!!! Hai scelto 
        ${(evenChoose) ? "pari" : "dispari"} 
        inserendo il numero ${num}, mentre il computer ha generato randomicamente 
        ${computerNum}. Sommando i due numeri otteniamo ${sum} che è un valore ${(sum%2===0) ? "pari" : "dispari"}`;
      } else {
        winner.textContent = `You Lose!!! Hai scelto 
        ${(evenChoose) ? "pari" : "dispari"} 
        inserendo il numero ${num}, mentre il computer ha generato randomicamente 
        ${computerNum}. Sommando i due numeri otteniamo ${sum} che è un valore ${(sum%2===0) ? "pari" : "dispari"}`;
      }
    } else {
      if (evenChoose) {
        winner.textContent = `You Lose! Hai scelto 
        ${(evenChoose) ? "pari" : "dispari"} 
        inserendo il numero ${num}, mentre il computer ha generato randomicamente 
        ${computerNum}. Sommando i due numeri otteniamo ${sum} che è un valore ${(sum%2===0) ? "pari" : "dispari"}`;
      } else {
        winner.textContent = `You Win! Hai scelto 
        ${(evenChoose) ? "pari" : "dispari"} 
        inserendo il numero ${num}, mentre il computer ha generato randomicamente 
        ${computerNum}. Sommando i due numeri otteniamo ${sum} che è un valore ${(sum%2===0) ? "pari" : "dispari"}`;
      }
    }
  }
});
