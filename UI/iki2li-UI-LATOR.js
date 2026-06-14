// ===============================
// iki2li UI-LATOR ENGINE (RAW)
// ===============================

// ROOT
const UI2_ROOT = document.getElementById("iki2li-root");

// INPUT-SLOTS
const UI2_SCAN = document.getElementById("iki2li-scan-slot");
const UI2_TOOL = document.getElementById("iki2li-tool-slot");

// OUTPUT-SLOT
const UI2_RAW = document.getElementById("iki2li-raw-slot");

// MOLEKÜL: UI-LATOR-FRAME
function UI2_FRAME(source, payload) {
    return {
        source: source,      // SCAN | TOOLATOR | RAW
        payload: payload,    // Daten
        time: Date.now()     // Zeitstempel
    };
}

// SCAN-ÜBERNAHME
export function UI2_FROM_SCAN(data) {
    const frame = UI2_FRAME("SCAN", data);
    UI2_SCAN.innerText = JSON.stringify(frame, null, 2);
    UI2_RAW_RENDER(frame);
}

// TOOLATOR-ÜBERNAHME
export function UI2_FROM_TOOL(data) {
    const frame = UI2_FRAME("TOOLATOR", data);
    UI2_TOOL.innerText = JSON.stringify(frame, null, 2);
    UI2_RAW_RENDER(frame);
}

// RAW-RENDER
function UI2_RAW_RENDER(frame) {
    UI2_RAW.innerText = JSON.stringify(frame, null, 2);
}

// ROOT-INIT
(function UI2_INIT() {
    UI2_ROOT.innerText = "iki2li UI-LATOR bereit";
})();

