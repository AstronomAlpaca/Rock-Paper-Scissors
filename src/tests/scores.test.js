import {
  initialiseGame,
  humanScore,
  cpuScore,
} from "../modules/game-controller";

describe("human and cpu scores", function () {
  it("should both start as 0 on a new game", function () {
    initialiseGame();

    expect(humanScore).toEqual(0);
    expect(cpuScore).toEqual(0);
  });
});
