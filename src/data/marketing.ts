export interface MarketingCapability {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface StrategicCaseStudy {
  id: string;
  badge: string;
  title: string;
  context: string;
  approach: string;
  contribution: string;
  deliverable: string;
  keyLearning: string;
  tags: string[];
}

export const marketingData = {
  sectionLabel: "MARKETING & STRATEGY",
  heading: "The Strategy Behind the Stories.",
  subheading: "Great content doesn't happen by chance. It starts with audience empathy, platform dynamics, and deliberate structure.",
  introduction: "Creative hooks catch attention, but strategic structure sustains it. I combine qualitative audience research with platform behavior to design content that builds trust, communicates clear value propositions, and inspires authentic community engagement.",
  
  capabilities: [
    {
      id: "social-media-management",
      title: "Social Media Management",
      description: "Managing page aesthetics, publishing schedules, and community touchpoints to maintain consistent brand tone.",
      iconName: "Share2",
      deliverables: ["Visual Grid Planning", "Platform Scheduling", "Profile Optimization", "Tone Guidelines"]
    },
    {
      id: "content-pillar-planning",
      title: "Content Planning & Calendars",
      description: "Organizing ideas into clear content pillars (educational, relatable, inspirational, and conversion) for predictable output.",
      iconName: "Calendar",
      deliverables: ["Monthly Content Calendars", "Pillar Mapping", "Hook Repositories", "Asset Checklists"]
    },
    {
      id: "campaign-ideation",
      title: "Campaign Ideation & Storytelling",
      description: "Translating brand value propositions into conversational reel hooks, video treatments, and user-centric narratives.",
      iconName: "Sparkles",
      deliverables: ["UGC Storyboards", "Script Treatments", "Product Integration Hooks", "Brand Tone Translation"]
    },
    {
      id: "audience-engagement",
      title: "Audience Engagement & Research",
      description: "Studying comment patterns, community questions, and trending formats to continually refine content angles.",
      iconName: "Users",
      deliverables: ["Comment Section Mining", "Trend Verification", "Competitive Format Audits", "CTA Optimization"]
    }
  ],

  caseStudies: [
    {
      id: "student-fintech-concept",
      badge: "Strategic Framework • Student Audience",
      title: "Relatable Value Framing for E-Commerce Utilities",
      context: "Consumer utilities often struggle to engage Gen-Z audiences when marketing focuses solely on feature lists like discounts and browser extensions.",
      approach: "Shifted the angle from technical mechanics to personal student confessions (JEE prep fatigue, budget friction, and impulsive shopping guilt), making the tool feel like an organic discovery rather than an ad.",
      contribution: "Designed the narrative arc, wrote multi-variant conversational scripts, drafted scene-by-scene visual cues, and tested call-to-action hooks.",
      deliverable: "Complete 35-second reel script package with visual staging directions and coupon incentive triggers.",
      keyLearning: "Authentic vulnerability in the first 3 seconds outperforms generic product declarations.",
      tags: ["Student Psychology", "Hook Design", "UGC Narrative", "Conversion CTA"]
    },
    {
      id: "tech-education-framework",
      badge: "Strategic Framework • Higher Ed & Tech",
      title: "De-Risking New-Age Tech Education Narratives",
      context: "Students evaluating unconventional college programs face skepticism regarding credibility, outcomes, and traditional degree prestige.",
      approach: "Focused on concrete, high-contrast anchors: MacBook on Day 1 (immediate tangible hook) followed immediately by industry mentors and 18 months of paid internships (career security anchor).",
      contribution: "Formulated the contrast structure ('Degree vs. Industry-Ready'), structured concise soundbites, and designed an accessible entrance-exam registration CTA.",
      deliverable: "Multi-part educational video framework targeting high-school seniors and early-stage engineering aspirants.",
      keyLearning: "Pairing a disruptive hook with practical reassurance builds immediate legitimacy.",
      tags: ["Audience Research", "EdTech Positioning", "Curiosity Loops", "Pacing"]
    }
  ]
};
