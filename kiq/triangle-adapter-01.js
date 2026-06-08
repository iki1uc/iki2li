// Triangle Adapter 01 – verbindet OP, iki1uc und Scan/Toolator
// Bereitet Achsen und Pixel so auf, dass iki2li sie verrechnen kann

export const TRIANGLE_ADAPTER = {
    id: "TRIANGLE-ADAPTER-01",
    version: "1.0",
    created: "2026-06-08",
    purpose: "Adapter für Achsen-Pixel-Dreieck",

    adapt(op, iki1uc, scan) {
        const adapted = {
            meaning: op?.meaning || null,
            axes: iki1uc?.axes || [],
            pixels: scan?.pixels || [],
            metrics: scan?.metrics || {},
            structure: iki1uc?.structure || null
        };

        return {
            triangle: {
                A: adapted.meaning,
                B: adapted.axes,
                C: adapted.pixels
            },
            normalized: {
                axesCount: adapted.axes.length,
                pixelCount: adapted.pixels.length,
                ratio: adapted.axes.length && adapted.pixels.length
                    ? adapted.pixels.length / adapted.axes.length
                    : null
            },
            raw: adapted,
            timestamp: Date.now()
        }
    }
}

