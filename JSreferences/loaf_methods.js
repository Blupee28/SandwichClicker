// Loaf purchasing methods.

Game.EL = function () {
    if (numberOfSandwiches > 14) {
        numberOfSandwiches -= 15;
        loafNumber++;
        sandwichesPerSecond += 0.5;
        Game.update();
    };
};

Game.E10Loaf = function () {
    for (var i = 0; i < 10; i++) {
        Game.EL();
    };
};

Game.E100Loaf = function () {
    for (var i = 0; i < 10; i++) {
        Game.E10Loaf();
    };
};