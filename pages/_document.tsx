import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*
				Author: Tonny Jansen
                 GitHub: Visit the GitHub repository at https://github.com/max-tonny8/portfolio/ for more details.
                 license: MIT License
                  */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>Tonny Jansen</title>
        <meta
          name="description"
          content="Tonny Jansen - A dedicated Ordinals, Rune and Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey."
        />

        {/*These are need for PWA*/}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tonny Jansen" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        {/* <link rel="canonical" href="https://localhost:3000" /> */}
        <meta name="license" content="MIT License" />
        <meta httpEquiv="content-language" content="en-us" />

        {/* <link rel="preconnect" href="https://localhost:3000" /> */}

        {/* <link rel="dns-prefetch" href="https://localhost:3000" /> */}

        <meta name="author" content="Tonny Jansen" />

        {/* <link rel="alternate" hrefLang="en" href="https://localhost:3000" /> */}

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        <link rel="apple-touch-icon" href="/img/logo_rounded.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/logo_rounded.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.jpg"
        />
        <link
          rel="icon"
          href="/favicon/favicon-org.ico"
          type="image/x-icon"
        ></link>
        <link
          rel="shortcut icon"
          href="/favicon/favicon-org.ico"
          type="image/x-icon"
        ></link>

        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="Tonny Jansen" key="title" />
        <meta
          property="og:description"
          content="Tonny Jansen - A dedicated Ordinals, Rune and Full Stack Developer proficient in App/Web, Cloud, DevOps. Join my journey."
        />
        <meta
          property="og:image"
          content="https://jade-obvious-asp-686.mypinata.cloud/ipfs/QmV1K5hrAKfKn9iZnamVoW4sakQCjy5cZyRYzZhmMXtMpp"
        />
        <meta
          property="og:image:secure_url"
          content="https://jade-obvious-asp-686.mypinata.cloud/ipfs/QmV1K5hrAKfKn9iZnamVoW4sakQCjy5cZyRYzZhmMXtMpp"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Tonny Jansen" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="500" />
        {/* <meta property="og:url" content="https://localhost:3000" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:profile" content="https://github.com/max-tonny8" />
        <meta property="og:site_name" content="Tonny Jansen" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://twitter.com/Bat_Btc" />
        <meta name="twitter:title" content="Tonny Jansen" />
        <meta
          name="twitter:description"
          content="Tonny Jansen - A dedicated Ordinals, Rune and Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."
        />
        <meta
          name="twitter:image"
          content="https://jade-obvious-asp-686.mypinata.cloud/ipfs/QmV1K5hrAKfKn9iZnamVoW4sakQCjy5cZyRYzZhmMXtMpp"
        />
        <meta name="twitter:creator" content="https://twitter.com/Bat_Btc" />
        {/* <meta name="twitter:domain" content="https://localhost:3000" /> */}

        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="640x1136"
        />

        {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
        <meta
          name="keywords"
          content="
    Tonny Jansen, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Tonny Jansen Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Tonny Jansen Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Tonny Jansen Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Tonny Jansen DevOps, IT Portfolio, Web Developer Portfolio, Tonny Jansen Developer,
    Full Stack Engineer Tonny Jansen, Tonny Jansen Coding, Tonny Jansen IT,
    Tonny Jansen Full Stack Developer, Tonny Jansen Software Engineer, Tonny Jansen DevOps Engineer,
    Tonny Jansen Programming, Tonny Jansen Software Development, Tonny Jansen Coding Projects,
    Tonny Jansen Tech Portfolio, Tonny Jansen IT Portfolio, Tonny Jansen Software Engineer Portfolio,
    Tonny Jansen Web Developer Portfolio, Tonny Jansen DevOps Portfolio, Tonny Jansen Full Stack Engineer,
    Tonny Jansen Full Stack Developer Portfolio, Tonny Jansen Coding Portfolio, Tonny Jansen Programming Portfolio,
    Tonny Jansen Software Development Portfolio, Tonny Jansen Technology Projects,
    Tonny Jansen Computer Science, Tonny Jansen Cloud Computing, Tonny Jansen IT Professional,
    Tonny Jansen Technology Enthusiast, Tonny Jansen Computer Programmer, Tonny Jansen Code Portfolio,
    Tonny Jansen Technology Student, Tonny Jansen Software Architect,fiaz,fiaz portfolio,fiaz devops,fiaz devops engineer,
    fiaz devops portfolio,fiaz devops projects,fiaz devops specialist,fiaz devops professional,fiaz devops engineer portfolio,
    fiaz devops engineer projects,fiaz devops engineer specialist,fiaz devops engineer professional,fiaz devops engineer coding,
    fiaz devops engineer coding projects,fiaz devops engineer coding portfolio,fiaz devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

"
        />
        {/*use your own ads sense code here*/}
        <meta name="google-adsense-account" content="ca-pub-2040560600290490" />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040560600290490`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "",
          "@type": "Person",
          "name": "Tonny Jansen",
          "url": "",
          "sameAs": [
            "https://github.com/max-tonny8",
            "https://x.com/max_tonny8",
          ]
        }`,
          }}
        />

        {/*Edit this to your according FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Have you worked on any projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we recruit you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and I have also done several open-source projects as well."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Tonny Jansen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tonny Jansen is a Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. He is passionate about programming, innovation, and shaping the future. With expertise in various technologies and a strong background in software development, Tonny Jansen strives to create innovative solutions and contribute to the advancement of technology. His skill set includes proficiency in cloud computing, DevOps practices, machine learning/artificial intelligence, and design principles. Tonny Jansen is dedicated to staying up-to-date with the latest industry trends and leveraging his knowledge to drive impactful and transformative projects."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Tonny Jansen from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tonny Jansen is from Nørager, Denmark."
                }
              },
              {
                "@type": "Question",
                "name": "What does Tonny Jansen do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tonny Jansen leverages Cloud, DevOps, ML/AI, Design, and web/mobile apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
          }}
        />

        {/*Edit this to your according to your website*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://localhost:3000/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://localhost:3000/docs"
            }{
              "@type": "ListItem",
              "position": 3,
              "name": "Projects",
              "item": "https://localhost:3000/projects"
            }]
          }
        `,
          }}
        />

        {/*Edit this to your according to your website*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "NeuroLink",
            "description": "NeuroLink is a Python package that aims to provide various AI capabilities, including a image processing, audio processing, Django support, and more. It utilizes TensorFlow and other related technologies for natural language processing and AI tasks.",
            "alternateName": "neurolink",
            "url": "https://github.com/max-tonny8/neurolink",
            "logo": "",
             "sameAs": [
            ""
        ]          }
        `,
          }}
        />
        {/*theme*/}
        <Script id="theme.util.jsx" strategy="beforeInteractive">
          {`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
        </Script>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
