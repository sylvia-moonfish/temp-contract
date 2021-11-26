import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import * as React from "react";

import Storyblok from "lib/storyblok";
import ImagesBlock from "src/components/detail/imagesBlock";
import TextBlock from "src/components/detail/textBlock";
import YoutubeBlock from "src/components/detail/youtubeBlock";
import CmsError from "src/components/cmsError";
import Loading from "src/components/loading";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.detail;
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

export default function DetailPage(props) {
  const router = useRouter();

  React.useEffect(() => {
    if (!props.story) {
      router.push("/");
    }
  }, [props, router]);

  if (router.isFallback) {
    return <Loading></Loading>;
  }

  if (!props.story) {
    return <CmsError></CmsError>;
  }

  return (
    <>
      <Head>
        <title>{props.story.content.title}</title>
      </Head>
      <Grid
        item
        sx={{
          backgroundColor: "white",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
        }}
      >
        <Link href="/" passHref={true}>
          <IconButton>
            <ArrowBackIcon></ArrowBackIcon>
          </IconButton>
        </Link>
      </Grid>
      {props.story.content.blocks.map((block, index) => {
        switch (block.component) {
          case "youtubeBlock":
            return <YoutubeBlock block={block} key={index}></YoutubeBlock>;
          case "textBlock":
            return <TextBlock block={block} key={index}></TextBlock>;
          case "imagesBlock":
            return <ImagesBlock block={block} key={index}></ImagesBlock>;
        }

        return <div key={index}></div>;
      })}
    </>
  );
}
