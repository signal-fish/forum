import styled from "styled-components";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { tablet, tabletPro, laptop, laptopPro } from "../../responsive";

const Post = ({ img, title, text }) => {
  return (
    <S.Card>
      <CardActionArea>
        <S.CardMedia image={img} title="My Post"></S.CardMedia>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </S.Card>
  );
};

const S = {};

S.Card = styled(Card)`
  margin-bottom: 40px;
`;

S.CardMedia = styled(CardMedia)`
  height: 200px;

  ${tablet({
    height: "250px",
  })}

  ${tabletPro({
    height: "330px",
  })}

  ${laptop({
    height: "400px",
  })}

  ${laptopPro({
    height: "450px",
  })}
`;

export default Post;
