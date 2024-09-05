// Core packages
import Badges from "../../../utils/badge.list";

// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";
import Education from "./education";

export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I am a dedicated Ordinals, Rune and Full Stack Developer with a strong interest in blockchain technologies, specifically within the Web3 ecosystem. My expertise spans across both front-end and back-end development, enabling me to build comprehensive, scalable solutions. I am particularly focused on emerging decentralized protocols such as Ordinals and Rune, which are pushing the boundaries of digital asset innovation and decentralized finance (DeFi). I am deeply committed to leveraging my technical skills to contribute to the advancement of Web3, ensuring a more decentralized, user-empowered internet that aligns with the future of digital assets and decentralized applications."
        />
        <section className={career.area}>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Bitcoin & Full Stack Developer</h3>
                <h4>Permanent Full Time · Present</h4>
              </span>
              <p>
                As a Bitcoin and Full Stack Developer, my current focus is on
                complex project development, with a particular interest in
                blockchain technologies such as Bitcoin. I am dedicated to
                continuously enhancing my skills and expanding my knowledge to
                gain valuable experience in this domain. By staying updated with
                the latest industry advancements, including trends in
                decentralized technologies, I ensure that I am equipped with the
                necessary tools and techniques to tackle challenging projects.
                My primary goal is to contribute effectively to the development
                of sophisticated applications, leveraging my expertise in both
                front-end and back-end technologies. Through my commitment to
                continuous improvement, I strive to deliver high-quality
                solutions that meet the evolving needs of the industry, while
                remaining at the forefront of blockchain innovation.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={fullStack}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
        </section>
      </Container>
      <Education />
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "csharp", name: "C#", type: "devicon" },
  { key: "django", name: "Django", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "c", name: "C", type: "devicon" },
  { key: "cpp", name: "C++", type: "devicon" },
  { key: "ajax", name: "ajax", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "kotlin", name: "Kotlin", type: "devicon" },
  { key: "vuejs", name: "Vuejs", type: "devicon" },
  { key: "tailwindcss", name: "TailwindCSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "npm", name: "NPM", type: "devicon" },
  { key: "yarn", name: "Yarn", type: "devicon" },
  { key: "angularjs", name: "AngularJS", type: "devicon" },
  { key: "android", name: "Android", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
];
