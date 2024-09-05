// Core packages
import Image from "next/image";

// Imports
import Section from "../../structure/section";
import Container from "../../structure/container";

import SectionTitle from "../../blocks/section.title";

import BadgesBlock from "../../blocks/about.badges";
import CopyBlock from "../../blocks/about.copy";

import about from "../../../styles/scss/sections/index/about.module.scss";
import React from "react";

export default function Home() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="From an early age, my passion for creating new things has been a driving force. Immersed in the world of Frontend and Blockchain, I honed my skills and explored innovative solutions. This love for creation has shaped my career, fueling my desire to bring impactful and visually stunning projects to life. With meticulous attention to detail and a keen eye for aesthetics, I strive to craft exceptional and memorable experiences."
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image
              src="/img/mine.jpg"
              width={600}
              height={800}
              alt="Tonny Jansen"
              loading="eager"
            />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="FullStack"
              containerClass={about.container}
              iconClass={about.icon}
              icon="user"
              copy="With a strong foundation in both design and development, I am a versatile full-stack developer who thrives on creating high-quality, user-centric applications. My technical expertise spans front-end and back-end development, allowing me to build robust, scalable solutions. Alongside my coding proficiency, I bring strong leadership, time management, and multitasking skills, which have been refined through overseeing complex development projects from inception to deployment."
            />
            <CopyBlock
              title="Development and Projects"
              containerClass={about.container}
              iconClass={about.icon}
              icon="code"
              copy="I am deeply passionate about development and project execution, finding fulfillment in transforming ideas into functional, robust solutions through coding. I excel in navigating the complexities of turning concepts into reality, using meticulous planning, efficient workflows, and a sharp eye for detail. My approach ensures that projects are delivered successfully, meeting all objectives while consistently exceeding expectations."
            />
          </div>
        </section>
        <section className={about.content}>
          <div className={about.copy}>
            <CopyBlock
              title="Security and Privacy"
              containerClass={about.container}
              iconClass={about.icon}
              icon="shield-alt"
              copy="My development approach is rooted in a strong commitment to security and privacy. I prioritize the protection of sensitive data by implementing rigorous security protocols and adhering to the highest industry standards. By continuously monitoring for emerging threats and vulnerabilities, I ensure that user information remains secure. Trust and confidentiality are the pillars of my work, and I am dedicated to delivering secure, privacy-focused solutions that meet and exceed industry expectations."
            />
            <CopyBlock
              title="Constant Learning and Improvements"
              containerClass={about.container}
              iconClass={about.icon}
              icon="book"
              copy="I am committed to continuous learning and professional growth, with a strong focus on staying current with the latest industry trends and emerging technologies. This dedication enables me to remain at the forefront of innovation, consistently expanding my skill set and seeking new challenges. By embracing a mindset of constant improvement, I deliver cutting-edge solutions and provide strategic insights that drive value for clients and stakeholders."
            />

            <BadgesBlock
              title="Research and planning"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="One of the most rewarding aspects of my work is engaging in comprehensive research and strategic planning for development projects across the full-stack spectrum, including emerging technologies like Ordinals, Rune, and Web3. I am dedicated to expanding my expertise by immersing myself in the latest industry trends and advancements. Through meticulous project planning and execution, I strive to deliver exceptional digital experiences that not only exceed expectations but also achieve measurable results."
              headerIcon={`${about.icon}`}
              invertedColor={undefined}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
const methods = [
  {
    key: "rust",
    name: "Rust Learning",
    type: "",
    icon: "devicon",
  },
  {
    key: "solana",
    name: "Solana Learning",
    type: "",
    icon: "devicon",
  },
  { key: "deeplearning", name: "Deep Learning", type: "", icon: "devicon" },
  {
    key: "solidity",
    name: "Solidity Learning",
    type: "",
    icon: "devicon",
  },
];
