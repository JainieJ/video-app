import * as React from "react";
import LocalVideo from "../localVideo/LocalVideo";
import UserList from "../userList/UserList";
import Grid from "@mui/material/Grid";
import PeerContextProvider from "../PeerContext";
import CallingDialog from "../callingDialog/CallingDialog";
import CallInvitationDialog from "../callInvitationDialog/CallInvitationDialog";

interface DashBoardProps {}

const DashBoard: React.FunctionComponent<DashBoardProps> = () => {
  return (
    <PeerContextProvider>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LocalVideo />
        </Grid>
        <Grid item xs={4}>
          <UserList />
        </Grid>
      </Grid>

      <CallingDialog />
      <CallInvitationDialog />
    </PeerContextProvider>
  );
};

export default DashBoard;
