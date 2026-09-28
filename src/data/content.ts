export interface ContentItem {
  id: string;
  title: string;
  category: 'UGC & Script Concepts' | 'Short-form Video & Reels' | 'Brand Storytelling';
  contentType: 'Script Concept' | 'Creative Sample' | 'Video Editing Showcase';
  badgeLabel: string;
  summary: string;
  hook: string;
  role: string;
  targetAudience: string;
  brandContext?: string;
  scriptLines?: Array<{
    beat?: string;
    speaker?: string;
    text: string;
    visualCue?: string;
  }>;
  scriptImage?: string;
  thumbnailPlaceholder?: string;
  featured: boolean;
}

export interface ContentData {
  sectionLabel: string;
  heading: string;
  subheading: string;
  categories: string[];
  items: ContentItem[];
}

export const contentData: ContentData = {
  sectionLabel: "CONTENT CREATION",
  heading: "Stories I've Created.",
  subheading: "From the first hook to the final edit, I craft content designed to connect with people and communicate ideas.",
  categories: ["All", "UGC & Script Concepts", "Short-form Video & Reels", "Brand Storytelling"],
  items: [
    {
      id: "buyhatke-script",
      title: "Buyhatke: Smart Shopping & Deal Discovery",
      category: "UGC & Script Concepts",
      contentType: "Script Concept",
      badgeLabel: "Script Concept • UGC",
      summary: "A relatable student confession script connecting academic pressure with online shopping habits to introduce price tracking and automated coupons naturally.",
      hook: "\"So guys, mere JEE clear karne ke sirf 2 reasons hain...\"",
      role: "Concept Ideation, Scriptwriting & Hook Design",
      targetAudience: "Students, young shoppers, budget-conscious online buyers",
      brandContext: "Buyhatke Price Tracking & Coupon Extension",
      scriptImage: "/images/scripts/Buyhatke script bymahi.PNG",
      featured: true,
      scriptLines: [
        {
          beat: "Hook (0-3s)",
          speaker: "Mahi",
          text: "So guys, mere JEE clear karne ke sirf 2 reasons hain... 😭",
          visualCue: "Talking head closeup with candid comedic expression"
        },
        {
          beat: "Beat 1",
          speaker: "Mahi",
          text: "Pehla — meri mummy. Jo mujhe padhte hue itna khana khilaati rehti hain ki main bore hi nahi hoti.",
          visualCue: "B-roll snippet: Mom bringing study snacks"
        },
        {
          beat: "Beat 2 (Confession)",
          speaker: "Mahi",
          text: "And second... okay this is actually a confession. Main bohot badi shopper hoon. Like... I LOVE shopping. But ek cheez jo mujhe bilkul pasand nahi hai? Shopping pe time waste karna.",
          visualCue: "Camera zoom-in, relatable delivery"
        },
        {
          beat: "Conflict & Discovery",
          speaker: "Mahi",
          text: "Main na woh type ki insaan hoon jo first sight mein cheez pasand aayi toh bas chahiye! But budget kabhi kabhi allow nahi karta. Obviously, main student hoon... lekin smart bhi hoon! Toh mujhe yeh website mili — Buyhatke.",
          visualCue: "Screen recording showing price graph and coupon discovery"
        },
        {
          beat: "Solution & Value",
          speaker: "Mahi",
          text: "Ispe literally best price, coupons, aur price history sab mil jata hai. Ab mujhe har app pe ghanto research nahi karni padti, aur meri prep mein focus bana rehta hai.",
          visualCue: "Demonstrating coupon auto-apply with 1 click"
        },
        {
          beat: "CTA",
          speaker: "Mahi",
          text: "Student budget bhi happy, shopping addiction bhi happy! Comment 'LINK' and I'll send it to you. 🫶",
          visualCue: "Onscreen text: Comment 'LINK' for instant DM"
        }
      ]
    },
    {
      id: "tensor-school-script",
      title: "Tensor School of CS & AI: Modern Tech Education",
      category: "UGC & Script Concepts",
      contentType: "Script Concept",
      badgeLabel: "Script Concept • Education",
      summary: "A high-impact educational hook script contrasting outdated engineering rote-learning with practical, industry-integrated computer science programs.",
      hook: "\"Wait... a college that's giving every student a MacBook on Day 1?\"",
      role: "Hook Strategy, Educational Scripting & Pacing",
      targetAudience: "Engineering aspirants, tech students, high-school grads",
      brandContext: "Tensor School of CS & AI (TSAT Entrance Exam)",
      scriptImage: "/images/scripts/Tensor school script bymahi.PNG",
      featured: true,
      scriptLines: [
        {
          beat: "Hook (0-3s)",
          speaker: "Mahi",
          text: "Wait... a college that's giving every student a MacBook on Day 1?",
          visualCue: "Sharp zoom-in, engaging tone"
        },
        {
          beat: "Cut (3-4s)",
          speaker: "Mahi",
          text: "And that's not even the craziest part.",
          visualCue: "Quick dynamic sound cut"
        },
        {
          beat: "Body (4-25s)",
          speaker: "Mahi",
          text: "I recently came across Tensor School of CS & AI, and honestly, aur ye boht alag hai traditional engineering colleges se. They only select 300 students through their entrance exam, TSAT. Their campus is located right inside Bengaluru's tech ecosystem.",
          visualCue: "B-roll clips of modern tech hubs & students coding"
        },
        {
          beat: "Key Differentiator",
          speaker: "Mahi",
          text: "Students learn from engineers and industry professionals who've worked at Google, Microsoft, Uber, and Indeed. And instead of graduating with just a degree... students get up to 18 months of paid internship experience built into the program. Which means they graduate as industry-ready software engineers, not freshers.",
          visualCue: "Visual callouts highlighting '18 Months Paid Experience'"
        },
        {
          beat: "CTA (26-35s)",
          speaker: "Mahi",
          text: "If you're interested in Computer Science, AI, or tech careers, TSAT registrations are open right now. Check the link in my bio/comments and see if it's something you'd want to apply for.",
          visualCue: "Text overlay pointing to bio link"
        }
      ]
    },
    {
      id: "apna-sathee-script",
      title: "Apna Sathee: Post-JEE College & Branch Navigator",
      category: "UGC & Script Concepts",
      contentType: "Script Concept",
      badgeLabel: "Script Concept • Career Guidance",
      summary: "Empathetic peer-to-peer counseling script addressing the anxiety students face after entrance exams regarding college reputation versus branch preference.",
      hook: "\"JEE is over, and I honestly thought the toughest part was over too. Well... it was. But the most confusing part has started now.\"",
      role: "Audience Relatability, Story Flow & CTA Design",
      targetAudience: "JEE qualifiers, admission-seeking students & parents",
      brandContext: "Apna Sathee Counseling & Mentorship App",
      scriptImage: "/images/scripts/Apna sathee script bymahi.PNG",
      featured: true,
      scriptLines: [
        {
          beat: "Emotional Hook",
          speaker: "Mahi",
          text: "JEE is over, and I honestly thought the toughest part was over too. Well... it was. But the most confusing part has started now.",
          visualCue: "Pensive, relatable expression looking at laptop notes"
        },
        {
          beat: "Dilemma / Peer Resonance",
          speaker: "Mahi",
          text: "Someone says college tag is more important. Someone says branch matters more. One college has amazing placements; another has great campus life. And honestly, I'm listening to different opinions every single day.",
          visualCue: "Quick text overlays contrasting 'College Tag' vs 'Branch Future'"
        },
        {
          beat: "Discovery",
          speaker: "Mahi",
          text: "While researching, I came across Apna Sathee. What I found useful is that it helps generate a preference list based on your rank, lets you compare colleges, checks your admission chances, and even has an AI assistant to answer counseling-related doubts.",
          visualCue: "Demonstrating preference list generator & AI assistant"
        },
        {
          beat: "Mentorship & CTA",
          speaker: "Mahi",
          text: "And the best part? They also have IITian mentorship support. If you're going through this confusion right now, definitely check it out. Use my code for 10% off. Comment 'LINK' and I'll send it to you.",
          visualCue: "Coupon code badge on screen"
        }
      ]
    },
    {
      id: "quick-commerce-systems",
      title: "Systems Behind Speed: Quick-Commerce Breakdown",
      category: "Brand Storytelling",
      contentType: "Creative Sample",
      badgeLabel: "Creative Sample • Brand Strategy",
      summary: "A breakdown of brand messaging versus operational reality, exploring how consumer brands build trust through reliable infrastructure rather than speed alone.",
      hook: "\"Aapne kabhi notice kiya hai... Hum sab Zepto aur Blinkit ki delivery speed ki baat karte hain: '10 minutes mein aa gaya'...\"",
      role: "Business Narrative & Brand Architecture",
      targetAudience: "Marketing enthusiasts, consumer brand strategists, founders",
      brandContext: "Operational Brand Trust Analysis",
      scriptImage: "/images/scripts/Sample brand scriptbymahi.PNG",
      featured: false,
      scriptLines: [
        {
          beat: "Observation Hook",
          speaker: "Mahi",
          text: "Aapne kabhi notice kiya hai... Hum sab Zepto aur Blinkit ki delivery speed ki baat karte hain: '10 minutes mein aa gaya! Yaar kitni fast service hai!'",
          visualCue: "Grocery app notification pop-up visual"
        },
        {
          beat: "Shift in Perspective",
          speaker: "Mahi",
          text: "Aur honestly... Delivery toh kamaal ki hai hi. But the main thing is their fast, reliable backend resources. Matlab aapko pata hai, aapko trust hai ki kuch bhi dikkat hogi toh solve ho jayegi.",
          visualCue: "B-roll of warehouse logistics and dark store flow"
        },
        {
          beat: "Strategic Takeaway",
          speaker: "Mahi",
          text: "Kyunki unke paas proper systems hain. Aur yahi cheez modern businesses ko scale karne mein aur customer loyalty build karne mein sabse zyada help karti hai.",
          visualCue: "Graphic: Trust = Reliability + Predictable Systems"
        }
      ]
    },
    {
      id: "video-editing-showcase",
      title: "Retention-Focused Short-form Video Edits",
      category: "Short-form Video & Reels",
      contentType: "Video Editing Showcase",
      badgeLabel: "Editing Showcase • Short-form",
      summary: "A showcase of editing techniques focused on viewer retention: audio beat-matching, dynamic subtitles, smooth B-roll cutaways, and seamless hook transitions.",
      hook: "\"Crafting visual rhythm where every second earns the next.\"",
      role: "Video Editing, Sound Design, Text Animation, Pacing",
      targetAudience: "Brands, content creators, podcast clips & social channels",
      featured: false
    },
    {
      id: "marketing-girlie-concept",
      title: "Creator Workstation & Campaign Workflow",
      category: "Brand Storytelling",
      contentType: "Creative Sample",
      badgeLabel: "Creative Sample • Lifestyle & Workflow",
      summary: "Visual storytelling exploring the creator toolkit: wireless microphones, mobile rigging, planning notebooks, and power essentials for on-the-go production.",
      hook: "\"What's inside the creator bag when managing campaigns on the move.\"",
      role: "Creative Direction, Styling & Concept Staging",
      targetAudience: "Lifestyle brands, tech accessories, creator tools",
      featured: false
    }
  ]
};
