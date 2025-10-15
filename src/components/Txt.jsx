import React, { useEffect, useRef } from 'react';
import '../css/Txt.css';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

function Txt({
  name = 'Ayush Benny',
  hackerName = 'LEO',
  domain = 'Web Security',
  hoverRef,
}) {
  const nameRef = useRef(null);

  useEffect(() => {
    const element = nameRef.current;
    const parent = hoverRef?.current;

    const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const scrambleText = (text) => {
      if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        gsap.to(element, {
          duration: 0.8,
          ease: 'sine.in',
          scrambleText: {
            text,
            speed: 2,
            chars: defaultChars,
          },
        });
      }
    };

    const handleEnter = () => scrambleText(name);
    const handleLeave = () => scrambleText(hackerName);

    if (parent) {
      parent.addEventListener('mouseenter', handleEnter);
      parent.addEventListener('mouseleave', handleLeave);
    }

    // Set initial value
    element.textContent = hackerName;

    return () => {
      if (parent) {
        parent.removeEventListener('mouseenter', handleEnter);
        parent.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, [name, hackerName, hoverRef]);

  return (
    <>
      <main>
        <a
          className="fluid swap-name"
          target="_blank"
          rel="noopener noreferrer"
          href="#"
          aria-label={name}
        >
          <span ref={nameRef} aria-hidden="true">{hackerName}</span>
        </a>
        <hr />
        <a
          className="fluid"
          target="_blank"
          rel="noopener noreferrer"
          href="https://craftofui.substack.com/subscribe"
          aria-label={domain}
        >
          <span aria-hidden="true">{domain}</span>
        </a>
      </main>

    </>
  );
}

export default Txt;
