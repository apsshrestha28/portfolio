const introduction = ["Aleena Bhari","Full Stack Developer"];
let count = 0;
let index = 0;
let letter = "";
let currentWord = "";

(function type() {
  if(count === introduction.length) {
    count = 0;
  }
  currentWord = introduction[count];
  letter= currentWord.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  
  if(letter.length === currentWord.length) {
    count ++;
    index = 0;
  }
  setTimeout(type, 100);

})();