import { View, Text } from "react-native";
import { BlurView } from "expo-blur";

export default function ExperienceCard({ role, company, period, summary }) {
  return (
    <View
      style={{
        borderRadius: 22,
        overflow: "hidden",
        marginBottom: 18,
        borderWidth: 0.6,
        borderColor: "rgba(255,255,255,0.3)",
        backgroundColor: "rgba(255,255,255,0.04)",
      }}
    >
      <BlurView
        intensity={26}
        tint="light"
        style={{
          padding: 18,
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#0b1220",
          }}
        >
          {role}
        </Text>

        <Text
          style={{
            marginTop: 2,
            fontSize: 13,
            color: "rgba(15,23,42,0.6)",
          }}
        >
          {company} • {period}
        </Text>

        <Text
          style={{
            marginTop: 8,
            lineHeight: 20,
            color: "rgba(15,23,42,0.7)",
          }}
        >
          {summary}
        </Text>
      </BlurView>
    </View>
  );
}
