// triangle-prep.js – liefert 2 vorbereitete Winkel für index.html

export function trianglePrep() {
    return {
        w1: window.KIQ?.WINKEL?.A || 0,   // erster Winkel
        w2: window.KIQ?.WINKEL?.B || 0,   // zweiter Winkel
        valid: (window.KIQ?.WINKEL?.A + window.KIQ?.WINKEL?.B) < 180
    };
}

