import { Text } from "react-native";

export default function SectionHeader({ title }) {
  return (
    <Text
      style={{
        marginTop: 28,
        marginBottom: 14,
        fontSize: 18,
        fontWeight: "600",
        color: "#7dd3fc",
        letterSpacing: 0.2,
      }}
    >
      {title}
    </Text>
  );
}
