const apiKey = 'bbdf2f4b7d18b8a9f70b587f';
const exchangeRateUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest`;

let currencyOne = document.getElementById('currency-one');
let currencyTwo = document.getElementById('currency-two');

let amountOne = document.getElementById('amount-one');
let amountTwo = document.getElementById('amount-two');

let exchangeRate = document.getElementById('exchange-rate');
let exchangeBtn = document.getElementById('exchange-btn');

// exchangeBtn.addEventListener('click');

currencyOne.addEventListener('change', calculateCurrency);
currencyTwo.addEventListener('change', calculateCurrency);
amountOne.addEventListener('input', calculateCurrency);
amountTwo.addEventListener('input', calculateCurrency);

function calculateCurrency() {
  let currencyOneValue = currencyOne.value;
  let currencyTwoValue = currencyTwo.value;
  let amountOneValue = amountOne.value;
  const url = `${exchangeRateUrl}/${currencyOneValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwoValue];
      const exchangeRateText = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue}`;
      exchangeRate.innerHTML = exchangeRateText;
      amountTwo.value = (amountOneValue * rate).toFixed(2);
    });
}

calculateCurrency();

exchangeBtn.addEventListener('click', swapCurrency);
function swapCurrency() {
  let currencyOneValue = currencyOne.value;
  let currencyTwoValue = currencyTwo.value;

  currencyOne.value = currencyTwoValue;
  currencyTwo.value = currencyOneValue;
  calculateCurrency();
}
