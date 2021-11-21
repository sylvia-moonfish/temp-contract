import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Image from "next/image";

import * as React from "react";

const MenuButton = styled(Button)(({ theme }) => ({
  fontSize: 17,
  fontWeight: 500,
  padding: "5px 40px 5px 40px",
}));

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: "#C71212",
        padding: "20px",
      }}
    >
      <Grid
        item
        sx={{
          backgroundColor: "white",
          padding: "120px 40px 0px 40px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{
            borderBottom: "solid 1px",
          }}
        >
          <Grid item>
            <MenuButton variant="text">Work</MenuButton>
          </Grid>
          <Grid item>
            <MenuButton variant="text">About</MenuButton>
          </Grid>
          <Grid item>
            <MenuButton variant="text">Awards</MenuButton>
          </Grid>
          <Grid item>
            <MenuButton variant="text">Contact</MenuButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          backgroundColor: "white",
          padding: "20px 0px 0px 0px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          spacing={5}
          sx={{
            padding: "0px 40px 0px 40px",
          }}
        >
          <Grid item>
            <Card
              sx={{
                height: 400,
                width: 400,
              }}
            >
              <CardMedia
                component="img"
                image="https://static.wixstatic.com/media/988fd0_8dba5c6fe850418fa5466ae5b8f5e64b~mv2.gif/v1/fill/w_432,h_432,q_90/988fd0_8dba5c6fe850418fa5466ae5b8f5e64b~mv2.gif"
              ></CardMedia>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                height: 400,
                width: 400,
              }}
            >
              <CardMedia
                component="img"
                image="https://static.wixstatic.com/media/988fd0_8f509621e9914778bb43a8a9aedb7916~mv2.gif/v1/fill/w_432,h_432,q_90/988fd0_8f509621e9914778bb43a8a9aedb7916~mv2.gif"
              ></CardMedia>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                height: 400,
                width: 400,
              }}
            >
              <CardMedia
                component="img"
                image="https://static.wixstatic.com/media/988fd0_3b96607efad4416a8061ba584df8c833~mv2.gif/v1/fill/w_432,h_432,q_90/988fd0_3b96607efad4416a8061ba584df8c833~mv2.gif"
              ></CardMedia>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                height: 400,
                width: 400,
              }}
            >
              <CardMedia
                component="img"
                image="https://static.wixstatic.com/media/988fd0_f4e10315f2c64e29a2b2549e39f01473~mv2.gif/v1/fill/w_432,h_432,q_90/988fd0_f4e10315f2c64e29a2b2549e39f01473~mv2.gif"
              ></CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          backgroundColor: "white",
          padding: "20px 0px 0px 20px",
        }}
      ></Grid>
    </Grid>
  );
}
