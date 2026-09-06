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
import tourStrength from "@/assets/tour-strength.jpg";
import tourCardio from "@/assets/tour-cardio.jpg";
import tourRooftop from "@/assets/tour-rooftop.jpg";
import tourOutdoor from "@/assets/tour-outdoor.jpg";
import tourStudio from "@/assets/tour-studio.jpg";

/**
 * REAL FITHOUSE ASSET MAP — referenced by the client but not currently present.
 * Replace the matching imports above only after the verified files are supplied:
 * 123259 strength/bodybuilding floor; 123226 rooftop/calisthenics;
 * 123348 kickboxing/MMA; 123235 class/studio/functional area;
 * 123247 nighttime rooftop; 123000 strength/PT editorial;
 * 123024 C/Youssef; 123200 Coach A. Mosaad; 123211 Coach Kadnil;
 * 123039 and 123102 additional unnamed trainer imagery.
 */
export const VISUAL_ASSET_STATUS = "Concept placeholder — real FitHouse photo pending";

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
  /** Slot label — replace with the real coach name when supplied. */
  name: string;
  /** Neutral focus area. Keep factual until FitHouse confirms. */
  role: string;
  /** ASSET SLOT: swap this import for the real trainer portrait. */
  image: string;
  /** True while the image is a backdrop plate, not a real portrait. */
  portraitPending: boolean;
  specialties: string[];
  bio: string;
};

const PENDING_BIO =
  "Profile pending. Biography, coaching background and session style will be supplied by FitHouse.";

export const trainers: Trainer[] = [
  {
    id: "t1",
    name: "Verified trainer graphic pending",
    role: "Trainer slot 01",
    image: trainer1,
    portraitPending: true,
    specialties: [],
    bio: PENDING_BIO,
  },
  {
    id: "t2",
    name: "Verified trainer graphic pending",
    role: "Trainer slot 02",
    image: trainer2,
    portraitPending: true,
    specialties: [],
    bio: PENDING_BIO,
  },
  {
    id: "t3",
    name: "Verified trainer graphic pending",
    role: "Trainer slot 03",
    image: trainer3,
    portraitPending: true,
    specialties: [],
    bio: PENDING_BIO,
  },
  {
    id: "t4",
    name: "Verified trainer graphic pending",
    role: "Trainer slot 04",
    image: trainer4,
    portraitPending: true,
    specialties: [],
    bio: PENDING_BIO,
  },
];

/** ASSET SLOTS: replace each `image` with a true equirectangular panorama when available. */
export type TourScene = {
  id: string;
  name: string;
  caption: string;
  image: string;
};

export const tourScenes: TourScene[] = [
  {
    id: "strength",
    name: "Strength Floor",
    caption: "Racks, barbells and free weights.",
    image: tourStrength,
  },
  {
    id: "cardio",
    name: "Cardio / Machines",
    caption: "Cardio line and selectorised machines.",
    image: tourCardio,
  },
  {
    id: "rooftop",
    name: "Rooftop Calisthenics",
    caption: "Open-air bars, rings and parallel bars.",
    image: tourRooftop,
  },
  {
    id: "outdoor",
    name: "Outdoor Fighting",
    caption: "Heavy bag line under the canopy.",
    image: tourOutdoor,
  },
  {
    id: "studio",
    name: "Classes & Dance Studio",
    caption: "Mirrored floor for classes, dance and kids sessions.",
    image: tourStudio,
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
    {
      time: "07:00",
      name: "Morning Strength",
      type: "Strength",
      coach: "Coach A",
      duration: "60 min",
    },
    {
      time: "10:00",
      name: "Conditioning Circuit",
      type: "Conditioning",
      coach: "Coach B",
      duration: "45 min",
    },
    { time: "17:00", name: "Kids Movement", type: "Kids", coach: "Coach D", duration: "45 min" },
    { time: "19:00", name: "Kickboxing", type: "Kickboxing", coach: "Coach C", duration: "60 min" },
    { time: "21:00", name: "Night Lift", type: "Strength", coach: "Coach A", duration: "60 min" },
  ];
  return days.flatMap((day, i) =>
    template.filter((_, idx) => !(i % 3 === 2 && idx === 2)).map((t) => ({ ...t, day })),
  );
};

export const schedule: ClassSlot[] = build();
