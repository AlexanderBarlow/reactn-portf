import { View, Text, Image } from "react-native";
import { BlurView } from "expo-blur";

export default function ProfileCard() {
  return (
    <View
      style={{
        borderRadius: 22,
        overflow: "hidden", // CRITICAL: fixes corner bleed
        borderWidth: 0.6,
        borderColor: "rgba(255,255,255,0.35)",
        backgroundColor: "rgba(255,255,255,0.04)",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 12 },
      }}
    >
      <BlurView
        intensity={28} // lower blur = liquid, not frosted
        tint="light"
        style={{
          padding: 24,
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
      >
        {/* subtle inner highlight */}
        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.4)",
          }}
        />

        <Image
          source={require("../assets/images/icon.png")}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 14,
            borderWidth: 1.5,
            borderColor: "rgba(255,255,255,0.45)",
          }}
        />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#0b1220",
          }}
        >
          Alexander Barlow
        </Text>

        <Text
          style={{
            textAlign: "center",
            color: "rgba(15,23,42,0.7)",
            marginTop: 6,
            lineHeight: 20,
          }}
        >
          Full-stack developer focused on modern, mobile-first experiences.
        </Text>
      </BlurView>
    </View>
  );
}
