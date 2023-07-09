'use strict';

function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  let result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result);
}

function kidsGame(names) {
  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    if (!firstLetterToWords[name[0]]) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name);
    }
  }

  while (true) {
    const startLetter = output[output.length - 1].slice(0);
    if (!firstLetterToWords[startLetter]) {
      break;
    }

    const word = firstLetterToWords[startLetter].shift();
    output.push(word);
  }

  return output;
}

// Example usage



const words1 = new Set(['stick', 'column', 'hold', 'hold'])
const words2 = new Set(['roll on', 'column', 'garage', 'hold'])
console.log(wordsInCommon(words1, words2))


const names = ["bagon", "baltoy", "yamask", "starly","nosepass", "kalob", "nicky", "booger"]
console.log(kidsGame(names))