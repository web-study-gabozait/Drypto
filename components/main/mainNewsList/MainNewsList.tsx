import {
  MainNewsListContainer,
  MainNewsListDate,
  MainNewsListHeader,
  MainNewsListLabel,
  MainNewsListLabelIcon,
  MainNewsListWrap,
} from "./style";
import { FcNews } from "react-icons/fc";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import { mainNewsAtom } from "../../../store/main/main.store";
import MainNewsVoid from "./mainNewsVoid/MainNewsVoid";

const MainNewsList = () => {
  const news = useRecoilValue(mainNewsAtom);

  return (
    <MainNewsListContainer>
      <MainNewsListHeader>
        <MainNewsListLabel>
          크립토 뉴스
          <MainNewsListLabelIcon>
            <FcNews />
          </MainNewsListLabelIcon>
        </MainNewsListLabel>
        <MainNewsListDate>{dayjs().format("YYYY-MM-DD")}</MainNewsListDate>
      </MainNewsListHeader>
      <MainNewsListWrap>
        {news.length === 0 ? <MainNewsVoid /> : <div></div>}
      </MainNewsListWrap>
    </MainNewsListContainer>
  );
};

export default MainNewsList;
