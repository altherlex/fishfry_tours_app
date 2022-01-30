import React from "react";
import { Drawer, List, Hidden, Tooltip } from "@material-ui/core";
import { css } from "@emotion/core";
import { sidebarWidth } from "const";
import styled from "@emotion/styled";
import { ReactComponent as GitHubIcon } from "static/svg/github.svg";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import {
  mobileDrawerOpen,
  setMobileDrawerOpen,
} from "features/responsive/ResponsiveSlice";

const Container = styled.div`
  height: 100%;
  background-color: #003366;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const linkStyles = css`
  display: block;
  color: #caceed;
  font-weight: bold;
  padding: 6px 20px;
  text-decoration: none;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
  &.active {
    color: #fff;
  }
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const mobileOpen = useSelector(mobileDrawerOpen);

  const handleCloseMobileDrawer = () => {
    dispatch(setMobileDrawerOpen(false));
  };

  return (
    <>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleCloseMobileDrawer}
          ModalProps={{ keepMounted: true }}
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer anchor="left" variant="permanent">
          <DrawerContent />
        </Drawer>
      </Hidden>
    </>
  );
};

const BottomBlock = styled.div`
  position: absolute;
  left: 0px;
  bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GithubLink = styled.a`
  color: #fff;
  font-size: 1.75rem;
`;

const DrawerContent = () => {
  const history = useHistory();

  return (
    <Container>
      <TopArea>
        <div css={linkStyles} onClick={() => history.push("/b/1/")}>
          <FontAwesomeIcon icon={faShip} color="white" />
          FishFry
        </div>
      </TopArea>
      <List
        css={css`
          width: ${sidebarWidth}px;
          margin-top: 40px;
        `}
      >
        <NavLink to="/b/1/" exact css={linkStyles}>
          Board
        </NavLink>
        <NavLink to="/profile/" exact css={linkStyles}>
          Profile
        </NavLink>
      </List>
      <BottomBlock>
        <Tooltip title="View GitHub Repo">
          <GithubLink
            href="https://github.com/altherlex"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </GithubLink>
        </Tooltip>
      </BottomBlock>
    </Container>
  );
};

export default Sidebar;
