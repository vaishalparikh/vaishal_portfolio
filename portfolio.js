import emoji from "react-easy-emoji";

export const greetings = {
	name: "Vaishal Parikh",
	title: "Hey There! I'm Vaishal Parikh",
	description:
		// "I'm a passionate Frontend developer having an experience of web applications with javascript, React.js, Next.js & a competitive coder solving problems on LeetCode and Codechef everyday! .",
"I am a web developer currently pursuing B.Tech in C.E. from Charusat(Charotar University of Science and Technology). I want to become a full stack developer. Right now, I am having an experience of web applications with javascript, React.js, Next.js & I also like to solve problems on LeetCode & CodeChef. ",
		resumeLink:
		"https://drive.google.com/file/d/1feU5T_zq9IyWW5su66O9AdxKjGMsHfko/view?usp=sharing",
};

export const openSource = {
	githubUserName: "vaishalsparikh",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/vaishal.parikh.1006",
	instagram: "https://www.instagram.com/_vaishal.parikh_",
	twitter: "https://twitter.com/VaishalParikh3",
	github: "https://github.com/vaishalparikh",
	linkedin: "https://www.linkedin.com/in/vaishalparikh/",
};

export const skillsSection = {
	title: "WHAT I DO ?",
	subTitle:
		"A CRAZY FRONTEND DEVELOPER YOU WILL SEE ;) ",
	data: [
		{
			title: "Frontend Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js ."
				),
				emoji("⚡ Building responsive static websites using Next.js ."),
				emoji(
					"⚡ Building RESTful APIs ."
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		// {
		// 	title: "Cloud Infra-Architecture",
		// 	lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji("⚡ Exploring How to Work with multiple cloud platforms ."),
		// 		emoji(
		// 			"⚡ Comparing various cloud platforms who provide same type of services ."
		// 		),
		// 		emoji(
		// 			"⚡ Trying to Build CI/CD pipelines for automated testing & deployment ."
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		// ? Check README To get icon details
		// 		{
		// 			skillName: "AWS",
		// 			fontAwesomeClassname: "logos:aws",
		// 		},
		// 		{
		// 			skillName: "Azure",
		// 			fontAwesomeClassname: "logos:microsoft-azure",
		// 		},
		// 		{
		// 			skillName: "Heroku",
		// 			fontAwesomeClassname: "logos:heroku-icon",
		// 		},
		// 		{
		// 			skillName: "Github",
		// 			fontAwesomeClassname: "akar-icons:github-fill",
		// 		},
		// 		{
		// 			skillName: "Docker",
		// 			fontAwesomeClassname: "logos:docker-icon",
		// 		},
		// 	],
		// },
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Exploring How to developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Exploring How to Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				// emoji(
				// 	"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				// ),
				emoji(
					"⚡ Exploring How to Work Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "40",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Charotar University of Science and Technology ,Changa",
		subHeader: "COURSE : B.Tech",
		duration: "July 2019 - May 2023",
		desc: "CGPA : 8.49(UPTO 6TH SEM).",
	},
];

export const experience = [
	{
		role: "Flutter App Development & UI/UX Design",
		company: "72FIVE TECHNOLOGIES",
		companylogo: "/img/icons/common/72Five.png",
		date: "June 2021 - July 2021",
		desc: "Worked as a UI/UX & Flutter App developer to integrate profile page and setting page.",
	},
	{
		role: "Frontend Developer",
		company: "GENXEL TECHNOLOGY PVT LTD",
		companylogo: "/img/icons/common/Genxel.jpg",
		date: "May 2022 - June 2022",
		desc: "Worked as a React Developer to integrate Food Recipe App in Genxel and Deployed it on Netlify server.",
	},
];

export const projects = [
	{
		name: "Food Recipe Website",
		desc: "With Food Recipe Website,it’s easy to find the any Food Recipe. Just Search & You are good to go !!",
		link: "https://recipe-website-vp.netlify.app/",
	},
	{
		name: "Restaurant Website",
		desc: "With Restaurant Website, it’s easy to find the Food with the best price and ship them straight to your door.",
		link: "https://restaurant-website-vp.netlify.app/",
	},
];

export const feedbacks = [
	{
		name: "Moksh Parikh",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "Hardik Gandhi",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];
