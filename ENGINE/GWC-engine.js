// GWC-ENGINE
// Geo-Width-Control für MINI/NORMAL/MAXI

const GWC = {
  id: "GWC-ENGINE",
  active: true,

  scale(mode) {
    const map = {
      mini: 0.8,
      normal: 1.0,
      maxi: 1.2
    };
    return map[mode] || 1.0;
  }
};

