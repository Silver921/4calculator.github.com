function convertLength() {
    const input = parseFloat(document.getElementById('length-input').value);
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;
    const result = convertBetweenLengthUnits(input, fromUnit, toUnit);
    document.getElementById('length-result').textContent = `${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertBetweenLengthUnits(value, fromUnit, toUnit) {
    const conversionRates = {
        m: 1,
        in: 0.0254,
        ft: 0.3048,
        mi: 1609.34,
        cm: 0.01,
        mm: 0.001,
        km: 1000,
        yd: 0.9144
    };

    const fromFactor = conversionRates[fromUnit];
    const toFactor = conversionRates[toUnit];
    return (value * fromFactor) / toFactor;
}

function convertMass() {
    const input = parseFloat(document.getElementById('mass-input').value);
    const fromUnit = document.getElementById('mass-from').value;
    const toUnit = document.getElementById('mass-to').value;
    const result = convertBetweenMassUnits(input, fromUnit, toUnit);
    document.getElementById('mass-result').textContent = `${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertBetweenMassUnits(value, fromUnit, toUnit) {
    const conversionRates = {
        kg: 1,
        lb: 0.453592,
        oz: 0.028349,
        g: 0.001,
        t: 1000
    };

    const fromFactor = conversionRates[fromUnit];
    const toFactor = conversionRates[toUnit];
    return (value * fromFactor) / toFactor;
}

function convertVolume() {
    const input = parseFloat(document.getElementById('volume-input').value);
    const fromUnit = document.getElementById('volume-from').value;
    const toUnit = document.getElementById('volume-to').value;
    const result = convertBetweenVolumeUnits(input, fromUnit, toUnit);
    document.getElementById('volume-result').textContent = `${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertBetweenVolumeUnits(value, fromUnit, toUnit) {
    const conversionRates = {
        l: 1,
        gal: 3.785411784,
        m3: 1000,
        ft3: 28.316846592,
        oz: 0.029574
    };

    const fromFactor = conversionRates[fromUnit];
    const toFactor = conversionRates[toUnit];
    return (value * fromFactor) / toFactor;
}

function convertTemperature() {
    const input = parseFloat(document.getElementById('temperature-input').value);
    const fromUnit = document.getElementById('temperature-from').value;
    const toUnit = document.getElementById('temperature-to').value;
    const result = convertBetweenTemperatureUnits(input, fromUnit, toUnit);
    document.getElementById('temperature-result').textContent = `${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertBetweenTemperatureUnits(value, fromUnit, toUnit) {
    let result;
    if (fromUnit === 'C' && toUnit === 'F') {
        result = (value * 9 / 5) + 32;
    } else if (fromUnit === 'C' && toUnit === 'K') {
        result = value + 273.15;
    } else if (fromUnit === 'F' && toUnit === 'C') {
        result = (value - 32) * 5 / 9;
    } else if (fromUnit === 'F' && toUnit === 'K') {

        result = (value - 32) * 5 / 9 + 273.15;
    } else if (fromUnit === 'K' && toUnit === 'C') {
        result = value - 273.15;
    } else if (fromUnit === 'K' && toUnit === 'F') {
        result = (value - 273.15) * 9 / 5 + 32;
    } else {
        result = value;
    }
    return result;
}

function convertCurrency() {
    const input = parseFloat(document.getElementById('currency-input').value);
    const fromUnit = document.getElementById('currency-from').value;
    const toUnit = document.getElementById('currency-to').value;
    const result = convertBetweenCurrencyUnits(input, fromUnit, toUnit);
    document.getElementById('currency-result').textContent = `${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertBetweenCurrencyUnits(value, fromUnit, toUnit) {
    const conversionRates = {
        USD: 1,
        EUR: 0.91,
        GBP: 0.80,
        JPY: 134.91,
        RUB: 74.57
    };

    const fromFactor = conversionRates[fromUnit];
    const toFactor = conversionRates[toUnit];
    return (value * fromFactor) / toFactor;
}

function convertSpeed() {
    const input = parseFloat(document.getElementById('speed-input').value);
    const fromUnit = document.getElementById('speed-from').value;
    const toUnit = document.getElementById('speed-to').value;
    const result = convertBetweenSpeedUnits(input, fromUnit, toUnit);
    document.getElementById('speed-result').textContent = `${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertBetweenSpeedUnits(value, fromUnit, toUnit) {
    const conversionRates = {
        kmh: 1,
        mph: 0.621371,
        knot: 0.539957,
        mps: 3.6
    };

    const fromFactor = conversionRates[fromUnit];
    const toFactor = conversionRates[toUnit];
    return (value * fromFactor) / toFactor;
}
