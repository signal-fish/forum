import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  alpha,
} from "@mui/material/";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import styled from "styled-components";
import { tablet } from "../../responsive";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar>
      <S.Toolbar>
        <Typography variant="h6">Fish</Typography>
        <SearchWrapper open={open}>
          <Search />
          <S.InputBase />
          <S.Cancel open={open} onClick={() => setOpen(false)} />
        </SearchWrapper>
        <Icons open={open}>
          <S.Search onClick={() => setOpen(true)} />
          <S.MailBadge>
            <Mail />
          </S.MailBadge>
          <S.MsgBadge>
            <Notifications />
          </S.MsgBadge>
          <Avatar src="assets/signal-fish.jpg" alt="Signal Fish" />
        </Icons>
      </S.Toolbar>
    </AppBar>
  );
};

const S = {};

S.Toolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  background-color: ${(props) => alpha(props.theme.palette.common.white, 0.15)};
  border-radius: ${(props) => props.theme.shape.borderRadius};
  width: 70%;

  &:hover {
    background-color: ${(props) =>
      alpha(props.theme.palette.common.white, 0.25)};
  }

  ${tablet({
    display: "flex",
    width: "50%",
  })}
`;

S.InputBase = styled(InputBase)`
  color: #ffffff;
  margin-left: 8px;
`;

S.Cancel = styled(Cancel)`
  margin-right: 8px;

  ${tablet({
    display: "none",
  })}
`;

const Icons = styled.div`
  display: ${(props) => (props.open ? "none" : "flex")};
  align-items: center;
`;

S.Search = styled(Search)`
  margin-right: 16px;

  ${tablet({
    display: "none",
  })}
`;

S.MailBadge = styled(Badge)`
  margin-right: 16px;
`;

S.MsgBadge = styled(Badge)`
  margin-right: 16px;
`;
export default Navbar;
