import { View, Text } from "react-native";
import { Colors } from "@/constants/theme";

export default function ExperienceItem({ role, company, period, summary }) {
  return (
    <View style={{ marginBottom: 28 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: Colors.dark.textPrimary,
        }}
      >
        {role}
      </Text>

      <Text
        style={{
          marginTop: 4,
          fontSize: 14,
          color: Colors.dark.textMuted,
        }}
      >
        {company} • {period}
      </Text>

      <Text
        style={{
          marginTop: 10,
          fontSize: 15,
          lineHeight: 22,
          color: Colors.dark.textSecondary,
        }}
      >
        {summary}
      </Text>
    </View>
  );
}
