import { Text, View } from "react-native";
import { Colors } from "@/constants/theme";

export default function SkillPill({ label }) {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        backgroundColor: "rgba(56,189,248,0.14)",
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: Colors.dark.textPrimary,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
