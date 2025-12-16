import { View, Text } from "react-native";
import { BlurView } from "expo-blur";

export default function ProjectCard({ title }) {
  return (
    <View
      style={{
        borderRadius: 18,
        overflow: "hidden", // CRITICAL: clips blur correctly
        marginBottom: 14,
        borderWidth: 0.6,
        borderColor: "rgba(255,255,255,0.3)",
        backgroundColor: "rgba(255,255,255,0.04)",
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
      }}
    >
      <BlurView
        intensity={26} // clearer, liquid glass
        tint="light"
        style={{
          padding: 18,
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
      >
        {/* inner highlight */}
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

        <Text
          style={{
            color: "#0b1220",
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            marginTop: 4,
            color: "rgba(15,23,42,0.6)",
            fontSize: 13,
          }}
        >
          Tap to view details
        </Text>
      </BlurView>
    </View>
  );
}
