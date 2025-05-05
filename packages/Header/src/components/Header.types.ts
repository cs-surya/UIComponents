import React from 'react';

export interface NavItem {
  /** Unique key or identifier */
  key: string;
  /** Display text for the nav link */
  label: string;
  /** Target id or href string */
  href: string;
}

export interface HeaderProps {
  /** Site logo text or React element */
  logo?: string | React.ReactNode;
  /** Navigation items */
  navItems: NavItem[];
  /** Initial dark mode state */
  darkMode?: boolean;
  /** Toggle dark mode callback */
  onDarkModeToggle?: () => void;
  /** Navbar background color (CSS class or inline style) */
  bgColorClass?: string;
  /** Text color class */
  textColorClass?: string;
  /** Breakpoint at which navbar expands */
  expandBreakpoint?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional root classes */
  className?: string;
}