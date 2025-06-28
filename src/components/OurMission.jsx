import React from 'react';
import MissionCard from './MissionCard';

const cards = [
	{
		title: 'OUR MISSION',
		text: 'To empower students with cutting-edge cybersecurity knowledge and practical skills, fostering a community of ethical hackers and security professionals who contribute to a safer digital world.',
	},
	{
		title: 'OUR VISION',
		text: 'To be recognized as a leading student-run cybersecurity organization that shapes the next generation of security professionals and contributes to global cybersecurity awareness.',
	},
];

const Mission = () => {
	return (
		<section className="flex justify-center px-4 pt-4 md:pt-8 lg:pt-12 pb-4 md:pb-8 lg:pb-12">
			<div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 sm:gap-8 lg:gap-20 scale-[0.95] sm:scale-100 w-full max-w-7xl">
				{cards.map((card, index) => (
					<MissionCard key={index} title={card.title} text={card.text} />
				))}
			</div>
		</section>
	);
};

export default Mission;