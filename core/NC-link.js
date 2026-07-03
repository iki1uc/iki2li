export const NC = {
  anchor: "Q-ANCHOR",   // stabiler Fixpunkt

  link(pulse) {
    return {
      anchor: this.anchor,
      pulse
    };
  }
};

