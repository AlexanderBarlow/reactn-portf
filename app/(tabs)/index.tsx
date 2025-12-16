import { ScrollView, View } from "react-native";
import { useRef, useState } from "react";
import Screen from "@/components/Screen";
import SectionHeader from "@/components/SectionHeader";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillPill from "@/components/SkillPill";
import LiquidDock from "@/components/LiquidDock";

export default function HomeScreen() {
  const scrollRef = useRef(null);
  const sections = useRef({});
  const [activeSection, setActiveSection] = useState("top");

  const scrollTo = (key) => {
    scrollRef.current?.scrollTo({
      y: sections.current[key] ?? 0,
      animated: true,
    });
  };

  return (
    <Screen>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 160, // space for floating dock
        }}
        scrollEventThrottle={16}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;

          if (y < sections.current.projects) {
            setActiveSection("top");
          } else if (y < sections.current.experience) {
            setActiveSection("projects");
          } else if (y < sections.current.contact) {
            setActiveSection("experience");
          } else {
            setActiveSection("contact");
          }
        }}
      >
        {/* HERO / PROFILE */}
        <View
          onLayout={(e) => {
            sections.current.top = e.nativeEvent.layout.y;
          }}
        >
          <ProfileCard />
        </View>

        {/* HIGHLIGHTS */}
        <View
          style={{ marginTop: 32 }}
          onLayout={(e) => {
            sections.current.highlights = e.nativeEvent.layout.y;
          }}
        >
          <SectionHeader title="Highlights" />
          <ExperienceCard
            role="Full-Stack Developer"
            company="Modern Web & Mobile"
            period="5+ Projects"
            summary="Built production-ready apps using React, React Native, Next.js, Prisma, and Supabase with a focus on clean architecture and polished UX."
          />
        </View>

        {/* PROJECTS */}
        <View
          style={{ marginTop: 36 }}
          onLayout={(e) => {
            sections.current.projects = e.nativeEvent.layout.y;
          }}
        >
          <SectionHeader title="Projects" />
          <ProjectCard
            title="Coffee Club App"
            description="A mobile-first ordering and loyalty platform with real-time order tracking, admin dashboards, and a Neo-Depth UI."
            stack="React Native • Prisma • Supabase"
          />
          <ProjectCard
            title="FlowWise Budget App"
            description="A personal finance app focused on cash flow clarity, daily insights, and forward-looking budgeting."
            stack="Next.js • React • Charts"
          />
          <ProjectCard
            title="Secret Santa Platform"
            description="A role-based holiday exchange app with admin controls, wishlists, and automated assignments."
            stack="Next.js • Prisma • Auth"
          />
        </View>

        {/* EXPERIENCE */}
        <View
          style={{ marginTop: 36 }}
          onLayout={(e) => {
            sections.current.experience = e.nativeEvent.layout.y;
          }}
        >
          <SectionHeader title="Experience" />
          <ExperienceCard
            role="Manager"
            company="Chick-fil-A"
            period="2022 – Present"
            summary="Lead operations, coach team members, manage performance metrics, and help implement process improvements in a high-volume environment."
          />
        </View>

        {/* SKILLS */}
        <View
          style={{ marginTop: 36 }}
          onLayout={(e) => {
            sections.current.skills = e.nativeEvent.layout.y;
          }}
        >
          <SectionHeader title="Skills" />
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {[
              "React",
              "React Native",
              "Next.js",
              "JavaScript",
              "Prisma",
              "Supabase",
              "UI/UX Design",
              "System Architecture",
            ].map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </View>
        </View>

        {/* EDUCATION */}
        <View
          style={{ marginTop: 36 }}
          onLayout={(e) => {
            sections.current.education = e.nativeEvent.layout.y;
          }}
        >
          <SectionHeader title="Education & Certifications" />
          <ExperienceCard
            role="Information Technology (BS / MS Track)"
            company="Arizona State University"
            period="In Progress"
            summary="Focused on software development, systems, networking, and security with hands-on project experience."
          />
        </View>

        {/* CONTACT */}
        <View
          style={{ marginTop: 36 }}
          onLayout={(e) => {
            sections.current.contact = e.nativeEvent.layout.y;
          }}
        >
          <SectionHeader title="Contact" />
          <ExperienceCard
            role="Get in Touch"
            company="Email • GitHub • LinkedIn"
            period=""
            summary="Reach out to discuss opportunities, collaborations, or to learn more about my work."
          />
        </View>
      </ScrollView>

      {/* FLOATING SECTION DOCK */}
      <LiquidDock onJump={scrollTo} activeSection={activeSection} />
    </Screen>
  );
}
