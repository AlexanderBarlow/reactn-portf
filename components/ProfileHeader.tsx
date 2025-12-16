import { View, Text, Image } from "react-native";
import { BlurView } from "expo-blur";

export default function ProfileHeader() {
  return (
    <View
      style={{
        borderRadius: 26,
        overflow: "hidden",
        borderWidth: 0.6,
        borderColor: "rgba(255,255,255,0.35)",
        backgroundColor: "rgba(255,255,255,0.04)",
        shadowColor: "#000",
        shadowOpacity: 0.28,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 14 },
      }}
    >
      <BlurView
        intensity={28}
        tint="light"
        style={{
          padding: 24,
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
      >
        <Image
          source={require("../assets/images/icon.png")}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 16,
            borderWidth: 1.5,
            borderColor: "rgba(255,255,255,0.45)",
          }}
        />

        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            color: "#0b1220",
          }}
        >
          Alexander Barlow
        </Text>

        <Text
          style={{
            marginTop: 6,
            textAlign: "center",
            color: "rgba(15,23,42,0.7)",
            lineHeight: 20,
          }}
        >
          Full-stack developer focused on modern, mobile-first experiences,
          clean architecture, and thoughtful UI.
        </Text>
      </BlurView>
    </View>
  );
}
