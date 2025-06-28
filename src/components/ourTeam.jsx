import React, { useRef } from 'react';
import '../css/ourTeam.css';
import Txt from './Txt.jsx';
import Socialcard from './Socials';

const Teamcard = ({ image, name, hackerName, description, domain, linkedin, twitter, instagram }) => {
  const cardRef = useRef(null);

  return (
    <div ref={cardRef} className="team-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt={name} className="card-image" />
          </div>
          <div className="flip-card-back">
            <div className="back-description">
              <p>{description}</p>
            </div>
            <div className="social-card">
              <Socialcard
                linkedin={linkedin}
                twitter={twitter}
                instagram={instagram}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="txt-wrapper">
        <Txt
          name={name}
          hackerName={hackerName}
          domain={domain} // ✅ domain now passed correctly
          hoverRef={cardRef}
        />
      </div>
    </div>
  );
};

export default Teamcard;
