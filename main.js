console.log("PC GAMER DE 600 REAIS\nRODA ATÉ TUA MÃE");

const textarea = document.querySelector(".translator-input");
const button = document.querySelector(".translate-button");
const translated = document.querySelector(".translated")

button.addEventListener("click", function () {
  const translatedText = textarea.value.replace(/\S/g, "K")
  translated.innerHTML = translatedText
});
