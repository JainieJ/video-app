import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import * as React from "react";
import { PeerContext } from "../PeerContext";

interface CallInvitationDialogProps {}

const CallInvitationDialog: React.FunctionComponent<CallInvitationDialogProps> = () => {
  const { caller } = React.useContext(PeerContext) || {};

  return (
    <Dialog open={Boolean(caller)}>
      <DialogTitle>{`${caller?.name} is calling you`}</DialogTitle>
      <DialogActions>
        <Button>Accept</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CallInvitationDialog;
