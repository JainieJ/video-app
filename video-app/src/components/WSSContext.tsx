import * as React from "react";
import { io, Socket } from "socket.io-client";

interface IWSSContext {
  userSocket: Socket | null;
}

const WSSContext = React.createContext<IWSSContext | null>(null);

interface WSSContextProvideProps {}

const WSSContextProvider: React.FunctionComponent<WSSContextProvideProps> = ({
  children,
}) => {
  const [userSocket, setUserSocket] = React.useState<Socket | null>(null);

  React.useEffect(() => {
    const socket = io("http://192.168.88.216:8000");

    setUserSocket(socket);

    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);

  return (
    <WSSContext.Provider value={{ userSocket }}>{children}</WSSContext.Provider>
  );
};

export default WSSContextProvider;
