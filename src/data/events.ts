export type BrahmastraEvent = {
  id: string;
  name: string;
  tagline: string;
  astra: string;
  type: "Technical" | "Non-Technical" | "Flagship";
  team: string;
  duration: string;
  details: string[];
  coordinators: string[];
  color: string;
  /** Per-event Google Form link — replace with the real one. */
  formUrl: string;
};

/** Placeholder for Hackathon until a separate link is provided. */
export const HACKATHON_FORM_URL = "https://forms.gle/your-google-form-link";

/** The registration form for all other events. */
export const GENERAL_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfIyx5kFxA78mDyjZIMzrNL_kORYOcMjNF3-5pJd-6pln2yww/viewform?usp=publish-editor";

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
      "The Hackathon will be conducted jointly by the three departments CSE, AI&DS and IT",
      "Build a working prototype around a given theme",
      "Use any stack, open-source libraries allowed",
      "Judged on innovation, execution and demo",
    ],
    coordinators: [
      "Karthikeyan S – 9159659284",
      "Boomika S – 8124896874"
    ],
    color: "#D62839",
    formUrl: HACKATHON_FORM_URL,
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
    coordinators: [
      "Akshayaa C V – 9791222623",
      "Sanjaykumar K – 9345989768"
    ],
    color: "#06b6d4",
    formUrl: GENERAL_FORM_URL,
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
    coordinators: [
      "Narenkumar A – 6383118525",
      "Dharunkumar P – 6369421341"
    ],
    color: "#f97316",
    formUrl: GENERAL_FORM_URL,
  },
  {
    id: "brandsprints",
    name: "Brand Sprints",
    tagline: "Design a brand that sticks.",
    astra: "Trishula",
    type: "Non-Technical",
    team: "Team of 2",
    duration: "45 min",
    details: [
      "Team of 2 members",
      "Duration: 45 minutes (40 minutes preparation + 5 minutes presentation)",
      "Design: Brand Name, Logo Sketch, Tagline",
      "Strategy: Target Audience, Marketing Strategy",
    ],
    coordinators: [
      "Harini S – 7825899732",
      "Sainthavi S – 7806824136"
    ],
    color: "#6366f1",
    formUrl: GENERAL_FORM_URL,
  },
];
