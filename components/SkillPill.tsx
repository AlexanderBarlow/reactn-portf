import { Text, View } from "react-native";

export default function SkillPill({ label }) {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 14,
        backgroundColor: "rgba(125,211,252,0.15)",
        marginRight: 10,
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontSize: 13,
          color: "#0b1220",
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
    </View>
  );
}
