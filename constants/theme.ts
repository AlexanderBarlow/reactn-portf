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
    // Backgrounds
    background: backgroundDark,
    glass: "rgba(255,255,255,0.08)",

    // Text (CRITICAL for readability)
    textPrimary: ink, // strong ink on glass
    textSecondary: "rgba(15,23,42,0.75)", // readable body text
    textMuted: "rgba(15,23,42,0.55)", // helper text

    // UI
    accent,
    icon: "rgba(15,23,42,0.65)",

    tabIconDefault: "rgba(15,23,42,0.45)",
    tabIconSelected: ink,
  },
};
