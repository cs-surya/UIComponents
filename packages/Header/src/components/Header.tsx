import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({
  logo = 'Logo',
  navItems,
  darkMode = false,
  onDarkModeToggle,
  bgColorClass = 'bg-gray-800',
  textColorClass = 'text-white',
  expandBreakpoint = 'lg',
  className = '',
}) => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollY = window.scrollY;
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (scrollY >= top) setActiveLink(section.id);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(o => !o);
  const breakpointClass = `navbar-expand-${expandBreakpoint}`;

  return (
    <nav
      className={`w-full ${bgColorClass} ${textColorClass} ${breakpointClass} sticky top-0 z-50 ${className}`}
    >
      <div className="container-fluid flex items-center justify-between p-4">
        {/* Brand */}
        <div className="navbar-brand">{typeof logo === 'string' ? <span className="font-bold text-xl">{logo}</span> : logo}</div>

        {/* Toggler */}
        <button
          className="navbar-toggler block lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M1 3.5h14M1 8h14M1 12.5h14"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:block lg:flex lg:items-center lg:space-x-4`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            {navItems.map(item => (
              <li key={item.key} className="nav-item">
                <ScrollLink
                  to={item.href.replace(/^#/, '')}
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  className={`nav-link cursor-pointer py-2 lg:py-0 ${activeLink === item.href.replace(/^#/, '') ? 'underline font-semibold' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            {/* Dark Mode Toggle */}
            {onDarkModeToggle && (
              <li>
                <button
                  onClick={onDarkModeToggle}
                  aria-label="Toggle Dark Mode"
                  className="ml-0 lg:ml-4 p-2"
                >
                  {darkMode ? '🌞' : '🌜'}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
