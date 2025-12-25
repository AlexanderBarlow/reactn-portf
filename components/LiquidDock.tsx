import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Pressable, View } from "react-native";

export default function LiquidDock({ onJump, activeSection }) {
  const tabs = [
    { key: "top", icon: "person-outline" },
    { key: "projects", icon: "briefcase-outline" },
    { key: "experience", icon: "layers-outline" },
    { key: "contact", icon: "mail-outline" },
  ];

  // Optical vertical nudges per icon (Ionicons are NOT visually centered)
  const NUDGE_Y = {
    top: -1,
    projects: -1,
    experience: -2, // layers icon is top-heavy
    contact: -1,
  };

  const WIDTH = 320;
  const HEIGHT = 58;
  const RADIUS = 30;

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 28,
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: RADIUS,
          shadowColor: "#000",
          shadowOpacity: 0.28,
          shadowRadius: 22,
          shadowOffset: { width: 0, height: 14 },
        }}
      >
        <View
          style={{
            width: WIDTH,
            height: HEIGHT,
            borderRadius: RADIUS,
            overflow: "hidden",
            borderWidth: 0.8,
            borderColor: "rgba(255,255,255,0.22)",
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        >
          <BlurView intensity={24} tint="dark" style={{ flex: 1 }}>
            {/* Dock top edge highlight */}
            <View
              pointerEvents="none"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                backgroundColor: "rgba(255,255,255,0.18)",
              }}
            />

            {/* Icon row */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              {tabs.map((tab) => {
                const active = activeSection === tab.key;

                return (
                  <Pressable
                    key={tab.key}
                    onPress={() => onJump(tab.key)}
                    style={{
                      flex: 1,
                      height: 48,
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {/* Active glass pill */}
                    {active && (
                      <View
                        pointerEvents="none"
                        style={{
                          position: "absolute",
                          width: 52,
                          height: 40,
                          borderRadius: 999,
                          overflow: "hidden",
                          borderWidth: 0.8,
                          borderColor: "rgba(255,255,255,0.20)",
                          backgroundColor: "rgba(255,255,255,0.06)",
                        }}
                      >
                        <BlurView
                          intensity={32}
                          tint="light"
                          style={{
                            flex: 1,
                            backgroundColor: "rgba(255,255,255,0.10)",
                          }}
                        />
                      </View>
                    )}

                    <Ionicons
                      name={tab.icon}
                      size={24}
                      color={
                        active
                          ? "rgba(255,255,255,0.95)"
                          : "rgba(255,255,255,0.70)"
                      }
                      style={{
                        marginTop: NUDGE_Y[tab.key] ?? -1,
                      }}
                    />

                    {/* Active indicator */}
                    {active && (
                      <View
                        pointerEvents="none"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          alignItems: "center",
                          justifyContent: "flex-end",
                          paddingBottom: 6,
                        }}
                      >
                        <View
                          style={{
                            width: 18,
                            height: 3,
                            borderRadius: 999,
                            backgroundColor: "rgba(255,255,255,0.70)",
                          }}
                        />
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </View>
          </BlurView>
        </View>
      </View>
    </View>
  );
}
