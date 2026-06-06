// SCANNER EVO – extended evolving version
// Reads core system layers, extracts key values and returns a deep EVO object

export async function scanEVO() {
    const result = {
        evo: true,
        timestamp: Date.now(),
        layers: {},
        extract: {},
        merge: {},
        status: "init"
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

        // EXTRACTION LAYER – pulls key values
        result.extract = {
            state_value: state.state || null,
            phase_value: phase.phase || null,
            engine_mode: engine.mode || null,
            engine_active: engine.active || false,
            engine_version: engine.version || null
        };

        // EVO MERGE – deeper merge
        result.merge = {
            state_phase: `${state.state || "?"}-${phase.phase || "?"}`,
            engine_status: engine.active ? "running" : "idle",
            combined_hash: btoa(
                JSON.stringify({
                    s: state.state,
                    p: phase.phase,
                    e: engine.mode
                })
            )
        };

        result.status = "ok";
    } catch (err) {
        result.status = "error";
        result.error = err.toString();
    }

    return result;
}
