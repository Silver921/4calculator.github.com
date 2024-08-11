function addToResult(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function calculate(operation) {
    const result = document.getElementById('result');

    if (operation === '=') {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = 'Error';
        }
    } else if (operation === 'sin') {
        result.value = Math.sin(parseFloat(result.value));
    } else if (operation === 'cos') {
        result.value = Math.cos(parseFloat(result.value));
    } else if (operation === 'tan') {
        result.value = Math.tan(parseFloat(result.value));
    } else if (operation === 'log') {
        result.value = Math.log10(parseFloat(result.value));
    } else if (operation === 'ln') {
        result.value = Math.log(parseFloat(result.value));
    } else if (operation === 'exp') {
        result.value = Math.exp(parseFloat(result.value));
    } else if (operation === 'factorial') {
        result.value = factorial(parseInt(result.value));
    } else if (operation === 'round') {
        result.value = Math.round(parseFloat(result.value));
    } else if (operation === 'trunc') {
        result.value = Math.trunc(parseFloat(result.value));
    } else if (operation === 'sqrt') {
        result.value = Math.sqrt(parseFloat(result.value));
    } else {
        result.value += operation;
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}