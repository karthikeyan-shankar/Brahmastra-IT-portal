export type BrahmastraEvent = {
  id: string;
  name: string;
  tagline: string;
  astra: string;
  type: "Technical" | "Non-Technical" | "Flagship";
  team: string;
  duration: string;
  details: string[];
  color: string;
  /** Per-event Google Form link — replace with the real one. */
  formUrl: string;
};

/** Placeholder — replace with the real Google Form link when you have it. */
export const REGISTRATION_FORM_URL = "https://forms.gle/your-google-form-link";

export const EVENTS: BrahmastraEvent[] = [
  {
    id: "hackathon",
    name: "Hackathon",
    tagline: "Build fast. Ship faster.",
    astra: "Sudarshanastra",
    type: "Flagship",
    team: "Team of 4",
    duration: "12 hrs",
    details: [
      "Build a working prototype around a given theme",
      "Use any stack, open-source libraries allowed",
      "Judged on innovation, execution and demo",
    ],
    color: "#D62839",
    formUrl: REGISTRATION_FORM_URL,
  },
  {
    id: "slidestrom",
    name: "Slide Strom",
    tagline: "Ideas, made crystal clear.",
    astra: "Pashupatastra",
    type: "Technical",
    team: "1 - 3 members",
    duration: "5 - 7 min",
    details: [
      "Individual participation, 2-3 members team",
      "Presentation duration: 5–7 minutes",
      "Q&A: 2 minutes",
      "Maximum 10 slides",
      "PPT must be submitted before the event starts",
      "Judges' decision is final",
    ],
    color: "#06b6d4",
    formUrl: REGISTRATION_FORM_URL,
  },
  {
    id: "promptmasters",
    name: "Prompt Masters",
    tagline: "Craft the words that unlock AI.",
    astra: "Narayanastra",
    type: "Technical",
    team: "Solo",
    duration: "30 min",
    details: [
      "Individual participation",
      "Duration: 30 minutes",
      "AI tools may be used only if permitted by organizers",
      "Participants must explain their prompt and output",
      "Copying prompts from the internet is prohibited",
    ],
    color: "#f97316",
    formUrl: REGISTRATION_FORM_URL,
  },
  {
    id: "brandsprints",
    name: "Brand Sprints",
    tagline: "Design a brand that sticks.",
    astra: "Trishula",
    type: "Non-Technical",
    team: "Team of 2-3",
    duration: "60 min",
    details: [
      "Team of 2–3 members",
      "Duration: 60 minutes (40 minutes preparation + 5 minutes presentation)",
      "Design: Brand Name, Logo Sketch, Tagline",
      "Strategy: Target Audience, Marketing Strategy",
    ],
    color: "#6366f1",
    formUrl: REGISTRATION_FORM_URL,
  },
];
