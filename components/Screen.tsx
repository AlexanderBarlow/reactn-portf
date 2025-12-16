import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Screen({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[
        "#0f172a", // deep slate
        "#111827", // midnight blue
        "#1e293b", // cool gray-blue
        "#020617", // grounding dark
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      {children}
    </LinearGradient>
  );
}
