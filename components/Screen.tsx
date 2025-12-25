import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function Screen({ children }) {
  return (
    <>
      <StatusBar style="light" translucent />
      <LinearGradient
        colors={["#0f172a", "#111827", "#1e293b", "#020617"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
        }}
      >
        {children}
      </LinearGradient>
    </>
  );
}
