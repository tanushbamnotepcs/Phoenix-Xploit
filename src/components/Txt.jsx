import React, { useEffect, useRef } from 'react';
import '../css/Txt.css';
import { Pane } from 'tweakpane';
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

    const config = {
      theme: 'dark',
      random: true,
    };

    const ctrl = new Pane({ title: 'Config', expanded: true });

    const update = () => {
      document.documentElement.dataset.theme = config.theme;
    };

    const sync = (event) => {
      if (
        !document.startViewTransition ||
        event.target.controller.view.labelElement.innerText !== 'Theme'
      )
        return update();
      document.startViewTransition(() => update());
    };

    ctrl.addBinding(config, 'random', { label: 'Random' });
    ctrl.addBinding(config, 'theme', {
      label: 'Theme',
      options: {
        System: 'system',
        Light: 'light',
        Dark: 'dark',
      },
    });

    ctrl.on('change', sync);
    update();

    const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const scrambleText = (text) => {
      if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        gsap.to(element, {
          duration: 0.8,
          ease: 'sine.in',
          scrambleText: {
            text,
            speed: 2,
            chars: config.random ? defaultChars : text.replace(/\s/g, ''),
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

      {/* Bear Icon */}
      <a
        className="bear-link"
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          className="w-9"
          viewBox="0 0 969 955"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20" />
          <circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20" />
          <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor" />
          <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor" />
          <path
            d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
            fill="currentColor"
          />
          <rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </>
  );
}

export default Txt;
