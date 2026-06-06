// RESPO-VIEW – bildet Wissen ab (iki2li)
export function renderRespo(result, containerId = "respo") {
    const el = document.getElementById(containerId);
    if (!el) return;

    if (!result.ok) {
        el.innerHTML = `<p>RESPO: Fehler – ${result.reason}</p>`;
        return;
    }

    const s = result.summary;
    const f = result.flags;

    el.innerHTML = `
        <h2>RESPO / iki2li – Systemstatus</h2>
        <p><b>State:</b> ${s.state}</p>
        <p><b>Phase:</b> ${s.phase}</p>
        <p><b>Engine:</b> ${s.engine} (${s.engine_status})</p>
        <p><b>Ready:</b> ${f.isReady}</p>
        <p><b>Active:</b> ${f.isActive}</p>
        <p><b>Idle:</b> ${f.isIdle}</p>
    `;
}
