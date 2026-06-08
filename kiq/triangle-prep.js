// triangle-prep.js
export function trianglePrep() {
    const T = window.KIQ?.TRIANGLE || { A:0, B:0, valid:false };

    return {
        w1: T.A,
        w2: T.B,
        sum: T.A + T.B,
        valid: T.valid
    };
}
