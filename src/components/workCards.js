import Grid from "@mui/material/Grid";

import * as React from "react";

import WorkCard from "src/components/workCard";

export default function WorkCards(props) {
  return (
    <Grid
      item
      sx={{
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <Grid container direction="row" justifyContent="center" spacing={5}>
        {props.block.workCardItems.map((workCardItem, index) => {
          return <WorkCard key={index} workCardItem={workCardItem} />;
        })}
      </Grid>
    </Grid>
  );
}
