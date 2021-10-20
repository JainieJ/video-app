import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { WSSContext } from "../WSSContext";

interface UserListProps {}

const UserList: React.FunctionComponent<UserListProps> = () => {
  const { activeUsers } = React.useContext(WSSContext) || {};

  return (
    <>
      {activeUsers?.map((usr) => {
        return (
          <Card
            variant="outlined"
            sx={{ bgcolor: "text.disabled" }}
            key={usr.socketId}
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
