// components/TeamBatches.jsx
import React from 'react';
import Teamcard from '../components/ourTeam';

const teamData = {
  batch1: [
    {
      name: 'Ayush Benny',
      hackerName: 'LEO',
      image: '../images/pic1.jpg',
      description: 'Frontend dev, loves animation and clean UI.',
      domain: 'Web Security',
      linkedin: 'https://linkedin.com/in/ayushbenny',
      twitter: 'https://x.com/AyushBenny7',
      instagram: 'https://www.instagram.com/_ayx6h__/',
    },
    {
      name: 'Leo Xavier',
      hackerName: 'GHOST',
      image: '../images/pic2.jpg',
      description: 'Backend specialist and system designer.',
      domain: 'System Design',
      linkedin: 'https://linkedin.com/in/leoxavier',
      twitter: 'https://twitter.com/ghost_dev',
    },
  ],

  batch2: [
    {
      name: 'Sarah Khan',
      hackerName: "Heyy",
      image: '../images/pic3.jpg',
      description: 'Cybersecurity analyst with a knack for forensics.',
      domain: 'Forensics',
      linkedin: 'https://linkedin.com/in/sarahkhan',
      instagram: 'https://instagram.com/sarah.forensics',
    },
    {
      name: 'Rohan Das',
      hackerName: "Arrow",
      image: '../images/pic4.jpg',
      description: 'DevOps engineer, cloud enthusiast.',
      domain: 'Cloud Infrastructure',
      linkedin: 'https://linkedin.com/in/rohandevops',
    },
  ],
  batch3: [
    {
      name: 'Nina Patel',
      hackerName: "Hawkeye",
      image: '../images/pic5.jpg',
      description: 'UI/UX designer passionate about minimalism.',
      domain: 'UI/UX Design',
      instagram: 'https://instagram.com/ninauidesigns',
    },
  ],
};

const TeamBatches = () => {
  return (
    <div className="batches-wrapper">
      {Object.entries(teamData).map(([batchName, members]) => (
        <div key={batchName} className="batch">
          <h2>{batchName.toUpperCase()}</h2>
          <div className="batch-row">
            {members.map((member, index) => (
              <Teamcard key={index} {...member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamBatches;
