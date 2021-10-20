import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import s from "./LoginPage.module.css";
import { WSSContext } from "../WSSContext";
import { useHistory } from "react-router-dom";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  const { push } = useHistory();

  const { userSocket } = React.useContext(WSSContext) || {};

  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleClick = () => {
    if (!name) {
      setError("Please, enter your name");
      return;
    }

    setError("");

    userSocket?.emit("register-new-user", {
      name,
      socketId: userSocket.id,
    });

    push("/dashboard");
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
          error={Boolean(error)}
          helperText={error}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Login
        </Button>
      </Stack>
    </div>
  );
};

export default LoginPage;
