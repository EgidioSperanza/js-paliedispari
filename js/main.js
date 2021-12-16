function checkSpace(e) {
    for (i = 0; i < e.length; i++) {
      if (e[i] === " ") {
        return "Stringa";
      } else {
        return "parola";
      }
    }
  }
  
  function isPalindrome(e) {
    //rimuoviamo spazi  e rendiamo tutto minuscolo
    e = e
      .toLowerCase()
      .replace(/[^A-Za-z0-9]/, "")
      .trim();
    //TODO ACCENTI E APOSTROFI!!!
    console.log(e);
    eReverse = e.split("").reverse().join("");
    console.log(eReverse);
    if (e === eReverse) return true;
    else return false;
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

sendWord.addEventListener("click", () => {
  const userString = prompt("Inserisci una Stringa di testo");
  addResponseClass(response);
  if (!isNaN(userString)) {
    if (isPalindrome(userString))
      response.textContent = `"${userString}" è un numero tuttavia è in forma Palindroma`;
    else
      response.textContent = `"${userString}" è un numero ed inoltre non è Palindromo`;
  }
  if (isPalindrome(userString)) {
    response.textContent = `"${userString}" risulta essere una ${checkSpace(
      userString
    )} Palindroma`;
  } else {
    response.textContent = `"${userString}" risulta non essere una ${checkSpace(
      userString
    )} Palindroma`;
  }
});


