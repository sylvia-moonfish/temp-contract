import Grid from "@mui/material/Grid";

import * as React from "react";

import WorkCard from "src/components/workCard";

export default React.forwardRef(function WorkCards(props, ref) {
  return (
    <Grid
      item
      sx={{
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        ref={ref}
        spacing={5}
      >
        {props.block.workCardItems.map((workCardItem, index) => {
          return <WorkCard key={index} workCardItem={workCardItem} />;
        })}
      </Grid>
    </Grid>
  );
});
