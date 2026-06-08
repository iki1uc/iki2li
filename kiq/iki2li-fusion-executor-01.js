// iki2li Fusion Executor 01 – nutzt Fusion + Validator vor der Maßnahme

import { FUSION_OPERATOR } from "./fusion-operator-01.js";
import { FUSION_VALIDATOR } from "./fusion-validator-01.js";

export const IKI2LI_FUSION_EXECUTOR = {
    id: "IKI2LI-FUSION-EXECUTOR-01",
    version: "1.0",
    created: "2026-06-08",
    purpose: "Ausführung nur bei gültiger Fusion von Scan + Toolator",

    run(scan, toolator, measureFn) {
        // 1) Fusion
        const fusion = FUSION_OPERATOR.fuse(scan, toolator);

        // 2) Validierung
        const validation = FUSION_VALIDATOR.validate(scan, toolator);

        if (!fusion.complete || !validation.valid) {
            return {
                executed: false,
                reason: "Fusion ungültig oder unvollständig",
                fusion,
                validation,
                timestamp: Date.now()
            };
        }

        // 3) Maßnahme ausführen
        const result = measureFn(fusion.fused);

        return {
            executed: true,
            fusion,
            validation,
            result,
            timestamp: Date.now()
        };
    }
};
