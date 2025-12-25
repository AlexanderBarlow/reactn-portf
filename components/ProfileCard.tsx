import { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import { BlurView } from "expo-blur";
import ProfileImage from "../assets/images/portf.png";

export default function ProfileHeader() {
  const nameY = useRef(new Animated.Value(10)).current;
  const nameO = useRef(new Animated.Value(0)).current;

  const summaryY = useRef(new Animated.Value(12)).current;
  const summaryO = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(nameO, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true,
      }),
      Animated.timing(nameY, {
        toValue: 0,
        duration: 520,
        useNativeDriver: true,
      }),
      Animated.timing(summaryO, {
        toValue: 1,
        duration: 520,
        delay: 80,
        useNativeDriver: true,
      }),
      Animated.timing(summaryY, {
        toValue: 0,
        duration: 620,
        delay: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, [nameO, nameY, summaryO, summaryY]);

  return (
    <View style={{ paddingTop: 54, paddingBottom: 20 }}>
      <View style={{ alignItems: "center" }}>
        {/* Avatar (liquid glass ring, not a card) */}
        <View
          style={{
            width: 122,
            height: 122,
            borderRadius: 61,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.22)",
            backgroundColor: "rgba(255,255,255,0.06)",
            shadowColor: "#000",
            shadowOpacity: 0.26,
            shadowRadius: 18,
            shadowOffset: { width: 0, height: 12 },
          }}
        >
          <BlurView
            intensity={22}
            tint="light"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Specular highlight */}
            <View
              pointerEvents="none"
              style={{
                position: "absolute",
                top: 10,
                left: 14,
                width: 46,
                height: 18,
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.20)",
              }}
            />

            <Image
              source={ProfileImage}
              style={{
                width: 108,
                height: 108,
                borderRadius: 54,
              }}
            />
          </BlurView>
        </View>

        {/* Name + role */}
        <Animated.View
          style={{
            alignItems: "center",
            marginTop: 18,
            transform: [{ translateY: nameY }],
            opacity: nameO,
          }}
        >
          <Text
            style={{
              fontSize: 34,
              fontWeight: "800",
              letterSpacing: -0.6,
              color: "rgba(255,255,255,0.96)",
              textAlign: "center",
            }}
          >
            Alexander Barlow
          </Text>

          <Text
            style={{
              marginTop: 7,
              fontSize: 14,
              fontWeight: "700",
              letterSpacing: 1.6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.60)",
              textAlign: "center",
            }}
          >
            Full-Stack Developer • Mobile-First UI
          </Text>
        </Animated.View>

        {/* Summary (clean, breathable, not a pill) */}
        <Animated.View
          style={{
            width: "92%",
            marginTop: 18,
            transform: [{ translateY: summaryY }],
            opacity: summaryO,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              lineHeight: 24,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            I build modern products with clean architecture, thoughtful motion,
            and Liquid Glass UI—optimized for mobile and shipped fast.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}
