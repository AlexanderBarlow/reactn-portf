import { ScrollView, StyleSheet, Text } from "react-native";
import Screen from "@/components/Screen";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileCard />

        <Text style={styles.sectionTitle}>Projects</Text>

        <ProjectCard title="Coffee Club App" />
        <ProjectCard title="FlowWise Budget App" />
        <ProjectCard title="Secret Santa Platform" />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 120, // space for floating dock
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#7dd3fc",
    marginVertical: 18,
  },
});
