class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }

  import { Character } from "./domain";

  export default Game;

  module.exports = {
    GameSavingData,
    readGameSaving,
    writeGameSaving
  };