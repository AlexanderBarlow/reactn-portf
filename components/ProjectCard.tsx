import { View, Text } from "react-native";
import { BlurView } from "expo-blur";
import { Colors } from "@/constants/theme";

const PALETTE = [
  "#61DAFB", // cyan
  "#A78BFA", // violet
  "#34D399", // green
  "#F472B6", // pink
  "#FBBF24", // amber
  "#60A5FA", // blue
  "#FB7185", // rose
  "#22C55E", // emerald
  "#E879F9", // fuchsia
  "#38BDF8", // sky
];

function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
}

function hexToRgba(hex, alpha) {
  const clean = String(hex).replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);

  return `rgba(${r},${g},${b},${alpha})`;
}

function parseStack(stack) {
  if (!stack) return [];
  if (Array.isArray(stack)) {
    return stack
      .map(String)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  // ✅ supports: "A • B • C", "A, B, C", "A | B | C", "A · B · C"
  return String(stack)
    .split(/•|·|,|\|/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function ProjectCard({ title, description, stack }) {
  const chips = parseStack(stack);

  return (
    <View
      style={{
        borderRadius: 24,
        overflow: "hidden",
        marginBottom: 18,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.14)",
        backgroundColor: "rgba(255,255,255,0.02)",
        shadowColor: "#000",
        shadowOpacity: 0.26,
        shadowRadius: 22,
        shadowOffset: { width: 0, height: 14 },
      }}
    >
      <BlurView
        intensity={18}
        tint="dark"
        style={{
          padding: 20,
          backgroundColor: "rgba(255,255,255,0.03)",
        }}
      >
        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.12)",
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            letterSpacing: -0.3,
            color: Colors.dark.textPrimary,
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            marginTop: 8,
            fontSize: 14,
            lineHeight: 20,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          {description}
        </Text>

        {!!chips.length && (
          <View style={{ marginTop: 14 }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "800",
                letterSpacing: 1.2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.50)",
                marginBottom: 10,
              }}
            >
              Tech Stack
            </Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {chips.map((label) => {
                const base =
                  PALETTE[hashIndex(label.toLowerCase(), PALETTE.length)];

                return (
                  <View
                    key={label}
                    style={{
                      paddingVertical: 7,
                      paddingHorizontal: 12,
                      borderRadius: 999,
                      backgroundColor: hexToRgba(base, 0.14),
                      borderWidth: 1,
                      borderColor: hexToRgba(base, 0.34),
                      marginRight: 10,
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "900",
                        letterSpacing: 0.2,
                        color: hexToRgba(base, 0.95),
                      }}
                    >
                      {label}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </BlurView>
    </View>
  );
}
