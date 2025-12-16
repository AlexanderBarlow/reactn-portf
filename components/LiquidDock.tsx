import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Pressable, View } from "react-native";

export default function LiquidDock({ onJump, activeSection }) {
  const tabs = [
    { key: "top", icon: "person-outline", active: "person" },
    { key: "projects", icon: "briefcase-outline", active: "briefcase" },
    { key: "experience", icon: "layers-outline", active: "layers" },
    { key: "contact", icon: "mail-outline", active: "mail" },
  ];

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
      {/* Outer shell */}
      <View
        style={{
          borderRadius: 30,
          borderWidth: 0.6,
          borderColor: "rgba(255,255,255,0.4)",
          shadowColor: "#000",
          shadowOpacity: 0.32,
          shadowRadius: 26,
          shadowOffset: { width: 0, height: 18 },
        }}
      >
        <BlurView
          intensity={22}
          tint="light"
          style={{
            width: 320,
            height: 58,
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Inner specular highlight */}
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.45)",
            }}
          />

          {tabs.map((tab) => {
            const active = activeSection === tab.key;

            return (
              <Pressable
                key={tab.key}
                onPress={() => onJump(tab.key)}
                style={{
                  width: 56,
                  height: 48,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name={active ? tab.active : tab.icon}
                  size={25}
                  color={active ? "#0b1220" : "rgba(15,23,42,0.55)"}
                />

                {/* Active indicator */}
                {active && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 6,
                      width: 16,
                      height: 2,
                      borderRadius: 1,
                      backgroundColor: "rgba(15,23,42,0.6)",
                    }}
                  />
                )}
              </Pressable>
            );
          })}
        </BlurView>
      </View>
    </View>
  );
}
