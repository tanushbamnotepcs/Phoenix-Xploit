import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const orbitronFont = { fontFamily: "'Orbitron', sans-serif" };

const navItems = [
  { label: "Home", type: "hash", to: "particle-canvas" },
  { label: "Activities", type: "hash", to: "activities" },
  { label: "Our Journey", type: "hash", to: "our-journey" },
  { label: "Members", type: "hash", to: "our-team" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleLogoClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "particle-canvas" } });
    } else {
      scrollToId("particle-canvas");
    }
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (item) => {
    if (item.type === "route") {
      navigate(item.to);
    } else if (item.type === "hash") {
      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: item.to } });
      } else {
        scrollToId(item.to);
      }
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <nav style={orbitronFont} className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between min-h-[64px] px-4 md:px-12">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={handleLogoClick}
            title="Go to Home"
          >
            <img src="/phx_logo.png" alt="Phoenix Logo" className="h-8 md:h-9" />
            <span className="text-white text-lg md:text-xl font-semibold tracking-wide drop-shadow-md">
              PHOENIX{" "}
              <small className="block text-yellow-400 text-xs font-normal tracking-widest -mt-1">
                CYBER SECURITY
              </small>
            </span>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="px-4 py-1.5 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
              <ul className="flex gap-6 list-none m-0 p-0">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <button
                      className="text-white/80 uppercase text-xs font-medium tracking-wide hover:text-blue-600 transition-colors"
                      onClick={() => handleNav(item)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <button
              className="ml-4 px-4 py-2 border border-blue-900/30 rounded text-white uppercase text-sm font-semibold tracking-wide hover:text-blue-900 hover:border-blue-900 transition-all"
              onClick={() =>
                window.location.pathname !== "/"
                  ? navigate("/", { state: { scrollTo: "contact" } })
                  : scrollToId("contact")
              }
            >
              Contact Us
            </button>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="flex flex-col md:hidden w-9 h-9 justify-center items-center z-50 relative"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 my-1 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-lg border-l border-white/20 z-40 flex flex-col items-start gap-4 px-6 py-20 transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4 w-full">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  className="block w-full text-white/80 uppercase text-base font-medium tracking-wide py-2 hover:text-blue-600 transition-colors"
                  onClick={() => {
                    setMenuOpen(false);
                    handleNav(item);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="w-full mt-4 px-4 py-2 border border-blue-900/30 rounded text-white uppercase text-base font-semibold tracking-wide text-center hover:text-blue-900 hover:border-blue-900 transition-all"
            onClick={() => {
              setMenuOpen(false);
              if (window.location.pathname !== "/") {
                navigate("/", { state: { scrollTo: "contact" } });
              } else {
                scrollToId("contact");
              }
            }}
          >
            Contact Us
          </button>
        </div>

        {/* Overlay */}
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
