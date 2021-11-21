import { CacheProvider } from "@emotion/react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";

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
        <title>TITLE</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
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
