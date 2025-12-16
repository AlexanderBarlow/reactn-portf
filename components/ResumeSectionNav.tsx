import { Pressable, Text, View } from "react-native";
import { BlurView } from "expo-blur";

export default function ResumeSectionNav({ sections, onJump }) {
  return (
    <View style={{ marginBottom: 18 }}>
      <View
        style={{
          width: "100%", // full-width
          borderRadius: 18,
          overflow: "hidden",
          borderWidth: 0.6,
          borderColor: "rgba(255,255,255,0.35)",
          backgroundColor: "rgba(255,255,255,0.04)",
        }}
      >
        <BlurView
          intensity={24}
          tint="light"
          style={{
            padding: 6, // tighter, more iOS-like
            backgroundColor: "rgba(255,255,255,0.06)",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {sections.map((section, index) => (
            <Pressable
              key={section.key}
              onPress={() => onJump(section.key)}
              style={{
                flex: 1, // equal width segments
                marginHorizontal: index === 0 ? 0 : 6,
                paddingVertical: 8,
                borderRadius: 14,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(125,211,252,0.18)",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  color: "#0b1220",
                }}
                numberOfLines={1}
              >
                {section.label}
              </Text>
            </Pressable>
          ))}
        </BlurView>
      </View>
    </View>
  );
}
