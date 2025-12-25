import { View, Text, Image } from "react-native";
import { BlurView } from "expo-blur";
import ProfileImage from "../assets/images/portf.png";

export default function ProfileHeader() {
  return (
    <View
      style={{
        paddingTop: 14,
        paddingBottom: 8,
      }}
    >
      {/* Hero / Intro (not a card) */}
      <View style={{ alignItems: "center" }}>
        {/* Avatar ring with liquid-glass vibe */}
        <View
          style={{
            width: 118,
            height: 118,
            borderRadius: 59,
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
                width: 44,
                height: 18,
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.20)",
              }}
            />

            <Image
              source={ProfileImage}
              style={{
                width: 104,
                height: 104,
                borderRadius: 52,
              }}
            />
          </BlurView>
        </View>

        {/* Name + role */}
        <Text
          style={{
            marginTop: 16,
            fontSize: 34,
            fontWeight: "800",
            letterSpacing: -0.6,
            color: "rgba(255,255,255,0.96)",
          }}
        >
          Alexander Barlow
        </Text>

        <Text
          style={{
            marginTop: 6,
            fontSize: 14,
            fontWeight: "600",
            letterSpacing: 1.8,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.60)",
          }}
        >
          Full-Stack Developer • Mobile-First UI
        </Text>

        {/* Liquid-glass “intro pill” */}
        <View
          style={{
            marginTop: 14,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "92%",
              borderRadius: 999,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.16)",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <BlurView
              intensity={18}
              tint="dark"
              style={{
                paddingVertical: 12,
                paddingHorizontal: 16,
                alignItems: "center",
              }}
            >
              {/* Top edge highlight */}
              <View
                pointerEvents="none"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  backgroundColor: "rgba(255,255,255,0.16)",
                }}
              />

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  lineHeight: 20,
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                I build modern experiences with clean architecture, thoughtful
                motion, and “liquid glass” UI—optimized for mobile and shipped
                fast.
              </Text>
            </BlurView>
          </View>
        </View>

        {/* Micro “status chips” (optional but very iOS) */}
        <View
          style={{
            marginTop: 14,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            "Next.js",
            "React Native",
            "Prisma",
            "Supabase",
            "Framer Motion",
          ].map((label) => (
            <View
              key={label}
              style={{
                borderRadius: 999,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.14)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <BlurView
                intensity={14}
                tint="dark"
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: "rgba(255,255,255,0.74)",
                    letterSpacing: 0.2,
                  }}
                >
                  {label}
                </Text>
              </BlurView>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
