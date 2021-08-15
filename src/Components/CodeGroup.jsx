import React, { useState } from "react";
import { 
  TextField,
  IconButton,
  Tooltip
} from "@material-ui/core"
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';

const CodeGroup = props => {

  const [tooltip, setToolTip] = useState("Copy to Clipboard");

  const copyText = e => {
    setToolTip("Copied!");
    navigator.clipboard.writeText(props.value);
    setTimeout( () => {
      setToolTip("Copy to Clipboard");
    }, 1000);
  }

  return (
    <div style={{display: "flex", position: "relative"}}>
      <TextField 
        label={props.label}
        value={props.value} 
        variant="outlined">
      </TextField>
      <Tooltip 
        title={tooltip}
        placement="top" 
        arrow={true} >
          <IconButton 
            color="primary" 
            aria-label="directions"
            style={{position: "absolute", right: "25px", top: "3px"}}
            onClick={copyText}>
            <AssignmentReturnedIcon />
          </IconButton>
        </Tooltip>
    </div>
  );
}

export default CodeGroup;