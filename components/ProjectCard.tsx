import { View, Text } from "react-native";
import { BlurView } from "expo-blur";
import { Colors } from "@/constants/theme";

export default function ProjectCard({ title, description, stack }) {
  return (
    <View
      style={{
        borderRadius: 24,
        overflow: "hidden",
        marginBottom: 18,
        borderWidth: 0.6,
        borderColor: "rgba(255,255,255,0.3)",
        backgroundColor: "rgba(255,255,255,0.035)",

        // Neo-Depth shadow (matches ProfileCard)
        shadowColor: "#000",
        shadowOpacity: 0.32,
        shadowRadius: 24,
        shadowOffset: { width: 0, height: 16 },
      }}
    >
      <BlurView
        intensity={22} // clearer glass
        tint="light"
        style={{
          padding: 22,
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
      >
        {/* Inner highlight */}
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

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
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
            color: Colors.dark.textSecondary,
          }}
        >
          {description}
        </Text>

        <Text
          style={{
            marginTop: 12,
            fontSize: 13,
            fontWeight: "500",
            color: Colors.dark.accent,
          }}
        >
          {stack}
        </Text>
      </BlurView>
    </View>
  );
}
