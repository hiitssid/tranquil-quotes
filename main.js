const URL = "https://type.fit/api/quotes";
const getQuote = async () => {
  let ranNum = Math.floor(Math.random() * 16);
  const quote = document.getElementById("quote");
  const authorName = document.getElementById("author");
  const response = await fetch(URL);
  const data = await response.json();
  quote.innerText = data[ranNum].text;
  authorName.innerText = `${data[ranNum].author}`;
  console.log(data);
};
getQuote();
