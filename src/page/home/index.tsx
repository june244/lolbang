import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Player_List } from "../../fixture/player-list";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import PlayerList from "./components/playerList";
import Participate from "./components/participate";

function not(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: readonly string[], b: readonly string[]) {
  return [...a, ...not(b, a)];
}

export default function Home() {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth") || "";
  const [player, setPlayer] = React.useState<string>(Player_List[0]);
  const [checked, setChecked] = React.useState<readonly string[]>([]);
  const [left, setLeft] = React.useState<readonly string[]>(Player_List);
  const [right, setRight] = React.useState<readonly string[]>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleChangePlayer = (event: SelectChangeEvent) => {
    setPlayer(event.target.value as string);
  };

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: readonly string[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: readonly string[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: readonly string[]) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              "aria-label": "all items selected",
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 300,
          height: 800,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component='div'
        role='list'
      >
        {items.map((value: string) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role='listitem'
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
      </List>
      <Button
        fullWidth
        variant='contained'
        sx={{
          backgroundColor: title === "Red" ? "red" : "blue",
        }}
      >
        {title} WIN
      </Button>
    </Card>
  );

  React.useEffect(() => {
    if (!auth || auth === "") {
      navigate("/login");
    }
  }, [auth]);

  return (
    <Container style={{ padding: 10 }}>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        marginBottom={5}
      >
        <Grid item>
          <Participate />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item>
          <PlayerList title={"TODAY MEMBER"} items={Player_List} />
        </Grid>
        <Grid item>{customList("Red", left)}</Grid>
        <Grid item>
          <Grid container direction='column' alignItems='center'>
            <Button
              sx={{ my: 0.5 }}
              variant='outlined'
              size='small'
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label='move selected right'
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant='outlined'
              size='small'
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label='move selected left'
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList("Blue", right)}</Grid>
      </Grid>
    </Container>
  );
}
