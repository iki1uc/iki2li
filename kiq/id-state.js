// id-state.js – liefert ID-Daten für index.html

export function idState() {
    return {
        id: window.KIQ?.ID?.value || "UNBEKANNT",
        axis: window.KIQ?.ID?.axis || 0,
        instance: window.KIQ?.ID?.instance || 0,
        base: window.KIQ?.ID?.base || 0
    };
}
