import { View, Text, Image, Pressable, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { useRef } from "react";
import { Colors } from "@/constants/theme";

export default function ProfileCard() {
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <Pressable
      onPressIn={() =>
        Animated.spring(scale, {
          toValue: 0.97,
          useNativeDriver: true,
        }).start()
      }
      onPressOut={() =>
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start()
      }
    >
      <Animated.View
        style={{
          transform: [{ scale }],
          borderRadius: 28,
          overflow: "hidden", // CRITICAL
          backgroundColor: "rgba(255,255,255,0.12)",

          shadowColor: "#38bdf8", // colored depth
          shadowOpacity: 0.25,
          shadowRadius: 34,
          shadowOffset: { width: 0, height: 22 },
        }}
      >
        <BlurView
          intensity={18}
          tint="light"
          style={{
            padding: 28,
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        >
          {/* top accent glow */}
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: "rgba(56,189,248,0.6)",
            }}
          />

          <Image
            source={require("../assets/images/icon.png")}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginBottom: 20,
              borderWidth: 2,
              borderColor: "rgba(56,189,248,0.6)",
            }}
          />

          <Text
            style={{
              fontSize: 28,
              fontWeight: "800",
              color: Colors.dark.textPrimary,
            }}
          >
            Alexander Barlow
          </Text>

          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              color: Colors.dark.textSecondary,
              lineHeight: 24,
              fontSize: 16,
              maxWidth: 260,
            }}
          >
            Full-stack developer building modern, high-impact mobile and web
            experiences.
          </Text>
        </BlurView>
      </Animated.View>
    </Pressable>
  );
}
