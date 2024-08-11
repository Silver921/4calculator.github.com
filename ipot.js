function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTermYears = parseFloat(document.getElementById('loan-term').value);
    const loanTermMonths = loanTermYears * 12;
    const additionalFees = parseFloat(document.getElementById('additional-fees').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTermMonths) || isNaN(additionalFees) || loanAmount <= 0 || interestRate <= 0 || loanTermMonths <= 0 || additionalFees < 0) {
        alert('Пожалуйста, введите корректные значения.');
        return;
    }

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTermMonths));
    const totalPayments = monthlyPayment * loanTermMonths + additionalFees;

    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total-payments').textContent = totalPayments.toFixed(2);

    generateAmortizationSchedule(loanAmount, interestRate, loanTermMonths, monthlyPayment);
}

function generateAmortizationSchedule(loanAmount, interestRate, loanTermMonths, monthlyPayment) {
    const amortizationTable = document.getElementById('amortization-table').getElementsByTagName('tbody')[0];
    amortizationTable.innerHTML = '';

    let remainingBalance = loanAmount;
    for (let i = 1; i <= loanTermMonths; i++) {
        const interest = remainingBalance * interestRate;
        const principal = monthlyPayment - interest;
        remainingBalance -= principal;

        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${i}</td>
      <td>${principal.toFixed(2)}</td>
      <td>${interest.toFixed(2)}</td>
      <td>${monthlyPayment.toFixed(2)}</td>
    `;
        amortizationTable.appendChild(row);
    }
}

function saveCalculation() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const loanTerm = parseFloat(document.getElementById('loan-term').value);
    const additionalFees = parseFloat(document.getElementById('additional-fees').value);

    const calculationData = {
        loanAmount,
        interestRate,
        loanTerm,
        additionalFees
    };

    localStorage.setItem('calculationData', JSON.stringify(calculationData));
    alert('Расчет сохранен.');
}

function loadCalculation() {
    const calculationData = JSON.parse(localStorage.getItem('calculationData'));

    if (calculationData) {

        document.getElementById('loan-amount').value = calculationData.loanAmount;
        document.getElementById('interest-rate').value = calculationData.interestRate;
        document.getElementById('loan-term').value = calculationData.loanTerm;
        document.getElementById('additional-fees').value = calculationData.additionalFees;
        calculateMortgage();
    } else {
        alert('Нет сохраненных расчетов.');
    }
}

function compareOptions() {
    const loanAmount1 = parseFloat(document.getElementById('comparison-loan-amount').value);
    const interestRate1 = parseFloat(document.getElementById('comparison-interest-rate').value) / 100 / 12;
    const loanTermYears1 = parseFloat(document.getElementById('comparison-loan-term').value);
    const loanTermMonths1 = loanTermYears1 * 12;

    const loanAmount2 = parseFloat(document.getElementById('loan-amount').value);
    const interestRate2 = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTermYears2 = parseFloat(document.getElementById('loan-term').value);
    const loanTermMonths2 = loanTermYears2 * 12;

    const monthlyPayment1 = (loanAmount1 * interestRate1) / (1 - Math.pow(1 + interestRate1, -loanTermMonths1));
    const totalPayments1 = monthlyPayment1 * loanTermMonths1;

    const monthlyPayment2 = (loanAmount2 * interestRate2) / (1 - Math.pow(1 + interestRate2, -loanTermMonths2));
    const totalPayments2 = monthlyPayment2 * loanTermMonths2;

    document.getElementById('comparison-monthly-payment-1').textContent = monthlyPayment1.toFixed(2);
    document.getElementById('comparison-total-payments-1').textContent = totalPayments1.toFixed(2);
    document.getElementById('comparison-monthly-payment-2').textContent = monthlyPayment2.toFixed(2);
    document.getElementById('comparison-total-payments-2').textContent = totalPayments2.toFixed(2);
}

// Предыдущие функции ... 


function exportToPDF(data) {
    // Создание PDF-документа
    const doc = new jsPDF();

    // Добавление данных в PDF-документ
    doc.setFontSize(14);
    doc.text('Экспортируемые данные', 20, 20);
    doc.setFontSize(12);

    // Отображение данных в PDF-документе
    let yPos = 35;
    for (const [key, value] of Object.entries(data)) {
        doc.text(`${key}: ${value}`, 20, yPos);
        yPos += 10;
    }

    // Сохранение PDF-документа
    doc.save('exported_data.pdf');
}

function exportToExcel(data) {
    // Создание рабочей книги Excel
    const workbook = XLSX.utils.book_new();

    // Создание рабочего листа
    const worksheet = XLSX.utils.json_to_sheet([data]);

    // Добавление рабочего листа в рабочую книгу
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Exported Data');

    // Сохранение рабочей книги Excel
    XLSX.writeFile(workbook, 'exported_data.xlsx');
}


function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTermYears = parseFloat(document.getElementById('loan-term').value);
    const loanTermMonths = loanTermYears * 12;
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const taxDeduction = parseFloat(document.getElementById('tax-deduction').value);
    const insuranceFee = parseFloat(document.getElementById('insurance-fee').value);
    const earlyRepayment = parseFloat(document.getElementById('early-repayment').value);
    const additionalFees = parseFloat(document.getElementById('additional-fees').value);
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTermMonths) || isNaN(downPayment) || isNaN(taxDeduction) || isNaN(insuranceFee) || isNaN(earlyRepayment) || isNaN(additionalFees) || loanAmount <= 0 || interestRate <= 0 || loanTermMonths <= 0 || downPayment < 0 || taxDeduction < 0 || insuranceFee < 0 || earlyRepayment < 0 || additionalFees < 0) {
        alert('Пожалуйста, введите корректные значения.');
        return;
    }

    const monthlyPayment = ((loanAmount - downPayment) * interestRate) / (1 - Math.pow(1 + interestRate, -loanTermMonths));
    const totalPayments = (monthlyPayment * loanTermMonths) + insuranceFee + additionalFees - taxDeduction;

    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total-payments').textContent = totalPayments.toFixed(2);

    generateAmortizationSchedule(loanAmount - downPayment, interestRate, loanTermMonths, monthlyPayment, earlyRepayment);
}

function generateAmortizationSchedule(loanAmount, interestRate, loanTermMonths, monthlyPayment, earlyRepayment) {
    const amortizationTable = document.getElementById('amortization-table').getElementsByTagName('tbody')[0];
    amortizationTable.innerHTML = '';

    let remainingBalance = loanAmount;
    for (let i = 1; i <= loanTermMonths; i++) {
        const interest = remainingBalance * interestRate;
        const principal = monthlyPayment - interest;
        remainingBalance -= principal;

        if (remainingBalance <= earlyRepayment) {
            remainingBalance = 0;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${i}</td>
      <td>${principal.toFixed(2)}</td>
      <td>${interest.toFixed(2)}</td>
      <td>${monthlyPayment.toFixed(2)}</td>
    `;
        amortizationTable.appendChild(row);
    }
}

