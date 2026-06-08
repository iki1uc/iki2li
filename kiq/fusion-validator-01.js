// fusion-validator.js – Intensivprüfung für Scan + Toolator + Maßnahme

export const FUSION_VALIDATOR = {
    id: "FUSION-VALIDATOR",
    version: "1.0",
    created: "2026-06-08",

    validate(scan, tool, measureFn) {
        const issues = [];

        // 1) Existenzprüfung
        if (!scan) issues.push("Scan fehlt");
        if (!tool) issues.push("Toolator fehlt");
        if (!measureFn) issues.push("Maßnahme-Funktion fehlt");

        // 2) Pixelprüfung
        if (!scan?.pixels || scan.pixels.length === 0) {
            issues.push("Keine Scan-Pixel vorhanden");
        }

        // 3) Achsenprüfung
        if (!tool?.axes || tool.axes.length === 0) {
            issues.push("Keine Toolator-Achsen vorhanden");
        }

        // 4) Strukturprüfung
        if (!tool?.structure || Object.keys(tool.structure).length === 0) {
            issues.push("Toolator-Struktur fehlt");
        }

        // 5) Messwerteprüfung
        if (!scan?.metrics || Object.keys(scan.metrics).length === 0) {
            issues.push("Scan-Messwerte fehlen");
        }

        // 6) Verhältnisprüfung
        const pixelCount = scan?.pixels?.length || 0;
        const axisCount = tool?.axes?.length || 0;

        if (axisCount > 0 && pixelCount > 0) {
            const ratio = pixelCount / axisCount;

            if (ratio < 0.5) issues.push("Zu wenige Pixel pro Achse");
            if (ratio > 100) issues.push
