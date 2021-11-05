import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Add from "./components/Add";
import { md } from "./responsive";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Grid container>
        <Grid item md={2} sm={3} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item md={7} sm={9} xs={10}>
          <Feed />
        </Grid>
        <S.Grid item md={3}>
          <RightBar />
        </S.Grid>
      </Grid>
      <Add />
    </Container>
  );
};

const S = {};

const Container = styled.div``;

S.Grid = styled(Grid)`
  ${md({
    display: "none",
  })}
`;
export default App;
