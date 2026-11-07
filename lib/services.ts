export type Service = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  detail: string;
  icon:
    | "tow"
    | "roadside"
    | "brakes"
    | "transmission"
    | "diagnostics"
    | "maintenance"
    | "tires"
    | "suspension"
    | "tune-up";
  urgent?: boolean;
};

export const services: Service[] = [
  {
    slug: "towing",
    name: "Emergency towing",
    shortName: "Towing",
    title: "24/7 Emergency Towing",
    description:
      "Breakdowns happen. Our dispatch team is ready to help get you and your vehicle to a safe place, day or night.",
    detail:
      "Call our dispatch line with your location, vehicle, and destination. We will confirm service availability and an arrival estimate before sending help.",
    icon: "tow",
    urgent: true,
  },
  {
    slug: "roadside-assistance",
    name: "Roadside assistance",
    shortName: "Roadside assist",
    title: "Roadside Assistance",
    description:
      "Help for common roadside problems, including jump starts, lockouts, flat tires, and fuel delivery.",
    detail:
      "Tell dispatch what happened and where you are. We will confirm the right roadside service and share next steps before a technician is sent.",
    icon: "roadside",
    urgent: true,
  },
  {
    slug: "brake-repair",
    name: "Brake repair",
    shortName: "Brakes",
    title: "Brake Repair & Inspection",
    description:
      "Get squeals, vibration, or a soft pedal checked by a technician before a small issue becomes a bigger one.",
    detail:
      "Call to discuss an inspection for brake noise, vibration, warning lights, or changes in pedal feel. The shop can explain service availability and the inspection process before any work begins.",
    icon: "brakes",
  },
  {
    slug: "transmission-service",
    name: "Transmission service",
    shortName: "Transmission",
    title: "Transmission Service",
    description:
      "Call the shop to discuss shifting concerns, warning lights, or unusual transmission behavior and ask about diagnostic availability.",
    detail:
      "Call with the symptoms and your vehicle details. The team can discuss diagnostic availability and the appropriate next step.",
    icon: "transmission",
  },
  {
    slug: "engine-diagnostics",
    name: "Engine diagnostics",
    shortName: "Diagnostics",
    title: "Engine Diagnostics",
    description:
      "A warning light or rough-running engine deserves a proper diagnosis. Call to discuss having the issue checked.",
    detail:
      "Include any dashboard warning lights, sounds, or changes in how the vehicle drives. A technician can inspect the issue and review findings with you.",
    icon: "diagnostics",
  },
  {
    slug: "oil-change-maintenance",
    name: "Oil change & maintenance",
    shortName: "Maintenance",
    title: "Oil Change & Maintenance",
    description:
      "Keep routine maintenance on schedule by calling the shop to discuss an oil change or general service.",
    detail:
      "Tell us your vehicle year, make, model, and the maintenance you need when you call. The team can discuss service availability and details with you directly.",
    icon: "maintenance",
  },
  {
    slug: "new-used-tires",
    name: "New & used tires",
    shortName: "Tires",
    title: "New & Used Tire Services",
    description:
      "Call to ask about new and used tire options, sizing, and current availability for your vehicle.",
    detail:
      "Share your vehicle year, make, model, and tire size if available. The shop can discuss new or used tire options and confirm current availability before you visit.",
    icon: "tires",
  },
  {
    slug: "suspension-service",
    name: "Suspension service",
    shortName: "Suspension",
    title: "Suspension Service & Repair",
    description:
      "Call about uneven tire wear, excessive bouncing, steering changes, or suspension noises.",
    detail:
      "Share what you have noticed, when it happens, and your vehicle details. The shop can discuss suspension inspection and repair availability by phone.",
    icon: "suspension",
  },
  {
    slug: "engine-tune-up",
    name: "Engine tune-up",
    shortName: "Tune-up",
    title: "Engine Tune-Up Service",
    description:
      "Call to discuss rough idling, reduced performance, or routine engine tune-up needs.",
    detail:
      "Tell the shop about any symptoms, dashboard lights, and recent maintenance. The team can discuss tune-up service options and current availability.",
    icon: "tune-up",
  },
];
