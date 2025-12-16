import { Tabs } from "expo-router";
import { View } from "react-native";
import LiquidDock from "../../components/LiquidDock";

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
    </View>
  );
}
