var words = ["Brick",  "Charm", "Draft",  "Elbow", "Fairy", "Ghost",  "Hazel",  "Ivory", "Joint", "Karma", "Lemon", "Magic", "Novel", "Orbit", "Paint",  "Quick", "Raven",
  "Scalp", "Trend",  "Unite", "Vigor" , "Whisk", "Xerox", "Yacht", "Zebra", "Blush", "Crisp", "Dough", "Epoch", "Frost", "Glove", "Index", "Jumpy", "Knobs", 
  "Lurgy", "Mirth", "Nymph", "Opium", "Pouch", "Quads",  "Rocks",  "Spiny", "Thumb",  "Vexil", "Wreck", "Exult", "Fjord", "Gland", "Hymns", "Jokes"];

var wordsHints = [ "A solid block for building.", "A tiny trinket or special magic.","A first try at something or a cool breeze.",
"The bend in your arm.","A tiny magical creature.", "A spooky spirit.", "A brown-green color or a tree.",
"A smooth, white material.","A place where things connect.","Good or bad energy from actions.","A sour yellow fruit.", "Special powers or tricks.", "A long story in a book.","A path around a planet.",
"A liquid for coloring things.", "Fast-moving.","A big black bird.","The skin on your head.","Something popular.",
"To bring together.","Strength and energy.","A tool for mixing fast.","A copy of something.", "A fancy boat.","A striped black-and-white animal.","A pink tint on cheeks.","Fresh and crunchy.",
"Soft bread mix.","A long period of time.","Ice on a cold morning.","A cover for your hand.","A list or pointer.","Moving in a bouncy way.","Small round handles.",
"Feeling sick.","Joy and laughter.","A mythological spirit of nature.","A drug from poppies.","A small bag.","Muscles in the thighs.","Hard natural minerals.", "Covered with spikes.","The short, thick finger.",
"Related to flags.","A destroyed structure.","To celebrate happily.", "A narrow sea inlet bordered by steep cliffs.","A body organ that produces substances.","Religious songs.","Funny remarks.", ];

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Randomly select a word and its hint
const wordList = Math.floor(Math.random() * words.length);
const selectedWord = words[wordList]; 
const selectedHint = wordsHints[wordList];

// Display the hint
document.getElementById("hint").innerHTML = `<b>Hint:</b> ${selectedHint}`;

const again = gameModal.querySelector("button");

let newWord, rightLetter, wongCount;
const maxGuess = 5;

const gameReset = () => {
  rightLetter = [];
  wrongCount = 0;
  hangmanImage.src = "img0.jpg";
  guessesText.innerText = `${wrongCount} / ${maxGuess}`;
  wordDisplay.innerHTML = newWord.split("").map(() => `<li class="letter"></li>`).join("");
  keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
  gameModal.classList.remove("show");
}




  

 
