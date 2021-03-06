import Head from "next/head";
import HomePage from "./components/homepage/Home";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <HomePage />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  return {
    props: { session },
  };
}
