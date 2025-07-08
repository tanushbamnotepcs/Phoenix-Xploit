import React, { useState } from 'react';
import './Achievements.css';

const achievements = [
  {
    title: "Amrita inCTF 2021",
    description: "Secured All India Rank 103 in prestigious cybersecurity competition",
    icon: "🏆",
    color: "#4CAF50",
    image: "/trail.jpg"
  },
  {
    title: "Research Excellence",
    description: "Published two research papers on Packet Sniffer and Digital Forensics",
    icon: "📚",
    color: "#2196F3",
    image: "/trail.jpg"
  },
  {
    title: "VishwaCTF 2021",
    description: "Participated in national-level cybersecurity competition",
    icon: "🛡️",
    color: "#9C27B0",
    image: "/trail.jpg"
  },
  {
    title: "IIT Tech Fest 2022",
    description: "Developed innovative Alterrain and Mesh solver bots",
    icon: "🤖",
    color: "#FF9800",
    image: "/trail.jpg"
  },
  {
    title: "Octavester Project",
    description: "Designed advanced cybersecurity solutions with research paper",
    icon: "🔒",
    color: "#F44336",
    image: "/trail.jpg"
  },
  {
    title: "Colosseum CTF 2024",
    description: "Secured 2nd place in offline CTF competition",
    icon: "🎯",
    color: "#00BCD4",
    image: "/trail.jpg"
  },
  {
    title: "Trailblazzer Research",
    description: "Developed IP scanning tool and encryption analysis",
    icon: "🔍",
    color: "#E91E63",
    image: "/trail.jpg"
  },
  {
    title: "AARHANT CTF 2024",
    description: "Phoenix-Cybersecurity Forum secured top two positions",
    icon: "🌟",
    color: "#8BC34A",
    image: "/trail.jpg"
  },
  {
    title: "Hackfusion 3.0",
    description: "Secured 1st place in prestigious CTF competition at G.H. Raisoni College",
    icon: "🏅",
    color: "#795548",
    image: "/trail.jpg"
  }
];

const Achievements = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleMouseEnter = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleMouseLeave = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: false
    }));
  };

  return (
    <div className="achievements-container">
      <h1 className="achievements-title">Phoenix Cybersecurity Achievements</h1>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className={`achievement-card ${flippedCards[index] ? 'flipped' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ '--card-color': achievement.color }}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <div className="achievement-progress">
                  <div className="progress-bar" style={{ width: '75%' }}></div>
                </div>
                <div className="flip-hint">Hover to view image</div>
              </div>
              <div className="card-back">
                <img src={achievement.image} alt={achievement.title} />
                <div className="flip-hint">Hover to view details</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
