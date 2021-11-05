import styled from "styled-components";
import Post from "../Post";
import { Container } from "@mui/material/";
import { feedData } from "../../data";

const Feed = () => {
  return (
    <S.Container>
      {feedData.map((item, i) => {
        const { img, title, text } = item;
        return <Post key={i} img={img} title={title} text={text} />;
      })}
    </S.Container>
  );
};

const S = {};

S.Container = styled(Container)`
  padding-top: 80px;
`;

export default Feed;
