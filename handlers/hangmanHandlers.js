const { words } = require("../data/words");

// write your handlers here...

//function to get word from word list
const handleWords = (req, res) => {
  const wordId = req.params.id;
  let word = words.find((element) => element.id === wordId);
  res.status(200);
  res.send(word);
};

//function to get random word ID and letter count
const getRandomWord = (req, res) => {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let hiddenWord = {
    id: randomWord.id,
    letterCount: randomWord.letterCount,
  };
  res.status(200);
  res.send(hiddenWord);
};

const handleUserGuess = (req, res) => {
  const userLetter = req.params.letter;
  const wordId = req.params.id;
  const wordToGuess = words.find((element) => element.id === wordId);
  const letters = wordToGuess.word.split("");

  let lettersGuessed = [];

  letters.forEach((letter) => {
    if (letter === userLetter) {
      lettersGuessed.push(true);
    } else lettersGuessed.push(false);
  });

  res.status(200);
  res.send(lettersGuessed);
};

module.exports = { handleWords, getRandomWord, handleUserGuess };
