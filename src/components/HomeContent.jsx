import React from 'react';
import OurMission from './OurMission';
import DepartmentHeading from './dept';
import SectionSpacer from './SectionSpacer';
import Carousel3D from './Carousel3D';
import Collaborators from './Collaborator';
import { FigmaContactForm } from './contact/FigmaContactForm';
import PhoenixParticlesBackground from './background/PhoenixParticlesBackground';
import AboutUs from './AboutUs';
import Footer from './Footer';
import '../css/globals.css';
import '../css/carousel.css';
import Teamcard from './ourTeam';
import Achievements from './Achievements';
import { Journey } from './Journey';
import { Timeline } from './activities';

const HomeContent = () => (
	<div id="landing" className="relative w-screen min-h-screen overflow-hidden justify-center items-center">
		<PhoenixParticlesBackground />
		<div className="relative z-10 flex flex-col items-center w-full">
			<AboutUs />
			<SectionSpacer size="xs" />
			<OurMission />
			<SectionSpacer size="xs" />
			<DepartmentHeading />
			<SectionSpacer size="xs" />
			<Carousel3D />
			<div id="activities" className="w-full">
				<Timeline data={timelineData} />
				<Collaborators />
			</div>
			<SectionSpacer size="xs" />
			<div id="contact" className="w-full">
				<FigmaContactForm />
			</div>
			<SectionSpacer size="medium" />
			<div id="our-journey" className="w-full">
				<Journey />
			</div>
			<div id="achievements" className="w-full">
				<Achievements />
			</div>
			
			<Footer />
		</div>
	</div>
);

const timelineData = [
	{
		title: "EncipherX 1.0 – March 2022",
		content: (
			<div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl space-y-2">
				<p>Held on 24–25 March 2022, EncipherX 1.0 marked the first flagship cybersecurity event organized by the Phoenix Cyber Security Forum. It combined interactive workshops with hands-on competitions.</p>
				<p><strong>Topics Covered:</strong></p>
				<ul className="list-disc list-inside ml-4">
					<li>Ethical Hacking</li>
					<li>Linux Administration</li>
					<li>Web Development</li>
				</ul>
				<p><strong>Ethical Hacking:</strong> Explore the mindset and tactics of ethical hackers using tools like Nmap, Wireshark, and Metasploit. Hands-on labs emphasized legal boundaries and real-world scenarios.</p>
				<p><strong>Linux Administration:</strong> Learn user and permission management, firewall configuration, and shell scripting for server security.</p>
				<p><strong>Web Development:</strong> Basics of HTML, CSS, JS, and backend using Node.js. Deployment of secure and scalable apps.</p>
				<p>Participants solved cybersecurity challenges involving cryptography, reconnaissance, and exploitation.</p>
			</div>
		),
	},
	{
		title: "EncipherX 2.0 – March 2024",
		content: (
			<div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl space-y-2">
				<p>Held on 4–5 March 2024, EncipherX 2.0 introduced infrastructure-based modules and DevSecOps practices.</p>
				<p><strong>Topics Covered:</strong></p>
				<ul className="list-disc list-inside ml-4">
					<li>Web Development</li>
					<li>Linux Administration</li>
					<li>Ethical Hacking</li>
					<li>Ansible</li>
					<li>Jenkins</li>
					<li>Digital Forensics</li>
				</ul>
				<p>Each workshop emphasized practical labs, secure configurations, and automation for modern cyber environments. Participation doubled from the previous edition.</p>
			</div>
		),
	},
	{
		title: "EncipherX 3.0 – TECHNEX-25 Edition – March 2025",
		content: (
			<div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl space-y-2">
				<p>This four-day event featured immersive workshops and a 24-hour CTF competition with over 90+ challenges.</p>
				<p><strong>CTF Domains:</strong></p>
				<ul className="list-disc list-inside ml-4">
					<li>Cryptography</li>
					<li>Forensics</li>
					<li>Reverse Engineering</li>
					<li>Web Exploitation</li>
					<li>Binary Analysis</li>
				</ul>
				<p>The event ended with mentorship sessions, a ₹40,000 prize pool, and real-time leaderboards.</p>
			</div>
		),
	},
	{
		title: "Workshops Conducted",
		content: (
			<div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl space-y-4">
				<div>
					<p><strong>Linux Administration Workshop</strong><br />
					<em>Speakers:</em> Ayush Benny, Tanush Bamnote – <em>Participation:</em> 36</p>
					<ul className="list-disc list-inside ml-4">
						<li>File & Directory Management</li>
						<li>User Permissions & Root Access</li>
						<li>Network Configuration</li>
						<li>Firewall Setup</li>
					</ul>
				</div>
				<div>
					<p><strong>Ethical Hacking Workshop</strong><br />
					<em>Speakers:</em> Anshul Vairagade, Vedant Ghubade – <em>Participation:</em> 67</p>
					<ul className="list-disc list-inside ml-4">
						<li>Reconnaissance using NMAP</li>
						<li>Hack the Box Challenge (Crocodile)</li>
						<li>Session Hijacking & SQLMAP Automation</li>
						<li>Insights into the Dark Web</li>
					</ul>
				</div>
				<div>
					<p><strong>Android Exploitation Workshop</strong><br />
					<em>Speaker:</em> Amit Prajapati – <em>Participation:</em> 54</p>
					<ul className="list-disc list-inside ml-4">
						<li>Android Security & Pentesting Techniques</li>
						<li>APK Virus Demo</li>
						<li>DIVA APK Lab Exploitation</li>
					</ul>
				</div>
				<div>
					<p><strong>Web Security Workshop</strong><br />
					<em>Speaker:</em> Firdous Khan – <em>Participation:</em> 45</p>
					<ul className="list-disc list-inside ml-4">
						<li>Kali Linux & TryHackMe Labs</li>
						<li>GOBUSTER Usage</li>
						<li>Cybersecurity Career Insights</li>
					</ul>
				</div>
				<div>
					<p><strong>Mobile Security Awareness Seminar</strong><br />
					<em>Conducted by:</em> Onkar Sinha & Amit Prajapati</p>
					<ul className="list-disc list-inside ml-4">
						<li>Threats: Phishing, Fake Apps, Insecure WiFi</li>
						<li>Device Hardening: 2FA, App Permissions</li>
						<li>Student Q&A on Digital Hygiene</li>
					</ul>
					<p>This seminar reached college and school students, boosting cybersecurity awareness in the community.</p>
				</div>
			</div>
		),
	},
];

export default HomeContent;