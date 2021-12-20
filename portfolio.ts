import emoji from "react-easy-emoji";

export const greetings = {
	name: "Emil Redzik",
	title: "Cześć, jestem Emil",
	shortDescription: "Pasjonat programowania, inżynierii danych i data science.",
	description:
		`Jestem pasjonatem programowania, inżynierii danych i data science. 
		Mam doświadczenie w budowaniu przepływów danych dla największych instytucji finansowych w Polsce.
		Z chęcią podejmę się realizacji projektu dla Twojej firmy.`,
	resumeLinkEN: "/img/icons/common/EmilRedzikCV_PL.pdf",
	resumeLinkPL: "/img/icons/common/EmilRedzikCV_PL.pdf"
};

export const openSource = {
	githubUserName: "eredzik",
};

export const contact = {};

export const socialLinks = {

	github: "https://github.com/eredzik",
	linkedin: "https://www.linkedin.com/in/emil-redzik/",
	email_link: "mailto:kontakt@eredzik.com"
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
		Stack: "Data science",
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
		desc: "Praca magisterska na temat aktualnego stanu wiedzy na temat modelowania statystycznego danych grafowych.",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Szkoła Główna Handlowa",
		subHeader: "Studia licencjackie na kierunku \"Metody ilościowe w ekonomii i systemy informacyjne\"",
		duration: "Październik 2014 - Czerwiec 2017",
		desc: "Praca licencjacka nt. \"Porównanie skuteczności modeli CAPM i Famy- Frencha do oceny ryzyka inwestycyjnego na polskiej giełdzie\"",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		key: "pzu-de",
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
				skillName: "git",
				fontAwesomeClassname: "logos:git-icon",
			},
			{
				skillName: "svn",
				fontAwesomeClassname: "file-icons:svn",
			},
			{
				skillName: "linux",
				fontAwesomeClassname: "cib:linux",
			},


		]

	},
	{
		key: "acn-de",
		role: "Kontraktor - Inżynier danych",
		company: "Accenture",
		size: "80%",
		companylogo: "/img/icons/common/Accenture.svg",
		date: "06/2021 – 10/2021",
		desc: "Budowa procesów zasilania, integracji i walidacji danych dla jednego z globalnych liderów w branży ubezpieczeń.",
		descBullets: [


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
			{
				skillName: "git",
				fontAwesomeClassname: "logos:git-icon",
			},
		]
	},
	{
		key: "mbank-de",
		role: "Kontraktor - Inżynier danych",
		company: "mBank",
		size: "70%",
		companylogo: "/img/icons/common/mbank.webp",
		date: "06/2019 – 05/2021",
		desc: "Rozwój i utrzymanie systemów do liczenia i raportowania bieżącego ryzyka płynności",
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
			{
				skillName: "git",
				fontAwesomeClassname: "logos:git-icon",
			},
			{
				skillName: "linux",
				fontAwesomeClassname: "cib:linux",
			},
		],
	},
	{
		key: "pko-ds",
		role: "Inżynier danych, data scientist",
		company: "PKO",
		size: "60%",
		companylogo: "/img/icons/common/Logotyp_PKO_BP.svg",
		date: "02/2018 – 05/2019",
		desc: "Przebudowa procesu liczenia bazy klientów pre-approved skutkująca zwiększeniem sprzedaży kredytów przy jednoczesnym braku podwyższenia poziomu ryzyka tej populacji.",
		skills: [
			{

				skillName: "SAS-technologies",
				fontAwesomeClassname: "vscode-icons:file-type-sas",
			},
			{
				skillName: "python",
				fontAwesomeClassname: "logos:python",
			},
			{
				skillName: "git",
				fontAwesomeClassname: "logos:git-icon",
			},
			{
				skillName: "linux",
				fontAwesomeClassname: "cib:linux",
			},
		]
	},
	{
		key: "bp-ds",
		role: "Młodszy analityk danych",
		company: "Bank Pocztowy",
		size: "90%",
		companylogo: "/img/icons/common/logo-bank-pocztowy.png",
		date: "01/2017 – 01/2018",
		desc: "Budowa procesów zasilających wewnętrzne repozytoria danych, raportowanie zarządcze portfela kredytowego, budowa narzędzi wspierających modelowanie ryzyka kredytowego, budowa algorytmu optymalizującego siatki cenowe klientów.",
		skills: [
			{

				skillName: "SAS-technologies",
				fontAwesomeClassname: "vscode-icons:file-type-sas",
			},
			{
				skillName: "python",
				fontAwesomeClassname: "logos:python",
			},
			{
				skillName: "Microsoft-SQL-server",
				fontAwesomeClassname: "simple-icons:microsoftsqlserver",
			},
			{
				skillName: "linux",
				fontAwesomeClassname: "cib:linux",
			},
		]

	},
	{
		key: "pzu-dba",
		role: "Młodszy administrator baz danych",
		company: "PZU",
		companylogo: "/img/icons/common/pzu_logo_rgb.png",
		date: "12/2015 – 12/2016",
		desc: "Utrzymanie hurtowni danych, budowa narzędzi automatyzujących pracę deweloperów, przygotowywanie wdrożeń, środowisk.",
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
				skillName: "svn",
				fontAwesomeClassname: "file-icons:svn",
			},
			{
				skillName: "linux",
				fontAwesomeClassname: "cib:linux",
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
