import Head from "next/head";
import Header from "../../components/layouts/Header";
import { motion } from "framer-motion";
import PageTransition from "../../components/layouts/PageTransition";

export default function Home() {
  return (
    <PageTransition page={"Startseite"}>
      <Head>
        <title>Dominik Schweigl</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={` `}>
        <Header />
      </main>
    </PageTransition>
  );
}
