// components/TeamBatches.jsx
import React from 'react';
import Teamcard from '../components/ourTeam';
// import { StarsBG } from '../components/background/StarsBG';

const teamData = {
  mentors: [
    {
      name: 'Ayush Benny',
      hackerName: 'LEO',
      image: '/images/team-member.jpg',
      description: 'Frontend dev, loves animation and clean UI.',
      domain: 'Web Security',
      linkedin: 'https://linkedin.com/in/ayushbenny',
      twitter: 'https://x.com/AyushBenny7',
      instagram: 'https://www.instagram.com/_ayx6h__/',
    },
    {
      name: 'Leo Xavier',
      hackerName: 'GHOST',
      image: '/images/team-member.jpg',
      description: 'Backend specialist and system designer.',
      domain: 'System Design',
      linkedin: 'https://linkedin.com/in/leoxavier',
      twitter: 'https://twitter.com/ghost_dev',
    },
  ],
  team: [
    {
      name: 'Sarah Khan',
      hackerName: "Heyy",
      image: '/images/team-member.jpg',
      description: 'Cybersecurity analyst with a knack for forensics.',
      domain: 'Forensics',
      linkedin: 'https://linkedin.com/in/sarahkhan',
      instagram: 'https://instagram.com/sarah.forensics',
    },
    {
      name: 'Rohan Das',
      hackerName: "Arrow",
      image: '/images/team-member.jpg',
      description: 'DevOps engineer, cloud enthusiast.',
      domain: 'Cloud Infrastructure',
      linkedin: 'https://linkedin.com/in/rohandevops',
    },
    {
      name: 'Nina Patel',
      hackerName: "Hawkeye",
      image: '/images/team-member.jpg',
      description: 'UI/UX designer passionate about minimalism.',
      domain: 'UI/UX Design',
      instagram: 'https://instagram.com/ninauidesigns',
    },
  ],
};

const TeamBatches = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarsBG className="absolute inset-0 w-full h-full z-0" />
      
      <div className="relative z-10 px-4 py-8 text-white">
        {Object.entries(teamData).map(([categoryName, members]) => (
          <div key={categoryName} className="batch mb-12">
            <h2 className="text-3xl font-bold mb-4">{categoryName.toUpperCase()}</h2>
            <div className="batch-row flex flex-wrap gap-10">
              {members.map((member, index) => (
                <Teamcard key={index} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamBatches;
