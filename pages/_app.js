import { CacheProvider } from "@emotion/react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Head from "next/head";

import PropTypes from "prop-types";

import * as React from "react";

import createEmotionCache from "src/createEmotionCache";
import theme from "src/theme";

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
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 1,
                  }}
                  variant="text"
                >
                  Work
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 1,
                  }}
                  variant="text"
                >
                  About
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 1,
                  }}
                  variant="text"
                >
                  Awards
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 1,
                  }}
                  variant="text"
                >
                  Contact
                </Button>
              </Grid>
            </Grid>
          </Grid>
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
