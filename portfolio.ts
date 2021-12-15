import emoji from "react-easy-emoji";

export const greetings = {
	name: "Emil Redzik",
	title: "Cześć, jestem Emil",
	shortDescription: "Pasjonat programowania, inżynierii danych i data science.",
	description:
		`Jestem pasjonatem programowania, inżynierii danych i data science. 
		Mam doświadczenie w budowaniu przepływów danych dla największych instytucji finansowych w Polsce.
		Z chęcią podejmę się realizacji projektu dla Twojej firmy.`,
	resumeLink: "https://cv.hanzla.ga",
};

export const openSource = {
	githubUserName: "eredzik",
};

export const contact = {};

export const socialLinks = {

	github: "https://github.com/eredzik",
	linkedin: "https://www.linkedin.com/in/emil-redzik/",
};

export const skillsSection = {
	title: "CZYM SIĘ ZAJMUJĘ",
	subTitle:
		"Staram się być na bieżąco z szerokim zakresem technologii by móc tworzyć najlepsze możliwe projekty dla klientów",
	skills: [
		emoji(
			"⚡ Tworzę wydajne przepływy danych za pomocą technologii hurtowni danych oraz big data"
		),
		emoji(
			"⚡ Tworzę interaktywne aplikacje webowe zarówno od strony frontendu jak i backendu"
		),
		emoji(
			"⚡ Buduję modele statystyczne i machine learningowe oraz zajmuję się ich deploymentem"
		),
	],

	softwareSkills: [

		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Jupyter-notebooks",
			fontAwesomeClassname: "vscode-icons:file-type-jupyter",
		},
		{
			skillName: "Numpy",
			fontAwesomeClassname: "vscode-icons:file-type-numpy",
		},
		{
			skillName: "PyTorch",
			fontAwesomeClassname: "logos:pytorch",
		},
		{
			skillName: "apache-spark",
			fontAwesomeClassname: "cib:apache-spark"
		},
		{
			skillName: "apache-airflow",
			fontAwesomeClassname: "cib:apache-airflow"
		},
		{

			skillName: "SAS-technologies",
			fontAwesomeClassname: "vscode-icons:file-type-sas",
		},
		{
			skillName: "Oracle",
			fontAwesomeClassname: "logos:oracle",
		},

		{
			skillName: "postgresql",
			fontAwesomeClassname: "vscode-icons:file-type-pgsql"
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},


		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},

		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},

	],
};

export const SkillBars = [
	{
		Stack: "Przetwarzanie danych", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Frontend",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Szkoła Główna Handlowa",
		subHeader: "Studia magisterskie na kierunku \"Analiza danych - Big Data\"",
		duration: "Październik 2017 - obecnie",
		desc: "Participated in the research of XXX and published 3 papers.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Harvard",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2017 - April 2019",
		desc: "Participated in the research of XXX and published 3 papers.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Stanford University",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2013 - April 2017",
		desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
		descBullets: [
			"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "Kontraktor - Inżynier danych",
		company: "PZU",
		companylogo: "/img/icons/common/pzu_logo_rgb.png",
		date: "11/2021 – Obecnie",
		desc: "Budowa procesów zasilania hurtowni danych dla procesów ubezpieczeń majątkowych.",
		descBullets: [
		],
		skills: [
			{

				skillName: "SAS-technologies",
				fontAwesomeClassname: "vscode-icons:file-type-sas",
			},
			{
				skillName: "Oracle",
				fontAwesomeClassname: "logos:oracle",
			},
			{
				skillName: "apache-spark",
				fontAwesomeClassname: "cib:apache-spark"
			},
		]

	},
	{
		role: "Kontraktor - Inżynier danych",
		company: "Accenture",
		companylogo: "/img/icons/common/Accenture.svg",
		date: "06/2021 – 10/2021",
		desc: "Współpraca w ramach budowy procesów zasilania, integracji oraz walidacji danych dla jednego z globalnych liderów w branży ubezpieczeń.",
		descBullets: [
			"Wykorzystanie algorytmów grafowych propagacji danych w ramach struktur prawnych spółek.",

		],
		skills: [
			{
				skillName: "python",
				fontAwesomeClassname: "logos:python",
			},
			{
				skillName: "palantir-foundry"
				, fontAwesomeClassname: "cib:palantir"
			},
			{
				skillName: "apache-spark",
				fontAwesomeClassname: "cib:apache-spark"
			},
		]
	},
	{
		role: "Kontraktor - Inżynier danych",
		company: "mBank",
		companylogo: "/img/icons/common/mbank.webp",
		date: "06/2018 – 06/2020",
		desc: "Rozbudowa systemu ryzyka płynności",
		skills: [
			{

				skillName: "SAS-technologies",
				fontAwesomeClassname: "vscode-icons:file-type-sas",
			},
			{
				skillName: "Oracle",
				fontAwesomeClassname: "logos:oracle",
			},
			{
				skillName: "apache-spark",
				fontAwesomeClassname: "cib:apache-spark"
			},
			{
				skillName: "python",
				fontAwesomeClassname: "logos:python",
			},
		]
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
