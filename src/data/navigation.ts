export interface NavItem {
  label: string;
  href: string;
  targetId: string;
}

export const navigationData = {
  logo: {
    first: "Mahi",
    accent: "Goyal."
  },
  navItems: [
    { label: "Home", href: "#hero", targetId: "hero" },
    { label: "Content", href: "#content", targetId: "content" },
    { label: "Projects", href: "#projects", targetId: "projects" },
    { label: "Contact", href: "#contact", targetId: "contact" }
  ] as NavItem[],
  cta: {
    label: "Let's Collaborate",
    href: "#contact",
    targetId: "contact"
  }
};
