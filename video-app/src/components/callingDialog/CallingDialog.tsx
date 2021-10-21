import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { DialogTitle } from "@mui/material";
import { PeerContext } from "../PeerContext";

interface CallingDialogProps {}

const CallingDialog: React.FunctionComponent<CallingDialogProps> = () => {
  const { peer } = React.useContext(PeerContext) || {};

  return (
    <Dialog open={Boolean(peer)}>
      <DialogTitle>{`Calling ${peer?.name}`}</DialogTitle>
    </Dialog>
  );
};

export default CallingDialog;
