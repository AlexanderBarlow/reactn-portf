import { View, Text } from "react-native";
import { BlurView } from "expo-blur";

export default function ResumeSummary() {
  return (
    <View
      style={{
        borderRadius: 22,
        overflow: "hidden",
        borderWidth: 0.6,
        borderColor: "rgba(255,255,255,0.35)",
        backgroundColor: "rgba(255,255,255,0.04)",
      }}
    >
      <BlurView
        intensity={26}
        tint="light"
        style={{
          padding: 20,
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
      >
        <Text
          style={{
            color: "#0b1220",
            lineHeight: 20,
            fontSize: 15,
          }}
        >
          Full-stack developer with hands-on experience building modern,
          mobile-first applications using React, Next.js, Prisma, and Supabase.
          Strong focus on clean architecture, performance, and intuitive user
          experiences.
        </Text>
      </BlurView>
    </View>
  );
}
