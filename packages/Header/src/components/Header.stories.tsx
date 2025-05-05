import React from 'react';
import { Header } from './Header';

export default { title: 'Header', component: Header };

export const Default = () => (
  <Header
    logo="MySite"
    navItems={[
      { key: 'home', label: 'Home', href: '#home' },
      { key: 'blog', label: 'Blog', href: '#blog' },
    ]}
    showSearchToggle
    onSearchToggle={() => alert('Search toggled!')}
    showDarkModeToggle
    onDarkModeToggle={() => alert('Dark mode toggled!')}
  />
);
