import strength from "@/assets/strength.jpg";
import calisthenics from "@/assets/calisthenics.jpg";
import kickboxing from "@/assets/kickboxing.jpg";
import classesImg from "@/assets/classes.jpg";
import pt from "@/assets/pt.jpg";
import kids from "@/assets/kids.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";

export const WHATSAPP_URL = "https://wa.me/00000000000?text=Hi%20FitHouse";
export const INSTAGRAM_URL = "https://www.instagram.com/";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=El+Seyahia+El+Rabaa+6th+of+October+Egypt";

export type Discipline = {
  id: string;
  title: string;
  line: string;
  image: string;
  points: string[];
};

export const disciplines: Discipline[] = [
  {
    id: "strength",
    title: "Strength",
    line: "Barbells, racks, progressive overload.",
    image: strength,
    points: ["Free weights floor", "Structured progression", "Coached technique"],
  },
  {
    id: "calisthenics",
    title: "Calisthenics",
    line: "Bodyweight control, skill work, mobility.",
    image: calisthenics,
    points: ["Pull & push skills", "Rings and bars", "Skill progressions"],
  },
  {
    id: "kickboxing",
    title: "Kickboxing & MMA",
    line: "Striking, conditioning, pad work.",
    image: kickboxing,
    points: ["Bag & pad rounds", "Footwork drills", "Sparring-ready conditioning"],
  },
  {
    id: "classes",
    title: "Classes",
    line: "Coached group sessions, high energy.",
    image: classesImg,
    points: ["Small group formats", "Weekly schedule", "All levels welcome"],
  },
  {
    id: "pt",
    title: "Personal Training",
    line: "One-to-one coaching, built around you.",
    image: pt,
    points: ["Assessment first", "Programmed sessions", "Accountability"],
  },
  {
    id: "kids",
    title: "Kids Fitness",
    line: "Movement, coordination, confidence.",
    image: kids,
    points: ["Age-appropriate drills", "Supervised sessions", "Play-led coaching"],
  },
];

export type Trainer = {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  bio: string;
};

export const trainers: Trainer[] = [
  {
    id: "t1",
    name: "Coach Placeholder A",
    role: "Strength & Conditioning",
    image: trainer1,
    specialties: ["Barbell strength", "Athletic conditioning", "Return to training"],
    bio: "Coaching profile placeholder. Full biography, coaching philosophy and session style to be supplied by FitHouse.",
  },
  {
    id: "t2",
    name: "Coach Placeholder B",
    role: "Classes & Conditioning",
    image: trainer2,
    specialties: ["Group formats", "Conditioning", "Mobility"],
    bio: "Coaching profile placeholder. Full biography, coaching philosophy and session style to be supplied by FitHouse.",
  },
  {
    id: "t3",
    name: "Coach Placeholder C",
    role: "Kickboxing & MMA",
    image: trainer3,
    specialties: ["Striking fundamentals", "Pad work", "Fight conditioning"],
    bio: "Coaching profile placeholder. Full biography, coaching philosophy and session style to be supplied by FitHouse.",
  },
  {
    id: "t4",
    name: "Coach Placeholder D",
    role: "Personal Training",
    image: trainer4,
    specialties: ["1:1 programming", "Technique coaching", "Kids fitness"],
    bio: "Coaching profile placeholder. Full biography, coaching philosophy and session style to be supplied by FitHouse.",
  },
];

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  demoPrice: number | null;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "access",
    name: "House Access",
    tagline: "Open floor, 24/7 entry",
    demoPrice: 800,
    features: ["24/7 gym floor access", "Strength & cardio zones", "Locker access"],
  },
  {
    id: "full",
    name: "Full House",
    tagline: "Floor + all group classes",
    demoPrice: 1200,
    featured: true,
    features: ["Everything in House Access", "All group classes", "Kickboxing sessions"],
  },
  {
    id: "coached",
    name: "Coached",
    tagline: "Personal training package",
    demoPrice: null,
    features: ["1:1 coaching blocks", "Programmed training", "Progress reviews"],
  },
];

export type ClassSlot = {
  day: string;
  time: string;
  name: string;
  type: string;
  coach: string;
  duration: string;
};

export const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
export const classTypes = ["All", "Strength", "Kickboxing", "Conditioning", "Kids"];

const build = (): ClassSlot[] => {
  const template: Array<Omit<ClassSlot, "day">> = [
    { time: "07:00", name: "Morning Strength", type: "Strength", coach: "Coach A", duration: "60 min" },
    { time: "10:00", name: "Conditioning Circuit", type: "Conditioning", coach: "Coach B", duration: "45 min" },
    { time: "17:00", name: "Kids Movement", type: "Kids", coach: "Coach D", duration: "45 min" },
    { time: "19:00", name: "Kickboxing", type: "Kickboxing", coach: "Coach C", duration: "60 min" },
    { time: "21:00", name: "Night Lift", type: "Strength", coach: "Coach A", duration: "60 min" },
  ];
  return days.flatMap((day, i) =>
    template
      .filter((_, idx) => !(i % 3 === 2 && idx === 2))
      .map((t) => ({ ...t, day })),
  );
};

export const schedule: ClassSlot[] = build();
