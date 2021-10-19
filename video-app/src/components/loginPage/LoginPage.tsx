import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import s from "./LoginPage.module.css";
import { UserNameContext } from "../VideoChatContext";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  const { setUserName } = React.useContext(UserNameContext) || {};

  const [name, setName] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleClick = () => {
    setUserName?.(name);
  };

  return (
    <div className={s.root}>
      <Stack spacing={2}>
        <TextField
          id="user"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Login
        </Button>
      </Stack>
    </div>
  );
};

export default LoginPage;
