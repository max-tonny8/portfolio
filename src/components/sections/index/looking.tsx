// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
// Spacing util
// Section scss
import looking from "../../../styles/scss/sections/index/looking.module.scss";
import section from "../../../styles/scss/blocks/section.title.module.scss";

export default function Looking() {
  return (
    <Section classProp={`${looking.section} borderBottom`}>
      <Container
        classProp={`${section.title} ${looking.container}`}
        spacing={["verticalXXXLrg"]}
      >
        <h4>I&apos;m currently looking for Jobs.</h4>
        <h2 className={looking.json}>Jobs : &#123;</h2>
        <h2 className={looking.jsonSub}>
          <span className={looking.highlight}>Full Stack Developer</span>,
        </h2>
        <h2 className={looking.jsonSub}>
          <span className={looking.highlight2}>
            Ordinals and Rune Developer
          </span>
        </h2>
        <h2 className={looking.jsonSub}>
          <span className={looking.highlight2}>Web3 Developer</span>
        </h2>
        <h2 className={looking.json}>&#125;</h2>
        <h4>
          I am a dedicated Ordinals, Rune and Full Stack Developer with a strong
          interest in blockchain technologies, specifically within the Web3
          ecosystem.
        </h4>
      </Container>
    </Section>
  );
}
