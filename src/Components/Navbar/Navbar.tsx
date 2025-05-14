// src/Components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import { Link } from 'react-scroll';
import { NavbarProps } from './Navbar.types';


const Navbar: React.FC<NavbarProps> = ({
  bgColor,
  linkColor,
  data,
  brand,
}) => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => setShowNav((s) => !s);

  return (
    <MDBNavbar expand="lg" dark style={{ backgroundColor: bgColor }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href={brand.href} style={{ color: linkColor }}>
          {brand.text}
        </MDBNavbarBrand>
        <MDBNavbarToggler
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          aria-expanded={showNav}
        >
          <MDBIcon icon="bars" fas style={{ color: linkColor }} />
        </MDBNavbarToggler>
        <MDBCollapse show={showNav} navbar>
          <ul className="navbar-nav ms-auto" role="menu">
            {data.map((label) => (
              <MDBNavbarItem key={label} role="menuitem">
                <MDBNavbarLink>
                  <Link
                    to={label.toLowerCase()}
                    smooth={false}
                    duration={800}
                    spy
                    activeClass="active"
                    style={{ color: linkColor }}
                  >
                    {label}
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            ))}
          </ul>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;