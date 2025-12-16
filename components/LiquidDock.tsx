import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import { Pressable, View } from "react-native";

export default function LiquidDock() {



  const pathname = usePathname();
  const router = useRouter();

  console.log("pathname:", pathname);

const tabs = [
  { route: "/", icon: "person-outline", active: "person" },
  { route: "/resume", icon: "briefcase-outline", active: "briefcase" },
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
      {/* Outer glass shell */}
      <View
        style={{
          borderRadius: 30,
          borderWidth: 0.6,
          borderColor: "rgba(255,255,255,0.4)",
          shadowColor: "#000",
          shadowOpacity: 0.28,
          shadowRadius: 22,
          shadowOffset: { width: 0, height: 14 },
        }}
      >
        <BlurView
          intensity={30} // clearer, more liquid
          tint="light"
          style={{
            width: 300,
            height: 58,
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "rgba(255,255,255,0.07)",
            overflow: "hidden",
          }}
        >
          {/* Inner highlight (specular edge) */}
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
            const active = pathname === tab.route;

            return (
              <Pressable
                key={tab.route}
                onPress={() => router.push(tab.route)}
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
                  color={active ? "#0b1220" : "rgba(15,23,42,0.6)"}
                />

                {active && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 5,
                      width: 14,
                      height: 2,
                      borderRadius: 1,
                      backgroundColor: "rgba(15,23,42,0.55)",
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
