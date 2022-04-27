import {
  MainNewsVoidContainer,
  MainNewsVoidIcon,
  MainNewsVoidWrap,
  MainNewsVoidTitle,
} from "./style";
import { MdDescription } from "@react-icons/all-files/md/MdDescription";

const MainNewsVoid = () => {
  return (
    <MainNewsVoidContainer>
      <MainNewsVoidWrap>
        <MainNewsVoidIcon>
          <MdDescription />
        </MainNewsVoidIcon>
        <MainNewsVoidTitle>뉴스가 없습니다..</MainNewsVoidTitle>
      </MainNewsVoidWrap>
    </MainNewsVoidContainer>
  );
};

export default MainNewsVoid;
