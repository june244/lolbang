import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Player_List, Player_Pwd } from "../../fixture/player-list";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const onClickLogin = () => {
    const idx = Player_List.findIndex((el) => el === id);
    if (pw === Player_Pwd[idx]) {
      sessionStorage.setItem("auth", `${id}`);
      navigate("/home");
    }
  };
  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center'>
      <Grid item>
        <Card sx={{ padding: 1, width: 300 }}>
          <FormControl fullWidth>
            <Box
              component={"img"}
              src={process.env.PUBLIC_URL + "/asset/uncle3.png"}
            />
            <Typography style={{ marginBottom: 10 }}>
              내전에 참여하는 멋진 당신
            </Typography>
            <TextField
              id='demo-simple-select-label'
              value={id}
              label={"ID"}
              style={{ marginBottom: 10 }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setId(event.target.value);
              }}
            />
            <TextField
              id='demo-simple-select-label'
              value={pw}
              label={"PASSWORD"}
              type={"password"}
              style={{ marginBottom: 10 }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPw(event.target.value);
              }}
            />
            <Button fullWidth variant='contained' onClick={onClickLogin}>
              로그인
            </Button>
          </FormControl>
        </Card>
      </Grid>
    </Grid>
  );
}
