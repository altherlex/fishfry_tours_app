import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";
import styled from "@emotion/styled";

import EditTaskDialog from "features/task/EditTaskDialog";
import Board from "features/board";
import Navbar from "components/Navbar";
import Home from "features/home/Home";
import Profile from "features/profile/Profile";
import Sidebar from "features/sidebar/Sidebar";
import PageError from "components/PageError";
import { sidebarWidth } from "const";
import { useTheme, WithTheme } from "@material-ui/core";
import CreateTaskDialog from "features/task/CreateTaskDialog";

const Main = styled.div<WithTheme>`
  ${(props) => props.theme.breakpoints.up("sm")} {
    margin-left: ${sidebarWidth + 8}px;
  }
`;

const Wrapper: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Sidebar />
      <Main theme={theme}>
        <Navbar />
        {children}
      </Main>
    </>
  );
};

const AppRoute = (props: RouteProps) => (
  <Route {...props}>
    <Wrapper>{props.children}</Wrapper>
  </Route>
);

const AuthenticatedApp = () => {
  return (
    <Switch>
      <AppRoute exact path="/profile">
        <Profile />
      </AppRoute>
      <AppRoute exact path="/b/:id">
        <EditTaskDialog />
        <CreateTaskDialog />
        <Board />
      </AppRoute>

      <AppRoute exact path="/">
        <Home />
      </AppRoute>
      <Route path="*">
        <PageError>Page not found.</PageError>
      </Route>
    </Switch>
  );
};

export default AuthenticatedApp;
