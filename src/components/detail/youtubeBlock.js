import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import * as React from "react";

export default function YoutubeBlock(props) {
  const [baseUrl, queryString] = props.block.src.url.split("?");
  let id = "";

  if (baseUrl.indexOf("youtu.be") !== -1) {
    id = baseUrl.split("/").at(-1);
  } else if (baseUrl.indexOf("/watch") !== -1 && queryString !== undefined) {
    id = queryString
      .split("&")
      .find((query) => {
        return query.split("=")[0] === "v";
      })
      .split("=")[1];
  }

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
      <Grid alignItems="center" container direction="column">
        <Grid item>
          <Card
            sx={{
              height: `${props.block.height}px`,
              width: `${props.block.width}px`,
            }}
          >
            <CardMedia
              component="iframe"
              frameBorder="0"
              src={`https://www.youtube.com/embed/${id}`}
              width="100%"
              height="100%"
            ></CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
