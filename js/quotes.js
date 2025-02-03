const quotes = [
  {
    quote: "인생은 습관의 집합이다.",
    author:""
  },
  {
    quote: "오늘의 나는 10년 후의 내가 돌아온 것.",
    author:""
  },
  {
    quote: "성공하는 방법은 많은 실패를 하는 것이다.",
    author:""
  },
  {
    quote: "습관이 많은 사람이 행복하다.",author:""
  },
  {
    quote: "밤에 하는 생각들은 농도가 짙다.",author:""
  },
  {
    quote: "아무도 보지 않아도 하는 사람.",author:""
  },
  {
    quote: "지금 행복한지를 떠올려보지 않는 것이 행복이다.",author:""
  },
  {
    quote: "원래 힘든 것이고, 모두가 견디며 살고 있는 것이다.",author:""
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",author:""
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라. ",author:""
  }
];


  const quote = document.querySelector("#quote .quote");
  const author = document.querySelector("#quote .author");
  const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
  quote.innerText = todayQuote.quote;
  author.innerText = ''+todayQuote.author;