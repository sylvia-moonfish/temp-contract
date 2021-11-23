import Head from "next/head";

import * as React from "react";

import Storyblok from "lib/storyblok";
import CmsError from "src/components/cmsError";
import WorkCards from "src/components/workCards";

export async function getStaticProps(context) {
  const slug = "main-page";
  const params = {
    version: "published",
  };

  try {
    const { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

    return {
      props: {
        story: data ? data.story : false,
      },
      revalidate: 1,
    };
  } catch {
    return {
      props: {
        story: false,
      },
      revalidate: 1,
    };
  }
}

export default function Home(props) {
  if (!props.story) {
    return <CmsError></CmsError>;
  }

  return (
    <>
      <Head>
        <title>{props.story.content.title}</title>
      </Head>
      {props.story.content.blocks.map((block, index) => {
        switch (block.component) {
          case "workCardsBlock":
            return <WorkCards block={block} key={index}></WorkCards>;
        }

        return <></>;
      })}
    </>
  );
}
