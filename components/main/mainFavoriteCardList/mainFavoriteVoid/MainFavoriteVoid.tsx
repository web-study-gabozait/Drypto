import {
  MainFavoriteVoidContainer,
  MainFavoriteVoidIcon,
  MainFavoriteVoidTitle,
  MainFavoriteVoidwWrap,
} from "./style";
import { MdInfoOutline } from "react-icons/md";
const MainFavoriteVoid = () => {
  return (
    <MainFavoriteVoidContainer>
      <MainFavoriteVoidwWrap>
        <MainFavoriteVoidIcon>
          <MdInfoOutline />
        </MainFavoriteVoidIcon>
        <MainFavoriteVoidTitle>즐겨찾기가 없습니다..</MainFavoriteVoidTitle>
      </MainFavoriteVoidwWrap>
    </MainFavoriteVoidContainer>
  );
};

export default MainFavoriteVoid;
