// borg-winkel-engine.js – BORG Winkel Engine (2× Winkel für Dreieck)

export const BORG_WINKEL_ENGINE = {
    id: "BORG-WINKEL-ENGINE",
    version: "1.0",
    created: "2026-06-08",

    toVector(p1, p2) {
        return {
            x: p2.x - p1.x,
            y: p2.y - p1.y
        };
    },

    angle(v1, v2) {
        const dot = v1.x * v2.x + v1.y * v2.y;
        const mag1 = Math.sqrt(v1.x*v1.x + v1.y*v1.y);
        const mag2 = Math.sqrt(v2.x*v2.x + v2.y*v2.y);

        const rad = Math.acos(dot / (mag1 * mag2));
        const deg = rad * (180 / Math.PI);

        return deg;
    },

    fromScan(scanData) {
        // Erwartet mindestens 3 Punkte
        const p1 = scanData.points[0];
        const p2 = scanData.points[1];
        const p3 = scanData.points[2];

        const v12 = this.toVector(p1, p2);
        const v23 = this.toVector(p2, p3);
        const v31 = this.toVector(p3, p1);

        // Zwei Winkel für Dreieck
        const wA = this.angle(v12, v23);
        const wB = this.angle(v23, v31);

        const valid = (wA + wB) < 180;

        // In globalen KIQ‑State schreiben (Domino/Signal/Beam‑kompatibel)
        if (!window.KIQ) window.KIQ = {};
        if (!window.KIQ.WINKEL) window.KIQ.WINKEL = {};

        window.KIQ.WINKEL.A = wA;
        window.KIQ.WINKEL.B = wB;
        window.KIQ.WINKEL.VALID = valid;

        return {
            A: wA,
            B: wB,
            valid
        };
    }
};

