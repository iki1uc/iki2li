// TOOLOMAT – nimmt EVO-Scan und baut ein Tool-Resultat
export function runToolomat(evoScan) {
    if (evoScan.status !== "ok") {
        return {
            ok: false,
            reason: evoScan.error || "scan failed"
        };
    }

    const { extract, merge } = evoScan;

    return {
        ok: true,
        summary: {
            state: extract.state_value,
            phase: extract.phase_value,
            engine: extract.engine_mode,
            engine_status: merge.engine_status
        },
        flags: {
            isReady:  extract.engine_active === true,
            isIdle:   merge.engine_status === "idle",
            isActive: merge.engine_status === "running"
        }
    };
}

