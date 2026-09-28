export interface TechnicalProject {
  id: string;
  title: string;
  category: 'Web Development' | 'AI/ML & Computer Science' | 'Technical Experiments & Learning';
  status: 'Completed' | 'In Progress' | 'Concept';
  badgeColor: string;
  summary: string;
  fullDescription: string;
  objective: string;
  technologies: string[];
  myContribution: string;
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectsData {
  sectionLabel: string;
  heading: string;
  subheading: string;
  introduction: string;
  categories: string[];
  items: TechnicalProject[];
}

export const projectsData: ProjectsData = {
  sectionLabel: "PROJECTS & TECHNOLOGY",
  heading: "Curiosity Beyond Content.",
  subheading: "Exploring technology, building projects, and learning how ideas become useful digital experiences.",
  introduction: "Technology is the analytical counterweight to my creative storytelling. Having built a strong mathematical foundation through JEE preparation, I explore how software development, AI tools, and clean web interfaces can turn ideas into tangible, user-friendly digital products.",
  categories: ["All", "Web Development", "AI/ML & Computer Science", "Technical Experiments & Learning"],
  items: [
    {
      id: "editorial-portfolio-platform",
      title: "Editorial Portfolio & Personal Design System",
      category: "Web Development",
      status: "Completed",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      summary: "A modern, responsive personal website engineered with React, TypeScript, and custom Tailwind design tokens to seamlessly integrate content creation, marketing case studies, and engineering projects.",
      objective: "To build a performant, accessible digital home that balances editorial magazine aesthetics with clean, maintainable frontend architecture.",
      fullDescription: "Designed and built as a bespoke digital portfolio. It departs from standard cookie-cutter developer templates by combining warm editorial typography (Playfair Display) with structured content models, smooth interactive modals, and full WCAG AA accessibility compliance.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      myContribution: "Component architecture, design token system, responsive layouts, accessible dialog interactions, and content data structuring.",
      keyFeatures: [
        "Fully decoupled content data files for zero-friction maintenance",
        "Custom responsive layouts across mobile, tablet, and desktop viewports",
        "Accessible dialogs and modals with focus management and backdrop blur",
        "Lightweight micro-interactions respecting reduced-motion user preferences"
      ]
    },
    {
      id: "ai-hook-ideation-workflow",
      title: "Creator Hook & Script Ideation Workflow",
      category: "AI/ML & Computer Science",
      status: "In Progress",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      summary: "An experimental exploration applying prompt engineering and structured schema outputs to assist short-form creators in generating multi-angle video hooks.",
      objective: "To investigate how LLMs can be harnessed without generating bland, generic copy by enforcing proven storytelling frameworks (curiosity loops, contrast hooks, and relatable confessions).",
      fullDescription: "A hands-on exploration integrating AI APIs with structured prompt rubrics. Rather than asking for open-ended scripts, the system guides generation through defined parameters: target audience persona, emotional friction point, and visual cue pairing.",
      technologies: ["Python", "Gemini API", "Prompt Engineering", "JSON Schema"],
      myContribution: "Prompt rubric design, creator persona parameterization, qualitative output evaluation, and testing against real reel formats.",
      keyFeatures: [
        "Framework-based prompt structuring (Hook, Visual Cue, Resolution, CTA)",
        "JSON-validated output formats for immediate script templating",
        "A/B comparison of conversational vs. observational hooks"
      ]
    },
    {
      id: "college-decision-navigator",
      title: "Interactive Rank & Admission Navigator (Concept)",
      category: "Web Development",
      status: "Concept",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      summary: "A concept prototype inspired by student counseling research, designed to help entrance-exam candidates visually compare branch vs. college trade-offs.",
      objective: "To simplify overwhelming post-exam counseling data into an intuitive, student-friendly interactive preference builder.",
      fullDescription: "Born from firsthand experience with post-JEE counseling confusion. The project concept models how students can filter institutions based on rank cutoffs, placement trends, and mentorship access with clear visual comparison charts.",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      myContribution: "Product concept, candidate journey mapping, UI wireframing, and preference logic design.",
      keyFeatures: [
        "Visual cutoff probability sliders based on previous year trends",
        "Side-by-side college vs. branch comparison matrices",
        "Clean, empathetic student-centric onboarding interface"
      ]
    },
    {
      id: "cs-foundations-algorithms",
      title: "Algorithmic Logic & CS Problem Solving",
      category: "Technical Experiments & Learning",
      status: "In Progress",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      summary: "Ongoing practice and study of core data structures, object-oriented concepts, and algorithmic efficiency following rigorous JEE analytical preparation.",
      objective: "To deepen core computer science knowledge and maintain analytical discipline through consistent problem solving.",
      fullDescription: "Leveraging the rigorous mathematical and analytical discipline developed during JEE preparation to master fundamental data structures (arrays, trees, graphs, dynamic programming) and modern software architecture principles.",
      technologies: ["C++", "Python", "Data Structures", "Algorithms"],
      myContribution: "Self-driven study, solution implementations, time/space complexity optimization, and clean code practice.",
      keyFeatures: [
        "Implementation of core sorting, searching, and graph traversal algorithms",
        "Mathematical and logical problem solving exercises",
        "Foundational preparation for computer science coursework and engineering internships"
      ]
    }
  ]
};
