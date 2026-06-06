// SCANNER EVO – extended evolving version

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
        const state = await fetch("./STATE81/IKI-state81.json").then(r => r.json());
        const phase = await fetch("./PHASE81/IKI-phase81.json").then(r => r.json());
        const engine = await fetch("./ENGINE/IKI-engine81-map-EVO2-GENC-V1.json").then(r => r.json());

        result.layers = { state, phase, engine };

        result.extract = {
            state_value: state.state || null,
            phase_value: phase.phase || null,
            engine_mode: engine.mode || null,
            engine_active: engine.active || false,
            engine_version: engine.version || null
        };

        result.merge = {
            state_phase: `${state.state || "?"}-${phase.phase || "?"}`,
            engine_status: engine.active ? "running" : "idle",
            combined_hash: btoa(JSON.stringify({
                s: state.state,
                p: phase.phase,
                e: engine.mode
            }))
        };

        result.status = "ok";
    } catch (err) {
        result.status = "error";
        result.error = err.toString();
    }

    return result;
}
