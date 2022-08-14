import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import Greetings from "../containers/Greetings";
import Skills from "../containers/Skills";
import Proficiency from "../containers/Proficiency";
import Education from "../containers/Education";
import Experience from "../containers/Experience";
import Projects from "../containers/Projects";
import Feedbacks from "../containers/Feedbacks";
import GithubProfileCard from "../components/GithubProfileCard";
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import Copy from "../components/Copy";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Vaishal Parikh",
          description:
            "A passionate Full Stack Web Developer and Blockchain Developer.",
          image:
            "https://avatars.githubusercontent.com/u/86185385?s=400&u=359b93ec588618d7e70cfe5464e9611afebbbfa0&v=4",
          url: "http://vaishalparikh.tech/",
          keywords: [
            "Vaishal",
            "Vaishal Parikh",
            "@vaishalsparikh",
            "vaishalsparikh",
            "Portfolio",
            "vaishal Portfolio ",
            "vaishal parikh Portfolio",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
      <Copy />
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
