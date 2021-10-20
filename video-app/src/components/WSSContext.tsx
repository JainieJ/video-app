import * as React from "react";
import { io, Socket } from "socket.io-client";
import { TUser } from "../types/types";

interface IWSSContext {
  userSocket: Socket | null;
  activeUsers: TUser[];
}

export const WSSContext = React.createContext<IWSSContext | null>(null);

interface WSSContextProvideProps {}

const WSSContextProvider: React.FunctionComponent<WSSContextProvideProps> = ({
  children,
}) => {
  const [userSocket, setUserSocket] = React.useState<Socket | null>(null);
  const [activeUsers, setActiveUsers] = React.useState<TUser[]>([]);

  React.useEffect(() => {
    const socket = io("http://192.168.88.216:8000");

    setUserSocket(socket);

    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("peers-updated", (peers: TUser[]) => {
      const peersExcludingSelf = peers.filter((p) => p.socketId !== socket.id);
      setActiveUsers(peersExcludingSelf);
    });
  }, []);

  return (
    <WSSContext.Provider value={{ userSocket, activeUsers }}>
      {children}
    </WSSContext.Provider>
  );
};

export default WSSContextProvider;
