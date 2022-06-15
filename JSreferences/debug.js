// Debug tools.

Game.earn = function (amount) {
    numberOfSandwiches += amount;
    Game.update();
};

Game.earnSPS = function (amount) {
    sandwichesPerSecond += amount;
    Game.update();
};