// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges";
import CopyBlock from "../../blocks/about.copy";

// Section scss
import technical from "../../../styles/scss/sections/index/about.module.scss";

export default function Technical() {
  return (
    <Section classProp={`${technical.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hard Skills"
          subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
        />
        <section className={`${technical.content} ${technical.container}`}>
          <div className={technical.copy}>
            <CopyBlock
              title="Logical Thinking"
              icon={["fas", "chart-network"]}
              copy="With a strong foundation in both design and development, I leverage logical thinking to approach every project. I bring a unique perspective, constantly seeking innovative solutions and staying up-to-date with the latest industry trends."
              iconClass={technical.icon}
              containerClass={technical.container}
            />

            <BadgesBlock
              title="Bitcoin I love to work with"
              copy="As a self-taught programmer with a strong passion for software development, I have cultivated a deep understanding of designing intuitive interfaces and creating high-quality software products. I am particularly enthusiastic about working with Bitcoin and related technologies, leveraging tools such as VS Code and MongoDB to build innovative and secure projects. My approach combines technical expertise with a keen eye for detail, ensuring that every project I undertake meets the highest standards of functionality and user experience."
              list={bitcoin}
              block="Bitcoin"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />

            <BadgesBlock
              title="Technologies I love to build with"
              copy="As a passionate problem solver, I thrive on creating innovative solutions through coding. From front-end development to back-end systems and APIs, I embrace challenges and enjoy pushing the boundaries of what's possible."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />
          </div>
          <div className={`${technical.image} ${technical.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="data string background"
              loading="eager"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}
{
  /*Badge Block*/
}
const bitcoin = [
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "mongodb", name: "MongDB", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "github", name: "Github", type: "devicon" },
];

const tech = [
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
  { key: "cplusplus", name: "C++", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "kotlin", name: "Kotlin", type: "devicon" },
  { key: "vuejs", name: "Vuejs", type: "devicon" },
  { key: "tailwind", name: "TailwindCSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "npm", name: "npm", type: "devicon" },
  { key: "yarn", name: "Yarn", type: "devicon" },
  { key: "angularjs", name: "AngularJS", type: "devicon" },
  { key: "android", name: "Android", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
];
