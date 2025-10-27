import React from 'react';
import OurMission from './OurMission';
import DepartmentHeading from './dept';
import SectionSpacer from './SectionSpacer';
import Carousel3D from './Carousel3D';
import Collaborators from './Collaborator';
import { FigmaContactForm } from './contact/FigmaContactForm';
import AboutUs from './AboutUs';
import Footer from './Footer';
import VortexBackground from './VortexBackground';
import FullPageVortexBackground from './FullPageVortexBackground';
import '../css/globals.css';
import '../css/carousel.css';
import '../css/ourTeam.css';
import Teamcard from './ourTeam';
import Achievements from './Achievements';
import { Activities } from './activities';
import { Journey } from './Journey';
import { teamData } from './constants/teamdata';

const HomeContent = () => (
	<div className="relative min-h-screen">
		
		<FullPageVortexBackground />
		<div id="landing" className="relative w-full overflow-hidden justify-center items-center">
			<div className="relative z-10 flex flex-col items-center w-full">
				<DepartmentHeading />
				<AboutUs />
				<SectionSpacer size="medium" />
				<OurMission />
				<SectionSpacer size="medium" />
				<Carousel3D />
				<SectionSpacer size="medium" />
				<div id="our-team" className="w-full px-4">
					<div className="max-w-full mx-auto">
						<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">Our Team</h2>
						<div className="space-y-12">
							{Object.entries(teamData).map(([categoryName, members]) => (
								<div key={categoryName} className="batch">
									<h3 className="text-2xl font-semibold mb-6 text-center text-gray-300">
										{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
									</h3>
									<div className={`flex flex-wrap justify-center ${categoryName === 'mentors' ? 'gap-15' : 'gap-7'}`}>
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
					<Journey data={timelineData} />
					<Collaborators />
				</div>
				<SectionSpacer size="medium" />
				<div id="contact" className="w-full">
					<Activities />
				</div>
				<SectionSpacer size="medium" />
				<div id="our-journey" className="w-full">
				<Achievements />
				</div>
				<SectionSpacer size="medium" />
				<div id="achievements" className="w-full pb-32">
				<FigmaContactForm />
				</div>
				
				<Footer />
			</div>
		</div>
	</div>
);

const timelineData = [
	{
		title: "The Beginning: July 2021",
		content: (
			<div>
				<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				In the midst of the pandemic, when most activities had moved online, a group of students, driven by a deep interest in cybersecurity, came together virtually on July 9, 2021. They were determined to create a community where they could learn, share, and grow together in the field of cybersecurity. Despite the challenges posed by the virtual environment, they persisted, using online platforms to discuss ideas, share resources, and plan for the future.
				</p>
				<div className="">
					{ <img
						src="./../../public/logo.png"
						alt="startup template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/>
	}
				</div>
			</div>
		),
	},
	{
		title: "Transition to Offline: October 2021",
		content: (
			<div>
				<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				As the world began to slowly return to normalcy, so did their activities. In October 2021, when offline classes resumed, the group transitioned to in-person meetings. However, this shift was not without its challenges. They faced struggles in securing permissions to hold in-person gatherings, as the institution had to navigate protocols and restrictions. Additionally, there were logistical issues such as finding suitable venues for their meetings, coordinating schedules among members who were now juggling offline classes, and ensuring that all members felt safe and comfortable with the transition. Despite these hurdles, the group remained committed, using these challenges as an opportunity to strengthen their resolve and adaptability. After college hours, these students would often stay back to work on various technical projects, pushing the boundaries of their knowledge and capabilities. This routine continued for several months, laying a strong foundation for what was to come.
				</p>
					<img
						src="../../public/logo.png"
						alt="cards template"
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
					/> 
				</div>
		),
	},
	{
		title: "First Milestones: February 2022",
		content: (
			<div>
				<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				By February 2022, the group was ready to share their knowledge with others. They organized their first technical workshop on cybersecurity. This event was more than just a workshop; it was a testament to their hard work and the knowledge they had accumulated over the previous months. The workshop attracted a significant number of participants, eager to learn about the intricacies of cybersecurity from their peers. It also marked the group's first official step into becoming a recognized entity within the department.
				</p>
				
				<div className="">
					<img
						src="../../public/logo.png"
						alt="hero template"
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
		title: "EncipherX 1.0: March 2022",
		content: (
			<div>
				<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				The success of the workshop motivated the group to aim higher. On March 24-25, 2022, they hosted their first major event, EncipherX 1.0. This event was a comprehensive cybersecurity competition designed to test participants' skills in various areas of cybersecurity, including cryptography, network security, and ethical hacking. EncipherX 1.0 was a massive success, drawing participants from various semesters who were eager to prove their mettle in the field. This event not only showcased the technical prowess of the forum members but also established them as key players in the academic community's cybersecurity landscape.
				</p>
				<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				During this period, the forum's core members were in their 4th and 5th semesters. They focused intensively on expanding their technical knowledge, diving deep into advanced topics in cybersecurity. This period of intense learning and application of knowledge was crucial, as it prepared them for the next big step in their journey—internships.
				</p>
				
				<div className="">
					<img
						src="../../public/logo.png"
						alt="hero template"
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
		title: "Internships and Growth: Navigating the Insightful Middle Era of Cybersecurity Learning",
		content: (
			<div>
				<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				By the time they reached their 6th semester, the forum members had developed significant technical skills, which they successfully leveraged to secure internships. These internships provided them with invaluable real-world experience, allowing them to apply the theoretical knowledge they had gained in practical settings. As they moved into their 7th semester, they continued these internships, further honing their skills and contributing to their respective organizations. During this time, the forum remained active, with the members balancing their academic responsibilities, internships, and forum activities.
				</p>
				<div className="">
					<img
						src="../../public/logo.png"
						alt="hero template"
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
		title: "The Second Batch : January 2023",
		content: (
			<div>
				<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				In January 2023, the Phoenix CyberSecurity Forum welcomed its second batch of members. This new group brought fresh perspectives, ideas, and energy to the forum. With the infusion of new talent, the forum was more vibrant than ever. The senior members mentored the newcomers, sharing their knowledge and experiences, and preparing them to take the forum forward.
				</p>
				<div className="">
					<img
						src="../../public/logo.png"
						alt="hero template"
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
		title: "EncipherX 2.0 : March 2024",
		content: (
			<div>
				<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				The new semester marked another significant milestone for the forum—the organization of EncipherX 2.0 held on 4 & 5 march 2024. Building on the success of the first edition, EncipherX 2.0 was even bigger and better. It attracted even more participants and featured more complex challenges, reflecting the growing expertise of the forum members. The event was a resounding success, further establishing the Phoenix CyberSecurity Forum as a leading entity in the department.
				</p>
				<div className="">
					<img
						src="../../public/logo.png"
						alt="hero template"
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
		title: "Official Establishment:  April 2024",
		content: (
			<div>
				<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
				23 April 2024 was a landmark moment in the forum's history. After months of hard work, dedication, and success, the Phoenix CyberSecurity Forum was officially established as a recognized entity within the Department of Computer Science and Engineering [Cyber Security]. This official recognition was not just a formality; it was an acknowledgment of the forum's contributions to the department and the broader academic community. With this official status, the forum gained access to more resources, enabling it to expand its activities and impact.
				</p>
				<div className="">
					<img
						src="../../public/logo.png"
						alt="hero template"
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



export default HomeContent;