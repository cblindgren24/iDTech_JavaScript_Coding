function createSentence(array) {
    for (let i = 0; i < array.length; i++){ sentence += array[i] + " ";} return sentence; 
  }
  let words = ["This ", "is ", "JavaScript ", "coding!"];
  createSentence(words);