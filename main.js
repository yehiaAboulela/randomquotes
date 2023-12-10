const btnsParent = document.querySelector(".modes-wrapper");
const userQuote = document.querySelector(".quote");
const auther = document.querySelector(".auther");

const quotes = {
  angry: [
    {
      quote: "Never go to bed mad. Stay up and fight.",
      author: "Phyllis Diller",
    },
    {
      quote:
        "Bitterness is like cancer. It eats upon the host. But anger is like fire. It burns it all clean.",
      author: "Maya Angelou",
    },
    {
      quote:
        "Don`t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
      author: "Roy T. Bennett",
    },
    { quote: "Angry people are not always wise.", author: "Jane Austen" },
    { quote: "The best fighter is never angry.", author: "Lao Tzu" },
    {
      quote:
        "If you spend your time hoping someone will suffer the consequences for what they did to your heart, then you're allowing them to hurt you a second time in your mind.",
      author: "Shannon L. Alder",
    },
  ],
  dizzy: [
    {
      quote:
        "Come with me while the wine shop is still open.We are dizzy with meeting each other.",
      author: "author",
    },
    {
      quote:
        "...with you, I'm always on the verge - feeling dizzy like looking at waves - and you, my Love, make me tipsy...",
      author: "John Geddes",
    },
    {
      quote:
        "All I can think is: I need air. The rest of my thoughts are a blur of radio static and fluorescent lights and lab coats and steel tables and surgical knives",
      author: "Lauren Oliver",
    },
    {
      quote: "Not only too much wine makes you drunk, but too much beauty too!",
      author: "Mehmet Murat ildan",
    },
    {
      quote:
        "When looking out of a window, he became dizzy and anxious. He was a perverse, peculiar, and easily embarrassed man, of bad mental constitution.",
      author: "Richard von Krafft-Ebing",
    },
  ],
  sad: [
    {
      quote:
        "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad",
      author: "Henry Wadsworth Longfellow",
    },
    {
      quote:
        "When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "I didn't want to wake up. I was having a much better time asleep. And that's really sad. It was almost like a reverse nightmare, like when you wake up from a nightmare you're so relieved. I woke up into a nightmare",
      author: "Ned Vizzini, Its Kind of a Funny Story",
    },
    {
      quote:
        "You cannot protect yourself from sadness without protecting yourself from happiness.",
      author: "Jonathan Safran Foer",
    },
    {
      quote:
        "What you must understand about me is that I`m a deeply unhappy person.",
      author: "John Green, Looking for Alaska",
    },
    {
      quote:
        "Any fool can be happy. It takes a man with real heart to make beauty out of the stuff that makes us weep",
      author: "Clive Barker",
    },
    {
      quote: "Tears are words that need to be written.",
      author: "Paulo Coelho",
    },
  ],
};

const randomQuoteGenerator = function (arr) {
  //1--removing current displayed quote from the array to make sure its not generated again
  const filterdArr = arr.filter((cur) => cur.quote != userQuote.textContent);

  //2--generating random number withen the array length to use it as index
  const randomNumber = Math.trunc(Math.random() * filterdArr.length);

  //3--changing current quote with the new randomly generated one
  userQuote.textContent = filterdArr[randomNumber].quote;
  auther.textContent = filterdArr[randomNumber].author;
};
//Using event delegation for better performance
btnsParent.addEventListener("click", function (e) {
  if (e.target.classList.contains("my-mode")) {
    randomQuoteGenerator(quotes[e.target.getAttribute("mode")]);
  }
});
