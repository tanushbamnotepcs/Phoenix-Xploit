import React, { useState, useEffect } from 'react';

const orbitronFont = { fontFamily: "'Orbitron', sans-serif" };

// Dropdown items for "Pages"
const pagesDropdown = [
  { label: 'Our Team', href: '/our-team' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Our Journey', href: '#our-journey' },
  { label: 'Activities', href: '#activities' },
];

// Custom styles for animated underline
const underlineStyle = {
  position: 'relative',
  display: 'inline-block',
};
const underlineAfter = {
  content: "''",
  display: 'block',
  height: '2px',
  background: '#3b82f6',
  transform: 'scaleX(0)',
  transition: 'transform 0.2s',
  transformOrigin: 'left',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
};
const underlineHover = {
  color: '#60a5fa',
};
const underlineAfterHover = {
  transform: 'scaleX(1)',
};

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) setVisible(true);
      else if (currentScrollY > lastScrollY) setVisible(false);
      else setVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [menuOpen]);

  // Redirect handler for logo and text
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  // Dropdown toggle for mobile
  const handleDropdownToggle = () => setDropdownOpen((open) => !open);

  // Close dropdown on nav click (mobile)
  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Orbitron font import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <nav
        style={orbitronFont}
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-black/95 border-b border-white/10 backdrop-blur ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between min-h-[64px] px-4 md:px-8 py-2">
          {/* Logo and Title as a clickable group */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={handleLogoClick}
            title="Go to Home"
          >
            <img src="/phx_logo.png" alt="Phoenix Logo" className="h-8 md:h-9 transition-transform hover:scale-105" />
            <span className="text-white text-lg md:text-xl font-semibold tracking-wide" style={orbitronFont}>
              PHOENIX{' '}
              <small className="block text-yellow-400 text-xs font-normal tracking-widest -mt-1" style={orbitronFont}>
                CYBER SECURITY
              </small>
            </span>
          </div>
          {/* Hamburger */}
          <button
            className="flex flex-col md:hidden w-9 h-9 justify-center items-center z-50 relative"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 my-1 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </button>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 list-none m-0 p-0">
              {/* Home */}
              <li>
                <a
                  href="/"
                  className="text-white/80 uppercase text-sm font-medium tracking-wide px-1 py-2 relative transition-colors"
                  style={{
                    ...underlineStyle,
                    ...(hoveredIdx === 0 ? underlineHover : {}),
                    ...orbitronFont,
                  }}
                  onMouseEnter={() => setHoveredIdx(0)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  Home
                  <span
                    style={{
                      ...underlineAfter,
                      ...(hoveredIdx === 0 ? underlineAfterHover : {}),
                    }}
                  />
                </a>
              </li>
              {/* About us */}
              <li>
                <a
                  href="#about-us"
                  className="text-white/80 uppercase text-sm font-medium tracking-wide px-1 py-2 relative transition-colors"
                  style={{
                    ...underlineStyle,
                    ...(hoveredIdx === 1 ? underlineHover : {}),
                    ...orbitronFont,
                  }}
                  onMouseEnter={() => setHoveredIdx(1)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  About us
                  <span
                    style={{
                      ...underlineAfter,
                      ...(hoveredIdx === 1 ? underlineAfterHover : {}),
                    }}
                  />
                </a>
              </li>
              {/* Our Domains */}
              <li>
                <a
                  href="#our-domains"
                  className="text-white/80 uppercase text-sm font-medium tracking-wide px-1 py-2 relative transition-colors"
                  style={{
                    ...underlineStyle,
                    ...(hoveredIdx === 2 ? underlineHover : {}),
                    ...orbitronFont,
                  }}
                  onMouseEnter={() => setHoveredIdx(2)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  Our Domains
                  <span
                    style={{
                      ...underlineAfter,
                      ...(hoveredIdx === 2 ? underlineAfterHover : {}),
                    }}
                  />
                </a>
              </li>
              {/* Our Collaborations */}
              <li>
                <a
                  href="#our-collaborations"
                  className="text-white/80 uppercase text-sm font-medium tracking-wide px-1 py-2 relative transition-colors"
                  style={{
                    ...underlineStyle,
                    ...(hoveredIdx === 3 ? underlineHover : {}),
                    ...orbitronFont,
                  }}
                  onMouseEnter={() => setHoveredIdx(3)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  Our Collaborations
                  <span
                    style={{
                      ...underlineAfter,
                      ...(hoveredIdx === 3 ? underlineAfterHover : {}),
                    }}
                  />
                </a>
              </li>
              {/* Pages Dropdown */}
              <li className="relative group">
                <button
                  className="text-white/80 uppercase text-sm font-medium tracking-wide px-1 py-2 relative transition-colors flex items-center"
                  style={{
                    ...underlineStyle,
                    ...(hoveredIdx === 4 ? underlineHover : {}),
                    ...orbitronFont,
                  }}
                  onMouseEnter={() => setHoveredIdx(4)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setDropdownOpen((open) => !open)}
                  type="button"
                >
                  <span className="mr-1">Pages</span>
                  <svg
                    className="w-3 h-3 ml-0.5 text-blue-300 transition-transform duration-200"
                    style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    style={{
                      ...underlineAfter,
                      ...(hoveredIdx === 4 ? underlineAfterHover : {}),
                    }}
                  />
                </button>
                {/* Dropdown menu */}
                <ul
                  className={`absolute left-0 top-full mt-2 min-w-[180px] bg-black/95 border border-white/10 rounded shadow-lg py-2 z-50 transition-all ${
                    dropdownOpen ? 'block' : 'hidden'
                  } group-hover:block`}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {pagesDropdown.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-white/90 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm"
                        style={orbitronFont}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-white/80 uppercase text-sm font-medium tracking-wide px-1 py-2 relative transition-colors"
                  style={{
                    ...underlineStyle,
                    ...(hoveredIdx === 5 ? underlineHover : {}),
                    ...orbitronFont,
                  }}
                  onMouseEnter={() => setHoveredIdx(5)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  Blogs
                  <span
                    style={{
                      ...underlineAfter,
                      ...(hoveredIdx === 5 ? underlineAfterHover : {}),
                    }}
                  />
                </a>
              </li>
            </ul>
            {/* Contact Button */}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 border border-cyan-400/30 rounded text-white uppercase text-sm font-semibold tracking-wide hover:text-cyan-400 hover:border-cyan-400 transition-all"
              style={orbitronFont}
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black/95 shadow-lg z-40 flex flex-col items-start gap-4 px-6 py-20 transition-transform duration-300 md:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={orbitronFont}
        >
          <ul className="flex flex-col gap-4 w-full">
            <li>
              <a
                href="/"
                className="block w-full text-white/80 uppercase text-base font-medium tracking-wide py-2 hover:text-blue-400 transition-colors"
                style={orbitronFont}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="block w-full text-white/80 uppercase text-base font-medium tracking-wide py-2 hover:text-blue-400 transition-colors"
                style={orbitronFont}
                onClick={() => setMenuOpen(false)}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#our-domains"
                className="block w-full text-white/80 uppercase text-base font-medium tracking-wide py-2 hover:text-blue-400 transition-colors"
                style={orbitronFont}
                onClick={() => setMenuOpen(false)}
              >
                Our Domains
              </a>
            </li>
            <li>
              <a
                href="#our-collaborations"
                className="block w-full text-white/80 uppercase text-base font-medium tracking-wide py-2 hover:text-blue-400 transition-colors"
                style={orbitronFont}
                onClick={() => setMenuOpen(false)}
              >
                Our Collaborations
              </a>
            </li>
            {/* Pages Dropdown for mobile */}
            <li className="w-full">
              <button
                className="flex items-center justify-between w-full text-white/80 uppercase text-base font-medium tracking-wide py-2 hover:text-blue-400 transition-colors"
                style={orbitronFont}
                onClick={handleDropdownToggle}
                type="button"
              >
                Pages
                <svg className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="ml-4 mt-1 flex flex-col gap-1">
                  {pagesDropdown.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="block px-2 py-2 text-white/90 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-base rounded"
                        style={orbitronFont}
                        onClick={handleDropdownItemClick}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          {/* Contact Button for mobile */}
          <a
            href="#contact"
            className="w-full mt-4 px-4 py-2 border border-cyan-400/30 rounded text-white uppercase text-base font-semibold tracking-wide text-center hover:text-cyan-400 hover:border-cyan-400 transition-all"
            style={orbitronFont}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
        {/* Overlay for mobile menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;