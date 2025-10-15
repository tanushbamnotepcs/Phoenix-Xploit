import React from 'react';
import OurMission from './OurMission';
import DepartmentHeading from './dept';
import SectionSpacer from './SectionSpacer';
import Carousel3D from './Carousel3D';
import Collaborators from './Collaborator';
import { FigmaContactForm } from './contact/FigmaContactForm';
import AboutUs from './AboutUs';
import Footer from './Footer';
import '../css/globals.css';
import '../css/carousel.css';
import '../css/ourTeam.css';
import Teamcard from './ourTeam';
import Achievements from './Achievements';
import { Journey } from './Journey';
import { ActivitiesTimeline } from './activities';

const HomeContent = () => (
	<div id="landing" className="relative w-full min-h-screen overflow-hidden justify-center items-center">
		<div className="relative z-10 flex flex-col items-center w-full">
			<AboutUs />
			<SectionSpacer size="medium" />
			<OurMission />
			<SectionSpacer size="medium" />
			<DepartmentHeading />
			<SectionSpacer size="medium" />
			<Carousel3D />
			<SectionSpacer size="medium" />
			<div id="our-team" className="w-full px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-8 text-white">Our Team</h2>
					<div className="space-y-12">
						{Object.entries(teamData).map(([categoryName, members]) => (
							<div key={categoryName} className="batch">
								<h3 className="text-2xl font-semibold mb-6 text-center text-gray-300">
									{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
								</h3>
								<div className="flex flex-wrap justify-center gap-6">
									{members.map((member, index) => (
										<Teamcard key={index} {...member} />
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<SectionSpacer size="medium" />
			<div id="activities" className="w-full">
				<ActivitiesTimeline data={timelineData} />
				<Collaborators />
			</div>
			<SectionSpacer size="medium" />
			<div id="contact" className="w-full">
				<FigmaContactForm />
			</div>
			<SectionSpacer size="medium" />
			<div id="our-journey" className="w-full">
				<Journey />
			</div>
			<SectionSpacer size="medium" />
			<div id="achievements" className="w-full pb-32">
				<Achievements />
			</div>
			
			<Footer />
		</div>
	</div>
);

const timelineData = [
	{
		title: "2024",
		content: (
			<div>
				<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
					Built and launched Aceternity UI and Aceternity UI Pro from scratch
				</p>
				<div className="grid grid-cols-2 gap-4">
					<img
						src="https://assets.aceternity.com/templates/startup-1.webp"
						alt="startup template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/templates/startup-2.webp"
						alt="startup template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/templates/startup-3.webp"
						alt="startup template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/templates/startup-4.webp"
						alt="startup template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
				</div>
			</div>
		),
	},
	{
		title: "Early 2023",
		content: (
			<div>
				<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
					I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
				</p>
				<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
					Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<img
						src="https://assets.aceternity.com/pro/hero-sections.png"
						alt="hero template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/features-section.png"
						alt="feature template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/pro/bento-grids.png"
						alt="bento template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/cards.png"
						alt="cards template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
				</div>
			</div>
		),
	},
	{
		title: "Changelog",
		content: (
			<div>
				<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
					Deployed 5 new components on Aceternity today
				</p>
				<div className="mb-8">
					<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
						✅ Card grid component
					</div>
					<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
						✅ Startup template Aceternity
					</div>
					<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
						✅ Random file upload lol
					</div>
					<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
						✅ Himesh Reshammiya Music CD
					</div>
					<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
						✅ Salman Bhai Fan Club registrations open
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<img
						src="https://assets.aceternity.com/pro/hero-sections.png"
						alt="hero template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/features-section.png"
						alt="feature template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/pro/bento-grids.png"
						alt="bento template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
					<img
						src="https://assets.aceternity.com/cards.png"
						alt="cards template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
				</div>
			</div>
		),
	},
];

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

export default HomeContent;