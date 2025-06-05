// Static exchange rates relative to USD

const exchangeRates = {
  USD: { USD: 1, INR: 83, EUR: 0.93, GBP: 0.79 },
  INR: { USD: 0.012, INR: 1, EUR: 0.011, GBP: 0.0095 },
  EUR: { USD: 1.07, INR: 89, EUR: 1, GBP: 0.85 },
  GBP: { USD: 1.27, INR: 105, EUR: 1.18, GBP: 1 },
};

function currentCurrency(){
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;
      const resultDiv = document.getElementById("result");


    if(isNaN(amount) || amount<=0){
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const rate  = exchangeRates[from][to];
    const converted = (amount*rate).toFixed(2);
    resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`
}