import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Head from "next/head";

import * as React from "react";

import Storyblok from "lib/storyblok";
import AboutBlock from "src/components/aboutBlock";
import CmsError from "src/components/cmsError";
import FontBlock from "src/components/fontBlock";
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
  const buttonStyle = {
    fontSize: 15,
    fontWeight: 500,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 1,
  };

  const workRef = React.useRef();
  const aboutRef = React.useRef();

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
          paddingTop: 15,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{
            borderBottom: "1px solid",
          }}
        >
          <Grid item>
            <Button
              onClick={() => {
                if (workRef && workRef.current) {
                  workRef.current.scrollIntoView();
                }
              }}
              sx={buttonStyle}
              variant="text"
            >
              Work
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                if (aboutRef && aboutRef.current) {
                  aboutRef.current.scrollIntoView();
                }
              }}
              sx={buttonStyle}
              variant="text"
            >
              About
            </Button>
          </Grid>
          <Grid item>
            <Button sx={buttonStyle} variant="text">
              Awards
            </Button>
          </Grid>
          <Grid item>
            <Button sx={buttonStyle} variant="text">
              Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {props.story.content.blocks.map((block, index) => {
        switch (block.component) {
          case "aboutBlock":
            return (
              <AboutBlock block={block} key={index} ref={aboutRef}></AboutBlock>
            );
          case "fontBlock":
            return <FontBlock block={block} key={index}></FontBlock>;
          case "workCardsBlock":
            return (
              <WorkCards block={block} key={index} ref={workRef}></WorkCards>
            );
        }

        return <div key={index}></div>;
      })}
    </>
  );
}
