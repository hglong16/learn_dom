let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "A person who never made a mistake never tried anything new.",
    person: "Albert Einstein",
  },
  {
    quote:
      "What we observe is not nature itself, but nature exposed to our method of questioning.",
    person: "Werner Heisenberg",
  },
  {
    quote:
      "The Nobel prize is unquestionably the most famous prize in the world, and very often, the prize is an object of prestige not only for a person but also for a research center, a country, or for a particular area of interest.",
    person: "Klaus von Klitzing",
  },
  {
    quote:
      "Considering the greater amounts of energy which can be collected and stored in suitable experimental form in capacitors, one could expect to deliver radiated energy for some time from them.",
    person: "Karl Ferdinand Braun",
  },
  {
    quote: "The time you enjoy wasting is not wasted time.",
    person: "Bertrand Russell",
  },
];

btn.addEventListener("click", function(){
  console.log(quotes.length)
  let random = Math.floor(Math.random() * quotes.length)
  console.log(random, quotes[random])
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
  console.log(person)

})