import * as React from "react";

interface IUserNameContext {
  name: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserNameContext = React.createContext<null | IUserNameContext>(
  null
);

interface VideoChatContextProps {}

const UserNameContextProvider: React.FunctionComponent<VideoChatContextProps> = ({
  children,
}) => {
  const [userName, setUserName] = React.useState("");

  const value = React.useMemo(
    () => ({
      name: userName,
      setUserName,
    }),
    [userName]
  );

  return (
    <UserNameContext.Provider value={value}>
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameContextProvider;
