import Grid from "@mui/material/Grid";

import Image from "next/image";

import * as React from "react";

export default function ImagesBlock(props) {
  return (
    <Grid
      item
      sx={{
        backgroundColor: "white",
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
      }}
    >
      <Grid
        alignItems="center"
        container
        direction="row"
        justifyContent="center"
        spacing={5}
      >
        {props.block.images.map((image, index) => {
          return (
            <Grid item key={index}>
              <Image
                alt={image.image.alt}
                height={image.height}
                key={index}
                src={image.image.filename}
                width={image.width}
              ></Image>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
