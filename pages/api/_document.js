import createEmotionServer from "@emotion/server/create-instance";

// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

import * as React from "react";

import createEmotionCache from "src/createEmotionCache";
import theme from "src/theme";

export default class _Document extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta content={theme.palette.primary.main} name="theme-color" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

_Document.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => {
    originalRenderPage({
      enhanceApp: function enhanceApp(App) {
        return function _enhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        };
      },
    });
  };

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      dangerouslySetInnerHTML={{
        __html: style.css,
      }}
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
