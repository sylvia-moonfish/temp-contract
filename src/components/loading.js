import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

import Head from "next/head";

import * as React from "react";

export default function Loading(props) {
  return (
    <>
      <Head>
        <title>Loading...</title>
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
          <CircularProgress color="secondary"></CircularProgress>
        </Grid>
      </Grid>
      <LinearProgress color="secondary"></LinearProgress>
    </>
  );
}
