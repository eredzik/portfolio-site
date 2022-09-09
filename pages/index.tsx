import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { greetings } from "../portfolio";
import ContactForm from "../components/ContactForm";
export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Redzik Portfolio",
					description: greetings.shortDescription,
					image: "https://avatars.githubusercontent.com/u/53577889?v=4",
					url: "eredzik.com",
					keywords: [
						"Redzik",
						"Emil Redzik",
						"@eredzik",
						"eredzik",
						"Portfolio",
						"Redzik Portfolio ",
						"Redzik Emil Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"data scientist",
						"modelling",
						"data engineer",
						"data engineering",
						"data",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"reactjs ",
						"contextapi",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Experience />
			<Education />

			<GithubProfileCard prof={githubProfileData} />


			{/* <Feedbacks /> */}
			{/* <Projects /> */}
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
