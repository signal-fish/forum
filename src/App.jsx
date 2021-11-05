import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar"
import { tablet } from "./responsive";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <RightBar />
        </Grid>
        <RightBarWrapper></RightBarWrapper>
      </Grid>
    </Container>
  );
};

const Container = styled.div``;

const RightBarWrapper = styled.div`
  display: none;

  ${tablet({
    display: "block",
  })}
`;
export default App;
