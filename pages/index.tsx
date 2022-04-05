import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/main/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Drypto"}</title>
        <meta
          name="description"
          content="자기가 관심있어하는 비트코인을 조회 해보세요."
        />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
