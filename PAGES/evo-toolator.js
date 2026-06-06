// EVO Toolator – legal activation code
// Builds the 1→3→6→12→48 chain from internal JSON files only

async function evoToolator() {
    const out = {
        activated: true,
        timestamp: Date.now(),
        evo: {}
    };

    // 1 → STATE
    const state = await fetch("./STATE81/IKI-state81.json").then(r => r.json());
    out.evo.state = state;

    // 3 → PROFILES (mini, normal, maxi)
    const profiles = await fetch("./PROFILES81/IKI-profiles81.json").then(r => r.json());
    out.evo.profiles = profiles;

    // 6 → STATE + PHASE
    const phase = await fetch("./PHASE81/IKI-phase81.json").then(r => r.json());
    out.evo.phase = phase;

    // 12 → ENGINE
    const engine = await fetch("./ENGINE/IKI-engine81-map-EVO2-GENC-V1.json").then(r => r.json());
    out.evo.engine = engine;

    // 48 → EVO MERGE
    out.evo.merge48 = {
        state,
        phase,
        engine,
        profiles
    };

    console.log(JSON.stringify(out, null, 4));
}

evoToolator();

