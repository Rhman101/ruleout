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