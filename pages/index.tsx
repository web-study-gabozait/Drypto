import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  console.log(typeof window);

  return (
    <div>
      <Head>
        <title>{"Drypto"}</title>
        <meta
          name="description"
          content="자기가 관심있어하는 비트코인을 조회 해보세요."
        />
      </Head>
    </div>
  );
};

export default Home;
