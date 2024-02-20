window.addEventListener("load", function () {
  // 언어 펼침 기능
  const langword = this.document.querySelector(".language-word");
  const language = this.document.querySelector(".languge");
  // const languageli = this.document.querySelector(".languge li");
  langword.addEventListener("click", function () {
    language.classList.toggle("language-box-active");
  });
});
