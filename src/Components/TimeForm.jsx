import React, { useState, useEffect } from 'react';
import { TextField, FormControl, Grid, Paper } from '@material-ui/core';
import moment from "moment";

const TimeForm = props => {

  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(new Date()).format('HH:mm'));

  useEffect( () => {
    const dt = new Date(`${date}T${time}`);
    props.newTime(dt);
  }, [date, time]);

  return (
    <Paper style={{padding: "20px"}}>
      <h1 style={{fontWeight: "400", textAlign: "center", margin: "20px"}}>
        Enter your time!
      </h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        <FormControl>
          <TextField
            label="Date"
            type="date"
            onChange={ e => setDate(e.target.value) }
            defaultValue={ date }
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Time"
            type="time"
            onChange={ e => setTime(e.target.value) }
            defaultValue={ time }
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>
      </div>
    </Paper>
  );

}

export default TimeForm;