import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { WSSContext } from "../WSSContext";
import { PeerContext } from "../PeerContext";

interface UserListProps {}

const UserList: React.FunctionComponent<UserListProps> = () => {
  const { activeUsers, userSocket } = React.useContext(WSSContext) || {};
  const { setPeer } = React.useContext(PeerContext) || {};

  return (
    <>
      {activeUsers?.map((usr) => {
        return (
          <Card
            variant="outlined"
            sx={{ bgcolor: "text.disabled" }}
            key={usr.socketId}
            onClick={() => {
              setPeer?.(usr);
              userSocket?.emit("call-invitation", usr);
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {usr.name}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default UserList;
