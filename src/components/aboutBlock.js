import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import * as React from "react";

export default React.forwardRef(function AboutBlock(props, ref) {
  return (
    <Grid
      item
      ref={ref}
      sx={{
        margin: "auto",
        maxWidth: `${props.block.width}px !important`,
        paddingBottom: 5,
        paddingTop: 5,
        width: "100%",
      }}
    >
      {props.block.items.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              color: item.color.color,
              marginBottom: item.marginBottom ? parseInt(item.marginBottom) : 0,
              marginTop: item.marginTop ? parseInt(item.marginTop) : 0,
            }}
          >
            {item.text.split("\n").map((t, index) => {
              return (
                <Typography
                  key={index}
                  style={{
                    fontFamily: item.fontName ? item.fontName : "Roboto",
                    lineHeight: `${item.lineHeight ? item.lineHeight : "1"}em`,
                  }}
                  variant={item.type}
                >
                  {t}
                </Typography>
              );
            })}
          </div>
        );
      })}
    </Grid>
  );
});
