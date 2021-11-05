import styled from "styled-components";
import { Container, Typography } from "@mui/material";
import { tablet } from "../../responsive";
import { leftBarData } from "../../data";

const LeftBar = () => {
  return (
    <S.Container>
      {leftBarData.map((item, i) => {
        const { icon, text } = item;
        return (
          <Item key={i}>
            <Icon>{icon}</Icon>
            <S.Typography>{text}</S.Typography>
          </Item>
        );
      })}
    </S.Container>
  );
};

const S = {};

S.Container = styled(Container)`
  height: 100vh;
  color: #fff;
  padding-top: 80px;
  background-color: ${(props) => props.theme.palette.primary.main};
  position: sticky;
  top: 0;

  ${tablet({
    backgroundColor: "#fff",
    color: "#555",
    border: "1px solid #ece7e7",
  })}
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  padding: 0px 0 10px 0;
  
  &:hover {
    background: #ebebeb;
  }

  ${tablet({
    marginBottom: "12px",
    cursor: "pointer",
  })}
`;

const Icon = styled.span`
  margin-right: 8px;

  ${tablet({
    fontSize: "16px",
  })}
`;

S.Typography = styled(Typography)`
  font-weight: 500;
  display: none;
  font-size: 20px;

  ${tablet({
    display: "inline",
  })}
`;
export default LeftBar;
