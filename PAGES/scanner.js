// SCANNER EVO – minimal evolving version
// Reads core system layers and returns a combined EVO object

export async function scanEVO() {
    const result = {
        evo: true,
        timestamp: Date.now(),
        layers: {}
    };

    try {
        // STATE81
        const state = await fetch("../STATE81/IKI-state81.json").then(r => r.json());
        result.layers.state = state;

        // PHASE81
        const phase = await fetch("../PHASE81/IKI-phase81.json").then(r => r.json());
        result.layers.phase = phase;

        // ENGINE81 MAP
        const engine = await fetch("../ENGINE/IKI-engine81-map-EVO2-GENC-V1.json").then(r => r.json());
        result.layers.engine = engine;

        // EVO‑MERGE
        result.merge = {
            state_phase: {
                state: state.state || null,
                phase: phase.phase || null
            },
            engine_active: engine.active || false
        };

        result.status = "ok";
    } catch (err) {
        result.status = "error";
        result.error = err.toString();
    }

    return result;
}

