// Update method(s).

Game.update = function () {
    $("#NOSdisplay").text(numberOfSandwiches + " sandwiches");
    $("#SPSdisplay").text(sandwichesPerSecond + " sandwiches per second");
    $("#NOLdisplay").text(loafNumber + " loaves");
};