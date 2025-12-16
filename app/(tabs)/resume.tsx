import { ScrollView, View } from "react-native";
import { useRef } from "react";
import Screen from "@/components/Screen";
import SectionHeader from "@/components/SectionHeader";
import ResumeSummary from "@/components/ResumeSummary";
import ExperienceCard from "@/components/ExperienceCard";
import SkillPill from "@/components/SkillPill";
import ResumeSectionNav from "@/components/ResumeSectionNav";

export default function ResumeScreen() {
  const scrollRef = useRef(null);

  const sectionPositions = useRef({});

  const jumpTo = (key) => {
    const y = sectionPositions.current[key];
    if (y != null) {
      scrollRef.current?.scrollTo({ y, animated: true });
    }
  };

  return (
    <Screen>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 140,
        }}
        showsVerticalScrollIndicator={false}
      >
        <ResumeSectionNav
          sections={[
            { key: "summary", label: "Summary" },
            { key: "experience", label: "Experience" },
            { key: "skills", label: "Skills" },
            { key: "education", label: "Education" },
          ]}
          onJump={jumpTo}
        />

        <View
          onLayout={(e) =>
            (sectionPositions.current.summary = e.nativeEvent.layout.y)
          }
        >
          <SectionHeader title="Summary" />
          <ResumeSummary />
        </View>

        <View
          onLayout={(e) =>
            (sectionPositions.current.experience = e.nativeEvent.layout.y)
          }
        >
          <SectionHeader title="Experience" />
          <ExperienceCard
            role="Manager"
            company="Chick-fil-A"
            period="2022 – Present"
            summary="Lead daily operations, coach team members, and drive performance improvements."
          />
        </View>

        <View
          onLayout={(e) =>
            (sectionPositions.current.skills = e.nativeEvent.layout.y)
          }
        >
          <SectionHeader title="Skills" />
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {[
              "React",
              "React Native",
              "Next.js",
              "Prisma",
              "Supabase",
              "JavaScript",
              "UI/UX Design",
            ].map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </View>
        </View>

        <View
          onLayout={(e) =>
            (sectionPositions.current.education = e.nativeEvent.layout.y)
          }
        >
          <SectionHeader title="Education & Certifications" />
          <ExperienceCard
            role="Information Technology (BS/MS Track)"
            company="Arizona State University"
            period="In Progress"
            summary="Focused on software development, systems, and security."
          />
        </View>
      </ScrollView>
    </Screen>
  );
}
