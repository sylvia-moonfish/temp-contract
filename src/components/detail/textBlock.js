import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import * as React from "react";

function mapTextWithMark(text, marks, index) {
  if (!marks || marks.length === 0) {
    return text;
  }

  switch (marks[0].type) {
    case "bold":
      return <b key={index}>{mapTextWithMark(text, marks.slice(1), index)}</b>;
    case "italic":
      return <i key={index}>{mapTextWithMark(text, marks.slice(1), index)}</i>;
    case "strike":
      return <s key={index}>{mapTextWithMark(text, marks.slice(1), index)}</s>;
    case "underline":
      return <u key={index}>{mapTextWithMark(text, marks.slice(1), index)}</u>;
  }

  return mapTextWithMark(text, marks.slice(1), index);
}

function mapContent(content, index) {
  switch (content.type) {
    case "bullet_list":
      return (
        <Typography component="ul" key={index} variant="body1">
          {content.content.map(mapContent)}
        </Typography>
      );
    case "heading":
      return (
        <Typography
          component="div"
          key={index}
          variant={`h${content.attrs.level}`}
        >
          {content.content.map(mapContent)}
        </Typography>
      );
    case "horizontal_rule":
      return <Divider key={index}></Divider>;
    case "list_item":
      return (
        <Typography component="li" key={index} variant="body1">
          {content.content.map(mapContent)}
        </Typography>
      );
    case "ordered_list":
      return (
        <Typography component="ol" key={index} variant="body1">
          {content.content.map(mapContent)}
        </Typography>
      );
    case "paragraph":
      return (
        <Typography component="div" key={index} variant="body1">
          {content.content.map(mapContent)}
        </Typography>
      );
    case "text":
      return mapTextWithMark(content.text, content.marks, index);
  }

  return <div key={index}></div>;
}

export default function TextBlock(props) {
  return (
    <Grid
      item
      sx={{
        backgroundColor: "white",
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 5,
      }}
    >
      {props.block.text.content.map(mapContent)}
    </Grid>
  );
}
