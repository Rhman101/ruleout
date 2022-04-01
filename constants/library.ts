export const randomNumber = (from: number, to: number): number => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

export const HCF = (a: number, b: number): number => {
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