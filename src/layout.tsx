import Container from "@mui/material/Container";
import Head from "next/head";
import { ReactNode } from "react";

import { Footer } from "./components/footer";
import { Header } from "./components/header";

type Props = {
  children: ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>motoplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};
