import Head from "next/head";
import React from "react";

export default function TitleDocs() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        name="description"
        content="Explore a collection of documentation for my Open Source projects authored by Tonny Jansen, covering various technology topics."
      />

      {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
      <meta
        name="keywords"
        content="Tonny Jansen, Documentation, Technology, Software, Guides, Tutorials, Developer"
      />
      <title>Documentations | Tonny Jansen</title>
    </Head>
  );
}