function saveCalculation() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const loanTerm = parseFloat(document.getElementById('loan-term').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const taxDeduction = parseFloat(document.getElementById('tax-deduction').value);
    const additionalFees = parseFloat(document.getElementById('additional-fees').value);

    const calculationData = {
        loanAmount,
        interestRate,
        loanTerm,
        downPayment,
        taxDeduction,
        additionalFees
    };

    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations')) || [];
    savedCalculations.push(calculationData);
    localStorage.setItem('savedCalculations', JSON.stringify(savedCalculations));

    updateSavedCalculationsList();
    alert('Расчет сохранен.');
}

function loadCalculation(index) {
    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations')) || [];
    const calculationData = savedCalculations[index];

    if (calculationData) {
        document.getElementById('loan-amount').value = calculationData.loanAmount;
        document.getElementById('interest-rate').value = calculationData.interestRate;
        document.getElementById('loan-term').value = calculationData.loanTerm;
        document.getElementById('down-payment').value = calculationData.downPayment;
        document.getElementById('tax-deduction').value = calculationData.taxDeduction;
        document.getElementById('additional-fees').value = calculationData.additionalFees;
        calculateMortgage();
    } else {
        alert('Ошибка при загрузке сохраненного расчета.');
    }
}

function updateSavedCalculationsList() {
    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations')) || [];
    const savedCalculationsList = document.getElementById('saved-calculations-list');
    savedCalculationsList.innerHTML = '';

    savedCalculations.forEach((calculation, index) => {
        const li = document.createElement('li');
        li.textContent = `Сумма кредита: ${calculation.loanAmount}, Процентная ставка: ${calculation.interestRate}%, Срок: ${calculation.loanTerm} лет`;
        li.onclick = () => loadCalculation(index);
        savedCalculationsList.appendChild(li);
    });
}

function compareOptions() {
    const loanAmount1 = parseFloat(document.getElementById('comparison-loan-amount-1').value);
    const interestRate1 = parseFloat(document.getElementById('comparison-interest-rate-1').value) / 100 / 12;
    const loanTermYears1 = parseFloat(document.getElementById('comparison-loan-term-1').value);
    const loanTermMonths1 = loanTermYears1 * 12;

    const loanAmount2 = parseFloat(document.getElementById('comparison-loan-amount-2').value);
    const interestRate2 = parseFloat(document.getElementById('comparison-interest-rate-2').value) / 100 / 12;
    const loanTermYears2 = parseFloat(document.getElementById('comparison-loan-term-2').value);
    const loanTermMonths2 = loanTermYears2 * 12;

    const loanAmount3 = parseFloat(document.getElementById('comparison-loan-amount-3').value);
    const interestRate3 = parseFloat(document.getElementById('comparison-interest-rate-3').value) / 100 / 12;
    const loanTermYears3 = parseFloat(document.getElementById('comparison-loan-term-3').value);
    const loanTermMonths3 = loanTermYears3 * 12;

    const monthlyPayment1 = ((loanAmount1) * interestRate1) / (1 - Math.pow(1 + interestRate1, -loanTermMonths1));
    const totalPayments1 = monthlyPayment1 * loanTermMonths1;

    const monthlyPayment2 = ((loanAmount))
}