import type { AppProps } from "next/app";
import "../styles/globals.css";
import MetaSeo from "@/metaSeo/metaSeo";
import Layout from "@/components/layout/layout";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaSeo title="Reddit App" />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}
