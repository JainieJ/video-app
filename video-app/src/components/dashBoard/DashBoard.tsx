import * as React from "react";
import LocalVideo from "../localVideo/LocalVideo";
import UserList from "../userList/UserList";
import Grid from "@mui/material/Grid";

interface DashBoardProps {}

const DashBoard: React.FunctionComponent<DashBoardProps> = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <LocalVideo />
      </Grid>
      <Grid item xs={4}>
        <UserList />
      </Grid>
    </Grid>
  );
};

export default DashBoard;
