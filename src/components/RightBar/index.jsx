import styled from "styled-components";
import {
  Container,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  Link,
} from "@mui/material";
import {
  rightBarAvatarData,
  rightBarImageListData,
  RightBarCategoriesData,
} from "../../data";
import { Desktop, DesktopPro, laptop, laptopPro } from "../../responsive";

const RightBar = () => {
  return (
    <S.Container>
      <S.Typography gutterBottom>Online Friends</S.Typography>
      <S.AvatarGroup max={20} style={{ marginBottom: 20 }}>
        {rightBarAvatarData.map((item, i) => {
          const { name, img } = item;
          return <Avatar src={img} alt={name} />;
        })}
      </S.AvatarGroup>
      <S.Typography gutterBottom>Gallery</S.Typography>
      <S.ImageList style={{ marginBottom: 20 }} cols={2}>
        {rightBarImageListData.map((item, i) => {
          const { name, img } = item;
          return (
            <S.ImageListItem key={i}>
              <Image src={img} alt={name} />
            </S.ImageListItem>
          );
        })}
      </S.ImageList>
      <S.Typography gutterBottom>Categories</S.Typography>
      <Links>
        {RightBarCategoriesData.map((item, i) => {
          return (
            <S.Link href="#" variant="body2">
              {item}
            </S.Link>
          );
        })}
      </Links>
    </S.Container>
  );
};

const S = {};

S.Container = styled(Container)`
  padding-top: 80px;
  position: sticky;
  top: 0;
`;

S.AvatarGroup = styled(AvatarGroup)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

S.Typography = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: #555;
`;

S.ImageList = styled(ImageList)`
  display: flex;
  flex-wrap: wrap;
  height: 580px;
  overflow-y: scroll;
`;

S.ImageListItem = styled(ImageListItem)`
  width: 150px;

  ${laptop({
    width: "200px",
  })}

  ${laptopPro({
    width: "238px",
  })}

  ${Desktop({
    width: "300px",
  })}

  ${DesktopPro({
    width: "180px",
  })}
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 3px;
  object-fit: cover;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

S.Link = styled(Link)`
  margin-right: 16px;
  color: #555;
  font-size: 16px;
  text-decoration: none;
  margin: 5px;

  &:hover {
    opacity: 0.6;
  }
`;

export default RightBar;
