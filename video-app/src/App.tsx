import * as React from "react";
import LocalVideo from "./components/localVideo/LocalVideo";
import LoginPage from "./components/loginPage/LoginPage";
import UserNameContextProvider from "./components/VideoChatContext";
import WSSContextProvider from "./components/WSSContext";

function App() {
  return (
    <div>
      <WSSContextProvider>
        <UserNameContextProvider>
          {/* <LocalVideo /> */}
          <LoginPage />
        </UserNameContextProvider>
      </WSSContextProvider>
    </div>
  );
}

export default App;
