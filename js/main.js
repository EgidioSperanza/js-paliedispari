function isPalindrome(e) {
  //rimuoviamo spazi  e rendiamo tutto minuscolo
  e = e.toLowerCase().replace(/[^A-Za-z0-9]/, "");
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
  if (userString.length === 0) {
    response.textContent =
      'Non posso fare molto per te se non inserisci una Stringa, però posso farti un esempio di frase Palindroma: "Anna cala la canna" ';
  } else if (!isNaN(userString) && isPalindrome(userString)) {
    response.textContent = `"${userString}" è un numero tuttavia è in forma Palindroma`;
  } else if (!isNaN(userString)) {
    response.textContent = `"${userString}" è un numero ed inoltre non è in forma Palindroma`;
  } else if (isPalindrome(userString)) {
    response.textContent = `"${userString}" risulta essere una Stringa Palindroma`;
    console.log(userString)
  } else {
    response.textContent = `"${userString}" risulta non essere una Stringa Palindroma`;
  }
});

