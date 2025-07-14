import { Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

export default function RootPage() {
  const [tags] = useState(["Featured", "Research", "Life", "Data Analyst", "Education"]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image source={require("@/assets/images/manus-logo.png")} style={{ height: 36, width: 36 }} />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>manus</Text>
          </View>
          <Entypo name="menu" size={24} />
        </View>

        {/* Hero */}
        <View style={{ paddingHorizontal: 16, gap: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center" }}>Leave it to Manus</Text>
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray" }}>
            Manus is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results.
            Manus excels at various tasks in work and life, getting everything done while you rest.
          </Text>
          <Image
            source={require("@/assets/images/home.webp")}
            style={{ height: 200, width: "100%", borderRadius: 8 }}
            resizeMode="cover"
          />
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 12 }}>
            <TouchableOpacity
              style={{ backgroundColor: "black", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20 }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Try Manus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: "#eee", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20 }}
            >
              <Text style={{ fontWeight: "bold" }}>Instagram</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Use Cases */}
        <View style={{ paddingHorizontal: 16, marginTop: 32 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", textAlign: "center" }}>
            Explore use cases from our official collection
          </Text>
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray", marginVertical: 8 }}>
            Learn how Manus handles real-world through step by step replays
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 16 }}>
            {tags.map((tag) => (
              <Text
                key={tag}
                style={{
                  backgroundColor: "#eee",
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 12,
                  fontSize: 12,
                }}
              >
                {tag}
              </Text>
            ))}
          </View>

          <View style={{ gap: 16 }}>
            <UseCaseCard
              title="Explore use cases from our official collection"
              description="Manus integrates travel information to create personalized itineraries."
              icon={require("@/assets/images/book.png")}
            />
            <UseCaseCard
              title="Interactive course on the momentum theorem"
              description="Engaging video presentations for middle school educators."
              icon={require("@/assets/images/settings.png")}
            />
            <UseCaseCard
              title="Comparative analysis of insurance policies"
              description="Structured tables with optimal recommendations tailored to your needs."
              icon={require("@/assets/images/chart-area-line.png")}
            />
            <UseCaseCard
              title="B2B supplier sourcing"
              description="Research across networks to identify suitable suppliers."
              icon={require("@/assets/images/chart-pie.png")}
            />
          </View>
        </View>

        {/* Events */}
        <View style={{ paddingHorizontal: 16, marginTop: 32 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", textAlign: "center" }}>Events</Text>
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray", marginVertical: 8 }}>
            Join our community events to learn more about Manus AI.
          </Text>

          <EventItem
            image={require("@/assets/images/blog-image-1.avif")}
            title="Vibe Coding For Startups With Manus"
            date="May 3 2025"
          />
          <EventItem
            image={require("@/assets/images/blog-image-3.avif")}
            title="Manus Meetup Melbourne"
            date="Apr 28 2025"
          />
          <EventItem
            image={require("@/assets/images/blog-image-2.avif")}
            title="Manus Meetup Sydney"
            date="Apr 29 2025"
          />
        </View>

        {/* Footer */}
        <View style={{ backgroundColor: "#f5f5f5", marginTop: 32, padding: 16 }}>
          {["Company", "Resources", "Community"].map((section, idx) => (
            <View key={idx} style={{ marginBottom: 16 }}>
              <Text style={{ fontWeight: "700", marginBottom: 8 }}>{section}</Text>
              <View style={{ gap: 4 }}>
                <Text style={footerLinkStyle}>About Us</Text>
                <Text style={footerLinkStyle}>Feedback</Text>
                <Text style={footerLinkStyle}>Media inquiries</Text>
                <Text style={footerLinkStyle}>Contact Us</Text>
                <Text style={footerLinkStyle}>Careers</Text>
              </View>
            </View>
          ))}

          <View style={{ marginTop: 24, alignItems: "flex-start", width: "100%" }}>
            <Image
              source={require("@/assets/images/manus-logo.png")}
              style={{ width: 36, height: 36, marginBottom: 8 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 12, color: "gray", textAlign: "left", marginBottom: 8 }}>
              ©2025 Manus AI{"\n"}Headquartered in Singapore
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 16 }}>
              <Image source={require("@/assets/images/brand-linkedin.png")} style={iconStyle} />
              <Image source={require("@/assets/images/brand-instagram.png")} style={iconStyle} />
              <Image source={require("@/assets/images/brand-x.png")} style={iconStyle} />
              <Image source={require("@/assets/images/brand-tiktok.png")} style={iconStyle} />
              <Image source={require("@/assets/images/brand-youtube.png")} style={iconStyle} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 🔸 Komponen Use Case Card
function UseCaseCard({ title, description, icon }) {
  return (
    <View style={{ backgroundColor: "#f8f8f8", padding: 16, borderRadius: 8, flexDirection: "column", gap: 8 }}>
      <Image source={icon} style={{ width: 24, height: 24 }} resizeMode="contain" />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
      <Text style={{ color: "gray", fontSize: 14 }}>{description}</Text>
    </View>
  );
}

// 🔸 Komponen Event
function EventItem({ image, title, date }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Image source={image} style={{ width: "100%", height: 180, borderRadius: 8 }} resizeMode="cover" />
      <Text style={{ fontWeight: "bold", marginTop: 8 }}>{title}</Text>
      <Text style={{ fontSize: 12, color: "gray" }}>{date}</Text>
    </View>
  );
}

// 🔸 Global Style
const footerLinkStyle = {
  fontSize: 14,
  color: "gray",
};

const iconStyle = {
  width: 24,
  height: 24,
  resizeMode: "contain",
};