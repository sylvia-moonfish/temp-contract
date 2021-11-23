import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Head from "next/head";

import * as React from "react";

export default function CmsError(props) {
  return (
    <>
      <Head>
        <title>CMS Server Error</title>
      </Head>
      <Grid
        alignItems="center"
        container
        direction="column"
        justifyContent="center"
        sx={{
          backgroundColor: "white",
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Grid item>
          <Typography variant="h3">CMS Server Error</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Server error encountered. Please try again later.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
