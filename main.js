window.onload(generateQuote());
function generateQuote() {
  let ranNum = Math.floor(Math.random() * 1643);
  const quote = document.getElementById("quote");
  const authorName = document.getElementById("author");
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quote.innerText = data[ranNum].text;
      console.log(quote.innerText);
      if (data[ranNum].author == null) {
        authorName.innerText = `🙏`;
      } else {
        authorName.innerText = `${data[ranNum].author}`;
      }
    });
}
