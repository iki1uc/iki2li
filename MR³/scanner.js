// MR³ SCANNER – minimal version
// Reads state and returns it for display

export function scan() {
    return fetch("../STATE81/IKI-state81.json")
        .then(r => r.json())
        .then(data => {
            return {
                scan: "ok",
                timestamp: Date.now(),
                state: data
            };
        })
        .catch(err => {
            return {
                scan: "error",
                timestamp: Date.now(),
                message: err.toString()
            };
        });
}

