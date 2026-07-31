export type BrahmastraEvent = {
  id: string;
  name: string;
  tagline: string;
  astra: string;
  type: "Technical" | "Non-Technical" | "Flagship";
  team: string;
  duration: string;
  prize: string;
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
    prize: "₹0",
    details: [
      "Build a working prototype around a given theme",
      "Use any stack, open-source libraries allowed",
      "Judged on innovation, execution and demo",
    ],
    color: "#D62839",
    formUrl: REGISTRATION_FORM_URL,
  },
  {
    id: "pptpresentation",
    name: "PPT Presentation",
    tagline: "Ideas, made crystal clear.",
    astra: "Pashupatastra",
    type: "Technical",
    team: "2 - 3 members",
    duration: "5 - 7 min",
    prize: "₹0",
    details: [
      "Individual or 2-3 members team",
      "Maximum 10 slides + 2 minutes Q&A",
      "PPT must be submitted before the event starts",
    ],
    color: "#06b6d4",
    formUrl: REGISTRATION_FORM_URL,
  },
  {
    id: "promptengineering",
    name: "Prompt Engineering",
    tagline: "Craft the words that unlock AI.",
    astra: "Narayanastra",
    type: "Technical",
    team: "Solo",
    duration: "30 min",
    prize: "₹0",
    details: [
      "Individual participation",
      "Create effective prompts for a given problem",
      "Explain your prompt and output to the judges",
      "Copying prompts from the internet is prohibited",
    ],
    color: "#f97316",
    formUrl: REGISTRATION_FORM_URL,
  },
  {
    id: "brandbuilder",
    name: "Brand Builder",
    tagline: "Design a brand that sticks.",
    astra: "Trishula",
    type: "Non-Technical",
    team: "Team of 2-3",
    duration: "60 min",
    prize: "₹0",
    details: [
      "Team of 2-3 members",
      "45 minutes preparation + 5 minutes presentation",
      "Brand name, logo sketch, tagline, target audience and marketing strategy",
      "Pitch to judges",
    ],
    color: "#6366f1",
    formUrl: REGISTRATION_FORM_URL,
  },
];
