import Head from "next/head";

import * as React from "react";

export default function FontBlock(props) {
  return (
    <Head>
      <link href={props.block.url.url} rel="stylesheet"></link>
    </Head>
  );
}
