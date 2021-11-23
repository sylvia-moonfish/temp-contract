import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";

import Link from "next/link";

import * as React from "react";

export default function WorkCard(props) {
  const [showTitle, setShowTitle] = React.useState(false);
  const containerRef = React.useRef(null);

  return (
    <Link
      href={props.workCardItem.url ? props.workCardItem.url : ""}
      passHref={true}
    >
      <Grid
        item
        onMouseEnter={() => {
          setShowTitle(true);
        }}
        onMouseLeave={() => {
          setShowTitle(false);
        }}
      >
        <Card
          ref={containerRef}
          sx={{
            cursor: props.workCardItem.url ? "pointer" : "default",
            position: "relative",
            height: 400,
            width: 400,
          }}
        >
          <CardMedia
            component="img"
            image={props.workCardItem.image.filename}
          ></CardMedia>
          <Slide
            container={containerRef.current}
            direction={props.workCardItem.slideDirection}
            in={showTitle}
          >
            <Box
              component="svg"
              sx={{
                height: 400,
                left: 0,
                position: "absolute",
                top: 0,
                width: 400,
              }}
            >
              <Box
                component="polygon"
                points="0,0 0,400 400,400 400,0"
                sx={{
                  fill: props.workCardItem.color.color,
                }}
              ></Box>
              <text
                dominantBaseline="middle"
                fill="#eeeeeefa"
                fontFamily="Roboto"
                fontSize="25"
                fontWeight="250"
                textAnchor="middle"
                x="50%"
                y="50%"
              >
                {props.workCardItem.title}
              </text>
            </Box>
          </Slide>
        </Card>
      </Grid>
    </Link>
  );
}
