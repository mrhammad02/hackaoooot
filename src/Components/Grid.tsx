import { Grid } from "@mui/material";
import { useState } from "react";
export default function GridCom() {
  return (
    <>
      <Grid container>
        <Grid item md={3} xs={12} lg={3} sm={6}  >
          <h1>Block 1</h1>
        </Grid>
        <Grid item md={3} xs={12} lg={3} sm={6}>
          <h1>Block 2</h1>
        </Grid>
        <Grid item md={3} xs={12} lg={3} sm={6}>
          <h1>Block 3</h1>
        </Grid>
        <Grid item md={3} xs={12} lg={3} sm={6}>
          <h1>Block 4</h1>
        </Grid>
      </Grid>
    </>
  );
}
