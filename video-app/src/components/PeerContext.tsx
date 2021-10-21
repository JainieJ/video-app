import * as React from "react";
import { TUser } from "../types/types";
import { WSSContext } from "./WSSContext";

interface IPeerState {
  peer: null | TUser;
  caller: null | TUser;
}

interface IPeerContext extends IPeerState {
  setPeer: (peer: TUser) => void;
}

export const PeerContext = React.createContext<null | IPeerContext>(null);

interface PeerContextProviderProps {}

const initialState: IPeerState = {
  peer: null,
  caller: null,
};

const reducer = (
  state: IPeerState,
  action: { type: string; payload: IPeerState[keyof IPeerState] }
) => {
  if (action.type === "SET_PEER") {
    return { ...state, peer: action.payload };
  }

  if (action.type === "SET_CALLER") {
    return { ...state, caller: action.payload };
  }

  return state;
};

const PeerContextProvider: React.FunctionComponent<PeerContextProviderProps> = ({
  children,
}) => {
  const { userSocket } = React.useContext(WSSContext) || {};
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    userSocket?.on("call-invitation", (caller: TUser) => {
      dispatch({ type: "SET_CALLER", payload: caller });
    });
  }, [userSocket]);

  console.log(state);

  const setPeer = React.useCallback(
    (peer: TUser) => dispatch({ type: "SET_PEER", payload: peer }),
    []
  );

  const value = { ...state, setPeer };

  return <PeerContext.Provider value={value}>{children}</PeerContext.Provider>;
};

export default PeerContextProvider;
