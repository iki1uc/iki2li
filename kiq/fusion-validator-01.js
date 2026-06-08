// Fusion Validator 01 – prüft Scan + Toolator intensiv

export const FUSION_VALIDATOR = {
    id: "FUSION-VALIDATOR-01",
    version: "1.0",
    created: "2026-06-08",
    purpose: "Intensivprüfung von Scan- und Toolator-Daten",

    validate(scan, toolator) {
        const issues = [];

        // 1) Basis-Vollständigkeit
        if (!scan || !toolator) {
            issues.push("Scan oder Toolator fehlt");
        }

        if (!scan?.pixels || scan.pixels.length === 0) {
            issues.push("Keine Scan-Pixel vorhanden");
        }

        if (!toolator?.axes || toolator.axes.length === 0) {
            issues.push("Keine Toolator-Achsen vorhanden");
        }

        // 2) Intensiv: Verhältnis Achsen ↔ Pixel
        const pixelCount = scan?.pixels?.length || 0;
        const axisCount = toolator?.axes?.length || 0;

        if (axisCount > 0 && pixelCount > 0) {
            const ratio = pixelCount / axisCount;
            if (ratio < 0.5) issues.push("Zu wenige Pixel pro Achse");
            if (ratio > 100) issues.push("Zu viele Pixel pro Achse (Überlast)");
        }

        // 3) Intensiv: Messwerte vorhanden?
        if (!scan?.metrics || Object.keys(scan.metrics).length === 0) {
            issues.push("Keine Scan-Messwerte (metrics) vorhanden");
        }

        // 4) Intensiv: Struktur vorhanden?
        if (!toolator?.structure || Object.keys(toolator.structure).length === 0) {
            issues.push("Keine Toolator-Struktur vorhanden");
        }

        const valid = issues.length === 0;

        return {
            valid,
            issues,
            summary: valid ? "Fusion OK" : "Fusion fehlerhaft",
            stats: {
                pixelCount,
                axisCount
            },
            timestamp: Date.now()
        };
    }
};

