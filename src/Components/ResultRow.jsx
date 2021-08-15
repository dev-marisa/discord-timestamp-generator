import React from "react";
import { 
  Grid,
  Paper
} from "@material-ui/core";

const ResultRow = props => {
  return (
    <Paper style={{padding: "20px", margin:"20px 0"}}>
      <Grid 
        container 
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3} >
        {props.children.map( (child, i) => 
            <Grid key={i} item sm={6}>
              {child}
            </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default ResultRow;