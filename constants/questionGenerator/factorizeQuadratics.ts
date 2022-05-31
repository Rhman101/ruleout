import { QuestionGenerator } from './questionGeneratorInterface';
import { randomNumber, HCF, HCF_three } from '../library';

interface arg {
    leadingCoefficient: boolean
}

const FactorizeQuadratics = ({ leadingCoefficient }: arg): QuestionGenerator => {
    // a(bx+c)(dx+e)
    // abdx^2 + a(be+cd)x+ace
    // c and e can be negatives

    // answer format: 
    // Ax^2+Bx+C
    let a = 1, b = 1, c = 1, d = 1, e = 1, f = 1;

    let a_array = [1, 2, 3, 4, 5, 6];
    let b_array = leadingCoefficient ? [1, 2, 3, 4, 5, 6] : [1];
    let c_array = [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6];
    let d_array = leadingCoefficient ? [1, 2, 3, 4, 5, 6] : [1];
    let e_array = [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6];

    let A = 1;
    let B = 1;
    let C = 1;

    let A_a = 1;
    let B_a = 1;
    let C_a = 1;

    /* Development code start*/

    // let _devControl = false;

    // while (!_devControl) {
    /* Development code end */

    const gen_a = () => a = a_array[randomNumber(0, a_array.length - 1)];
    const gen_b = () => b = b_array[randomNumber(0, b_array.length - 1)];
    const gen_c = () => c = c_array[randomNumber(0, c_array.length - 1)];
    const gen_d = () => d = d_array[randomNumber(0, d_array.length - 1)];
    const gen_e = () => e = e_array[randomNumber(0, e_array.length - 1)];

    gen_a();
    gen_b();
    gen_c();
    gen_d();
    gen_e();

    A = b * d;
    B = b * e + c * d;
    C = c * e;

    // Check HCF across all 4 variables and factorize it out. 

    while (HCF_three(A, B, C) > 1) {
        if (b > 1) {
            b--;
        } else if (d > 1) {
            d--;
        } else if (Math.abs(e) > 1) {
            e > 0 ? e-- : e++;
        } else {
            c > 0 ? e-- : c++;
        }

        A = b * d;
        B = b * e + c * d;
        C = c * e;
    }

    let _new_a = 1;
    let _tempHCF = 1;
  
    if (HCF(b, c) > 1) {
        _tempHCF = HCF(b, c);
        _new_a = _new_a * _tempHCF;
        b = b / _tempHCF;
        c = c / _tempHCF;
    }
    if (HCF(d, e) > 1) {
        _tempHCF = HCF(d, e);
        _new_a = _new_a * _tempHCF;
        d = d / _tempHCF;
        e = e / _tempHCF;
    }
    if (_new_a > 1) {
        a = _new_a;

        A = b * d;
        B = b * e + c * d;
        C = c * e;
    }

    /* Randomly make a positive or negative.  */
    if (randomNumber(0, 1) === 0) {
        a = a * -1;
    }

    A_a = A * a;
    B_a = B * a;
    C_a = C * a;

    /* Development code start */
    // console.log({ A, B, C, A_a, B_a, C_a, HCF: HCF_three(A, B, C), a, b, c, d, e });
    // }
    /* Development code end */

    /* Make question and answer for when B is 0 and when B is not 0; */
    if (B === 0) {
        return {
            question: [{
                latex: false,
                text: `Factorize `
            }
                , {
                latex: true,
                text: `${A_a === 0 ? '' : A_a}x^2${C_a > 0 ? '+' : '-'}${Math.abs(C_a)}`
            }
            ],
            answer: [
                `${a === 1 ? '' : a}\\left(${b === 1 ? '' : b}x${c > 0 ? '+' : '-'}${Math.abs(c)}\\right)\\left(${d === 1 ? '' : d}x${e > 0 ? '+' : '-'}${Math.abs(e)}\\right)`,
                `${a === 1 ? '' : a}\\left(${d === 1 ? '' : d}x${e > 0 ? '+' : '-'}${Math.abs(e)}\\right)\\left(${b === 1 ? '' : b}x${c > 0 ? '+' : '-'}${Math.abs(c)}\\right)`
            ]
        }
    } else {
        return {
            question: [{
                latex: false,
                text: `Factorize `
            }
                , {
                latex: true,
                text: `${A_a === 1 ? '' : A_a}x^2${B_a > 0 ? '+' : '-'}${Math.abs(B_a)}x${C_a > 0 ? '+' : '-'}${Math.abs(C_a)}`
            }
            ],
            answer: [
                `${a === 1 ? '' : a}\\left(${b === 1 ? '' : b}x${c > 0 ? '+' : '-'}${Math.abs(c)}\\right)\\left(${d === 1 ? '' : d}x${e > 0 ? '+' : '-'}${Math.abs(e)}\\right)`,
                `${a === 1 ? '' : a}\\left(${d === 1 ? '' : d}x${e > 0 ? '+' : '-'}${Math.abs(e)}\\right)\\left(${b === 1 ? '' : b}x${c > 0 ? '+' : '-'}${Math.abs(c)}\\right)`
            ]
        }
    }
}

export default FactorizeQuadratics;