// king-handler.js – KING Respo Handler

import { FUSION_EXECUTOR } from "./fusion-executor.js";
import { FUSION_MONITOR } from "./fusion-monitor.js";

export const KING_HANDLER = {
    id: "KING-HANDLER",
    version: "1.0",
    created: "2026-06-08",

    run(scan, tool, measureFn) {
        const result = FUSION_EXECUTOR.run(scan, tool, measureFn);

        // Monitor protokolliert
        FUSION_MONITOR.log(result);

        // KING‑Respo erzeugen
        return {
            king: true,
            executed: result.executed,
            issues: result.validation.issues,
            stats: result.validation.stats,
            fusion: result.fusion,
            output: result.result,
            timestamp: result.timestamp
        };
    }
};

