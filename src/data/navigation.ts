export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Work",
    href: "/projects"
  },
  {
    label: "Approach",
    href: "/about"
  },
  {
    label: "Contact",
    href: "/contact"
  }
];