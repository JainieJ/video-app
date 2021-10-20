import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./components/dashBoard/DashBoard";
import LoginPage from "./components/loginPage/LoginPage";
import UserNameContextProvider from "./components/UserNameContext";
import WSSContextProvider from "./components/WSSContext";

function App() {
  return (
    <Router>
      <WSSContextProvider>
        <UserNameContextProvider>
          <Switch>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </UserNameContextProvider>
      </WSSContextProvider>
    </Router>
  );
}

export default App;
