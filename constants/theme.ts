import { Platform } from "react-native";

const accent = "#7dd3fc";
const backgroundDark = "#020617";
const ink = "#0b1220";

export const Colors = {
  light: {
    // Backgrounds
    background: "#f8fafc",
    glass: "rgba(255,255,255,0.6)",

    // Text
    textPrimary: "#020617",
    textSecondary: "rgba(2,6,23,0.75)",
    textMuted: "rgba(2,6,23,0.55)",

    // UI
    accent,
    icon: "rgba(2,6,23,0.65)",

    tabIconDefault: "rgba(2,6,23,0.45)",
    tabIconSelected: ink,
  },

  dark: {
    // Background (this matters most)
    background: "#020617",

    // Glass surfaces
    glass: "rgba(255,255,255,0.06)",

    // Text
    textPrimary: "#f8fafc", // near-white
    textSecondary: "#cbd5e1", // readable gray
    textMuted: "#94a3b8", // helper text
    accent: "#38bdf8", // vibrant blue

    // UI
    icon: "rgba(15,23,42,0.7)",
    tabIconDefault: "rgba(15,23,42,0.45)",
    tabIconSelected: "#0b1220",
  },
};
