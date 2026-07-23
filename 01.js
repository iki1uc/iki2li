import { OdamirtCore } from "./CONFIG81/ODAMIRT-CORE.json";

export function runOdamirt() {
    return {
        languages: OdamirtCore.odamirt.languages,
        story: OdamirtCore.odamirt.story,
        timelines: OdamirtCore.odamirt.timelines,
        roles: OdamirtCore.odamirt.roles,
        matrix: OdamirtCore.odamirt.matrix3x3x3
    };
}
