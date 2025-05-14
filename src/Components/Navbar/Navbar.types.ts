// src/Components/Navbar/Navbar.types.ts
export interface Brand {
  text: string;
  href: string;
}

export interface NavbarProps {
  bgColor?: string;
  linkColor?: string;
  data: string[];
  brand: Brand;
}
