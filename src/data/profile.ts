export interface ProfileData {
  name: string;
  wordmarkFirst: string;
  wordmarkLast: string;
  identityLabel: string;
  tagline: string;
  heroBio: string;
  personalQuote: string;
  aboutMe: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    highlights: Array<{
      label: string;
      description: string;
      iconName: string;
    }>;
  };
  skills: {
    creative: string[];
    marketing: string[];
    technical: string[];
    tools: string[];
  };
  contact: {
    email: string;
    location: string;
    availability: string;
    socialLinks: Array<{
      platform: string;
      label: string;
      url: string;
      handle: string;
    }>;
  };
  portraitConfig: {
    type: '2d-image' | 'cutout' | '3d-placeholder';
    primaryImage: string;
    altText: string;
    aboutImage: string;
    candidImages: string[];
  };
}

export const profileData: ProfileData = {
  name: "Mahi Goyal",
  wordmarkFirst: "Mahi",
  wordmarkLast: "Goyal.",
  identityLabel: "CONTENT CREATOR • MARKETER • TECH ENTHUSIAST",
  tagline: "Building Ideas, Creating Stories, and Turning Them into Impact.",
  heroBio: "A student, content creator, and aspiring professional exploring the space where technology, creativity, and strategy come together.",
  personalQuote: "Creative enough to understand content. Responsible enough to handle the work behind it.",
  aboutMe: {
    heading: "A Little More About Me.",
    subheading: "Curiosity across creativity, strategy, and technology.",
    paragraphs: [
      "I am a student and creator exploring the intersection of digital marketing, content production, and technology. Balancing academic rigor with creative experimentation has taught me how to approach problems with both structure and fresh perspective.",
      "My creative journey began with a natural curiosity for storytelling—from writing magnetic opening hooks to crafting short-form video edits that resonate. I have hands-on experience developing UGC concepts, relatable reel scripts, and engaging visual narratives.",
      "Beyond the creative visuals lies strategic intention. I study audience behaviour, platform algorithms, and content pillars to understand why certain stories take flight and how brands can build genuine community connection.",
      "With a strong interest in computer science and AI/ML, and having cleared JEE while pursuing creative endeavors, I bring discipline, analytical thinking, and fast adaptability to every collaboration. I enjoy building things that are as thoughtful as they are impactful."
    ],
    highlights: [
      {
        label: "Cleared JEE",
        description: "Proven discipline, analytical foundation & academic rigor",
        iconName: "Award"
      },
      {
        label: "Hands-on UGC & Scripting",
        description: "From research & hook drafting to final reel editing",
        iconName: "Film"
      },
      {
        label: "Strategic Mindset",
        description: "Content pillar planning & audience engagement insights",
        iconName: "Target"
      },
      {
        label: "Tech-Forward",
        description: "Exploring CS, web technologies, and AI/ML workflows",
        iconName: "Code"
      }
    ]
  },
  skills: {
    creative: [
      "Scriptwriting for Reels & UGC",
      "Short-form Video Editing",
      "UGC Content Creation",
      "Storytelling & Narrative Flow",
      "Caption Writing & Hooks"
    ],
    marketing: [
      "Social Media Management",
      "Content Pillar Planning",
      "Audience Engagement",
      "Trend Research & Analysis",
      "Platform Algorithm Insights"
    ],
    technical: [
      "Web Development (HTML/CSS/JS/React)",
      "Computer Science Fundamentals",
      "AI/ML Curiosity & Workflows",
      "Analytical Problem Solving"
    ],
    tools: [
      "Canva",
      "VN Video Editor",
      "CapCut / Premiere",
      "Google Docs & Sheets",
      "Instagram Analytics",
      "YouTube Studio"
    ]
  },
  contact: {
    email: "mahigoyal6543@gmail.com",
    location: "India",
    availability: "Open to UGC Collaborations, Content Marketing & Internships",
    socialLinks: [
      {
        platform: "Instagram",
        label: "Instagram Profile",
        url: "https://instagram.com",
        handle: "@mahi_goyal"
      },
      {
        platform: "YouTube",
        label: "YouTube Channel",
        url: "https://youtube.com",
        handle: "Mahi Goyal"
      },
      {
        platform: "LinkedIn",
        label: "LinkedIn Profile",
        url: "https://linkedin.com",
        handle: "Mahi Goyal"
      },
      {
        platform: "Email",
        label: "Direct Email",
        url: "mailto:mahigoyal6543@gmail.com",
        handle: "mahigoyal6543@gmail.com"
      }
    ]
  },
  portraitConfig: {
    type: '2d-image',
    primaryImage: '/images/mahi/mahi_hero_vintage.png',
    altText: 'Portrait of Mahi Goyal',
    aboutImage: '/images/mahi/mahi_podium.jpg',
    candidImages: [
      '/images/mahi/mahi_mall.jpg',
      '/images/mahi/mahi_mehndi.jpg'
    ]
  }
};
