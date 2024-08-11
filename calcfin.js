function showTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(`${tabName}-tab`).style.display = 'block';

    const buttons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

function calculatePercent() {
    const amount = parseFloat(document.getElementById('percent-amount').value);
    const rate = parseFloat(document.getElementById('percent-rate').value);
    const time = parseFloat(document.getElementById('percent-time').value);
    const result = amount * (1 + rate / 100 * time);
    document.getElementById('percent-result').textContent = `»тогова€ сумма: ${result.toFixed(2)}`;
}

function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);
    const time = parseFloat(document.getElementById('loan-time').value);
    const monthlyRate = rate / 1200;
    const numPayments = time * 12;
    const monthlyPayment = amount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numPayments)));
    const totalPayment = monthlyPayment * numPayments;
    document.getElementById('loan-result').textContent = `≈жемес€чный платеж: ${monthlyPayment.toFixed(2)}\nќбща€ сумма: ${totalPayment.toFixed(2)}`;
}

function calculateInvestment() {
    const initialAmount = parseFloat(document.getElementById('investment-amount').value);
    const annualRate = parseFloat(document.getElementById('investment-rate').value);
    const time = parseFloat(document.getElementById('investment-time').value);
    const finalAmount = initialAmount * Math.pow(1 + annualRate / 100, time);
    document.getElementById('investment-result').textContent = `—умма к концу периода: ${finalAmount.toFixed(2)}`;
}

function calculateTaxes() {
    const amount = parseFloat(document.getElementById('taxes-amount').value);
    const rate = parseFloat(document.getElementById('taxes-rate').value);
    const tax = amount * (rate / 100);
    document.getElementById('taxes-result').textContent = `—умма налогов: ${tax.toFixed(2)}`;
}
