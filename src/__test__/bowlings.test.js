const Game = require("../bowling");

describe("score equal to zero when no pins down - score()", () => {

    const game = new Game();
    
    test("should return value : 0", () => {

       

         for(let i =0; i<20; i++){
           game.roll(0);
         }

        expect(game.score()).toBe(0);

    });
});
