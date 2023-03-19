import Head from "next/head";
import { Inter } from "next/font/google";
import Button from "@mui/material/Button";
import MainPageView from "src/views/MainPageView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ЕК Метеза</title>
        <meta name="description" content="ЕК Метеза" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPageView />
    </>
  );
}
