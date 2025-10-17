import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Particles from "react-tsparticles";

const orbitronFont = { fontFamily: "'Orbitron', sans-serif" };

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Increment every time the component mounts (i.e., on every browser load)
    let count = parseInt(localStorage.getItem("phoenix_visit_count") || "0", 10);
    count += 1;
    localStorage.setItem("phoenix_visit_count", count);
    setVisitCount(count);
  }, []);

  return (
    <>
      <footer
        className="relative border-t border-white/10 text-white px-4 md:px-12 py-7 md:py-9 lg:py-11 overflow-hidden"
        style={{...orbitronFont, width: '100vw'}}
      >
        {/* Particles (behind glass) */}
        <Particles
          id="footer-particles"
          options={{
            background: { color: { value: "transparent" } },
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.25 },
              size: { value: 2 },
              move: { enable: true, speed: 0.8 },
              line_linked: { enable: false },
            },
            interactivity: {
              events: { onhover: { enable: false }, onclick: { enable: false } },
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Glass gradient overlay (subtle red-blue) */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(135deg, rgba(150, 0, 0, 0.12), rgba(0, 80, 255, 0.12))",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-7 md:gap-5 lg:gap-7 justify-between relative z-10">
          {/* ── Section 1: Logo & Counter ── */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-6 md:mb-0 relative">
            {/* Larger Logo */}
            <img src="/logo.png" alt="Phoenix Logo" className="h-24 mb-3" />
            {/* Counter Box */}
            <div
              className={`
                        bg-white/10 rounded-lg px-6 py-4 shadow text-center
                        md:absolute md:left-0 md:bottom-[-5px] md:ml-2
                        w-full md:w-[220px]
                        mt-3 md:mt-0 
                      `}
              style={{ minHeight: "90px" }}
            >
              <span className="block text-xs text-white/70 mb-2">Website Visits</span>

              {/* Counter embed */}
              <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://hitwebcounter.com/counter/counter.php?page=21080993&style=0010&nbdigits=5&type=page&initCount=0"
                  title="Counter Widget"
                  alt="Visit counter For Websites"
                  style={{
                    border: 0,
                    display: "block",
                    margin: "0 auto",
                    width: "180px",
                    height: "48px"
                  }}
                />
              </a>
            </div>

          </div>

          {/* ── Section 2: Map & Address ── */}
          <div className="flex flex-col items-center w-full md:w-1/3 mb-6 md:mb-0">
            <div className="w-full h-40 md:h-32 rounded-lg overflow-hidden shadow mb-3">
              <iframe
                title="Phoenix Club Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6984813456606!2d79.04494277508023!3d21.0047202806386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bdace6463223%3A0xe6aaf18aff27bd18!2sPhoenix%20CyberSecurity!5e0!3m2!1sen!2sin!4v1750084919913!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <address className="not-italic text-center text-sm text-white/80">
              Phoenix CyberSecurity
              <br />
              St.&nbsp;Vincent Pallotti College of Engineering and Technology
              <br />
              Nagpur, Maharashtra, India
            </address>
          </div>

          {/* ── Section 3: Socials ── */}
          <div className="flex flex-col items-center md:items-end w-full md:w-1/3 md:mt-[5px]">
            <h3 className="text-cyan-400 font-semibold mb-2 text-lg">Connect with us</h3>
            {/* Contact Section */}
            <div className="mb-4 text-sm text-white/80 text-center md:text-right">
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:phoenixcybersec008@gmail.com"
                  className="underline hover:text-cyan-400"
                >
                  phoenixcybersec008@gmail.com
                </a>
              </div>
              <div>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+919284689196"
                  className="underline hover:text-cyan-400"
                >
                  +91 9284689196
                </a>
              </div>
            </div>
            <div className="mb-1 text-xs text-white/60 font-semibold tracking-wide uppercase text-center md:text-right ">
              Our socials
            </div>
            <StyledWrapper>
              <ul className="example-2">
                <li className="icon-content">
                  <a href="https://www.linkedin.com/company/phoenix-cybersec/" aria-label="LinkedIn" data-social="linkedin" target="_blank" rel="noopener noreferrer">
                    <div className="filled" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor" />
                    </svg>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </li>
                <li className="icon-content">
                  <a href="https://discord.gg/j6C9YSU86D" aria-label="Discord" data-social="discord" target="_blank" rel="noopener noreferrer">
                    <div className="filled" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.074.074 0 0 0-.079.037c-.342.607-.724 1.396-.99 2.021a18.524 18.524 0 0 0-5.59 0 12.51 12.51 0 0 0-.995-2.021.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.369a.069.069 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.082.082 0 0 0 .031.056c2.104 1.548 4.13 2.488 6.102 3.115a.077.077 0 0 0 .084-.027c.472-.65.893-1.34 1.248-2.065a.076.076 0 0 0-.041-.104c-.662-.251-1.293-.549-1.899-.892a.077.077 0 0 1-.008-.127c.127-.096.254-.197.373-.299a.074.074 0 0 1 .077-.01c3.967 1.813 8.27 1.813 12.193 0a.073.073 0 0 1 .078.009c.12.102.246.203.374.299a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.9.892.076.076 0 0 0-.04.105c.36.724.782 1.414 1.247 2.064a.076.076 0 0 0 .084.028c1.978-.627 4.004-1.567 6.107-3.115a.077.077 0 0 0 .03-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" fill="currentColor" />
                    </svg>
                  </a>
                  <div className="tooltip">Discord</div>
                </li>
                <li className="icon-content">
                  <a href="https://www.instagram.com/phoenix_cybersec/" aria-label="Instagram" data-social="instagram" target="_blank" rel="noopener noreferrer">
                    <div className="filled" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" fill="currentColor" />
                    </svg>
                  </a>
                  <div className="tooltip">Instagram</div>
                </li>
                <li className="icon-content">
                  <a href="https://www.youtube.com/@phoenixcybersec1673" aria-label="Youtube" data-social="youtube" target="_blank" rel="noopener noreferrer">
                    <div className="filled" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" fill="currentColor" />
                    </svg>
                  </a>
                  <div className="tooltip">Youtube</div>
                </li>
              </ul>
            </StyledWrapper>
          </div>
        </div>
      </footer>
      {/* Add a thin line and copyright below the footer */}
      <div className="border-t border-white/20 bg-black/95" style={{width: '100vw'}}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-2 text-xs text-center text-white/60" style={orbitronFont}>
          &copy; {new Date().getFullYear()} Phoenix CyberSecurity Club
        </div>
      </div>
    </>
  );
};

// StyledWrapper for Social Icons Tooltip
const StyledWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }
  .example-2 .icon-content {
    position: relative;
    padding: 0.5rem;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 10px);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    white-space: nowrap;
    background: #222;
    transition: all 0.3s ease;
    z-index: 10;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
    color: white;
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
    z-index: 0;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }
  .example-2 .icon-content a[data-social="linkedin"] .filled,
  .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0274b3;
  }
  .example-2 .icon-content a[data-social="github"] .filled,
  .example-2 .icon-content a[data-social="github"] ~ .tooltip {
    background-color: #24262a;
  }
  .example-2 .icon-content a[data-social="discord"] .filled,
  .example-2 .icon-content a[data-social="discord"] ~ .tooltip {
    background-color: #5865F2;
  }
  .example-2 .icon-content a[data-social="instagram"] .filled,
  .example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
    background: linear-gradient(
      45deg,
      #405de6,
      #5b51db,
      #b33ab4,
      #c135b4,
      #e1306c,
      #fd1f1f
    );
  }
  .example-2 .icon-content a[data-social="youtube"] .filled,
  .example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
    background-color: #ff0000;
  }
`;

export default Footer;
