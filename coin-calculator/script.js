// Make a thing where it divides the numbers to make a decimal

const coin25 = document.getElementById("coin25");
const coin10 = document.getElementById("coin10");
const coin5 = document.getElementById("coin5");
const coin1 = document.getElementById("coin1");
const finalAmountText = document.getElementById("coinPrice");

coin25.onclick = function() {
    coin25.select();
}

coin10.onclick = function() {
    coin10.select();
}

coin5.onclick = function() {
    coin5.select();
}

coin1.onclick = function() {
    coin1.select();
}

document.getElementById('coinButton').onclick = function() {
    var coin25Amount = parseInt(coin25.value) * 25 / 100;
    var coin10Amount = parseInt(coin10.value) * 10 / 100;
    var coin5Amount = parseInt(coin5.value) * 5 / 100;
    var coin1Amount = parseInt(coin1.value) / 100;

    var allCoinPrices = coin25Amount + coin10Amount + coin5Amount + coin1Amount;

    finalAmountText.value = allCoinPrices;

    if (finalAmountText.value == "NaN") {
        alert('Make sure that if a slot does not have a number in it at all, put in a zero.');
        finalAmountText.value = "";
    }
};