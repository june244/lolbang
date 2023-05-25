import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { addParticipated } from "../../../../redux/players";
import { useAppDispatch } from "../../../../hooks";

export default function Participate() {
  const auth = sessionStorage.getItem("auth") || "";
  const dispatch = useAppDispatch();

  const onClickParticipate = () => {
    dispatch(addParticipated(auth));
  };
  return (
    <Card
      sx={{
        padding: 3,
        margin: "auto",
      }}
    >
      <FormControl fullWidth>
        <Typography>내전에 참여하는 멋진 당신 : {auth}</Typography>
      </FormControl>
      <Grid container spacing={12}>
        <Grid item xs={2}>
          <Typography>PRIORITY - 1</Typography>
          <RadioGroup>
            <FormControlLabel value='TOP' control={<Radio />} label='TOP' />
            <FormControlLabel
              value='JUNGLE'
              control={<Radio />}
              label='JUNGLE'
            />
            <FormControlLabel value='MID' control={<Radio />} label='MID' />
            <FormControlLabel value='BOT' control={<Radio />} label='BOT' />
            <FormControlLabel value='SUP' control={<Radio />} label='SUP' />
          </RadioGroup>
        </Grid>
        <Grid item xs={2}>
          <Typography>PRIORITY - 2</Typography>
          <RadioGroup>
            <FormControlLabel value='TOP' control={<Radio />} label='TOP' />
            <FormControlLabel
              value='JUNGLE'
              control={<Radio />}
              label='JUNGLE'
            />
            <FormControlLabel value='MID' control={<Radio />} label='MID' />
            <FormControlLabel value='BOT' control={<Radio />} label='BOT' />
            <FormControlLabel value='SUP' control={<Radio />} label='SUP' />
          </RadioGroup>
        </Grid>
        <Grid item xs={2}>
          <Typography>PRIORITY - 3</Typography>
          <RadioGroup>
            <FormControlLabel value='TOP' control={<Radio />} label='TOP' />
            <FormControlLabel
              value='JUNGLE'
              control={<Radio />}
              label='JUNGLE'
            />
            <FormControlLabel value='MID' control={<Radio />} label='MID' />
            <FormControlLabel value='BOT' control={<Radio />} label='BOT' />
            <FormControlLabel value='SUP' control={<Radio />} label='SUP' />
          </RadioGroup>
        </Grid>
        <Grid item xs={2}>
          <Typography>PRIORITY - 4</Typography>
          <RadioGroup>
            <FormControlLabel value='TOP' control={<Radio />} label='TOP' />
            <FormControlLabel
              value='JUNGLE'
              control={<Radio />}
              label='JUNGLE'
            />
            <FormControlLabel value='MID' control={<Radio />} label='MID' />
            <FormControlLabel value='BOT' control={<Radio />} label='BOT' />
            <FormControlLabel value='SUP' control={<Radio />} label='SUP' />
          </RadioGroup>
        </Grid>
        <Grid item xs={2}>
          <Typography>PRIORITY - 5</Typography>
          <RadioGroup>
            <FormControlLabel value='TOP' control={<Radio />} label='TOP' />
            <FormControlLabel
              value='JUNGLE'
              control={<Radio />}
              label='JUNGLE'
            />
            <FormControlLabel value='MID' control={<Radio />} label='MID' />
            <FormControlLabel value='BOT' control={<Radio />} label='BOT' />
            <FormControlLabel value='SUP' control={<Radio />} label='SUP' />
          </RadioGroup>
        </Grid>
      </Grid>
      <Button fullWidth variant='contained' onClick={onClickParticipate}>
        참여
      </Button>
    </Card>
  );
}
