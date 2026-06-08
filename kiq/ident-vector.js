// ident-vector.js – verbindet ID-Daten + Winkel-Daten zu einem Ident-Vektor

import { idState } from "./id-state.js";
import { trianglePrep } from "./triangle-prep.js";

export function identVector() {
    const id = idState();
    const tri = trianglePrep();

    const IDENT = {
        id: id.id,
        base: id.base,
        axis: id.axis,
        instance: id.instance,
        w1: tri.w1,
        w2: tri.w2,
        sum: tri.sum,
        valid: tri.valid,
        vector: [id.base, tri.sum]   // DER IDENT-Vektor
    };

    if (!window.KIQ) window.KIQ = {};
    window.KIQ.IDENT = IDENT;

    return IDENT;
}

