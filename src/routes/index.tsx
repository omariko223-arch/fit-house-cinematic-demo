import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/fithouse/Nav";
import { Hero } from "@/components/fithouse/Hero";
import { Consistency } from "@/components/fithouse/Consistency";
import { Disciplines } from "@/components/fithouse/Disciplines";
import { VirtualTour } from "@/components/fithouse/VirtualTour";
import { Community } from "@/components/fithouse/Community";
import { Membership } from "@/components/fithouse/Membership";
import { Trainers } from "@/components/fithouse/Trainers";
import { Schedule } from "@/components/fithouse/Schedule";
import { AlwaysOpen } from "@/components/fithouse/AlwaysOpen";
import { LocationFooter } from "@/components/fithouse/LocationFooter";

const title = "FitHouse | 24/7 Gym in 6th of October, Egypt";
const description =
  "FitHouse in El Seyahia El Rabaa, 6th of October — strength, calisthenics, kickboxing, classes, personal training and kids fitness. Open 24/7.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Consistency />
      <Disciplines />
      <VirtualTour />
      <Community />
      <Membership />
      <Trainers />
      <Schedule />
      <AlwaysOpen />
      <LocationFooter />
    </main>
  );
}
