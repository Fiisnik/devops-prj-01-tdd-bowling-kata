const { Game } = require('../bowling');

describe("score equal to zero when no pins down - score()", () => {
    test("should return value : 0", () => {

        let result;
         for(let i =0; i<20; i++){
           result = Game.roll(0);
         }

        expect(result).toBe(0);

    });
});