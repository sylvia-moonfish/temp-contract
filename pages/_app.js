import { CacheProvider } from "@emotion/react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Head from "next/head";

import PropTypes from "prop-types";

import * as React from "react";

import createEmotionCache from "src/createEmotionCache";
import theme from "src/theme";
import "styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          direction="column"
          sx={{
            backgroundColor: "#c71212",
            padding: 2,
          }}
        >
          <Component {...pageProps} />
          <Grid
            item
            sx={{
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <Grid alignItems="center" container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  sx={{
                    color: "white",
                  }}
                  variant="subtitle2"
                >
                  © All Rights Reserved.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default App;
