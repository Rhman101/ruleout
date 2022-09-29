export const randomNumber = (from: number, to: number): number => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

export const HCF = (aInput: number, bInput: number): number => {
    let a = Math.abs(aInput);
    let b = Math.abs(bInput);
    let x;
    let y;
    if (a < b) {
        x = a;
        y = b;
    } else {
        x = b;
        y = a;
    }
    for (let i = x; i > 0; i--) {
        if (y % i === 0 && x % i === 0 && y / i === Math.floor(y / i)) {
            return i;
        }
    }
    return 1;
}

export const HCF_three = (a: number, b: number, c: number) => {
    // Build an array of int factors of each number, from largest to smallest.
    const getwholeNumberFactors = (x: number) => {
        const num = Math.abs(x);
        const factors = [];
        for (let i = num; i > 0; i--) {
            if (num % i === 0 && i !== 1) {
                factors.push(i);
            }
        }
        return factors;
    }

    const a_factors = getwholeNumberFactors(a);
    const b_factors = getwholeNumberFactors(b);
    const c_factors = getwholeNumberFactors(c);

    for (let i = 0; i < a_factors.length; i++) {
        if (b_factors.findIndex((elem) => elem === a_factors[i]) !== -1 && c_factors.findIndex((elem) => elem === a_factors[i]) !== -1) {
            return a_factors[i];
        }
    }

    return 1;
}

export const reduceFraction = (inputNumerator: number, inputDenominator: number) => {
    let num = 0;
    let den = 0;
    num = inputNumerator;
    den = inputDenominator;
    let _hcf = HCF(num, den);
    while (_hcf > 1) {
        num /= _hcf;
        den /= _hcf;
        _hcf = HCF(num, den);
    }
    return {
        num,
        den
    }

}

export const toMixedNum = (inputNum: number, inputDen: number, reducedFrac: boolean = false) => {
    let num = 0;
    let den = 0;
    num = inputNum;
    den = inputDen;
    let int = 0;
    while (num > den) {
        int++;
        num -= den;
    }
    if (reducedFrac) {
        let reduced = reduceFraction(num, den);
        num = reduced.num;
        den = reduced.den;
    }
    return { int, num, den }

}