import type { AppProps } from "next/app";
import "../styles/globals.css";

import { RecoilRoot } from "recoil";
import Navbar from "@/components/navbar/navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <RecoilRoot>
       <main className=" font-body">
       <Navbar />
      <Component {...pageProps} />
       </main>
      </RecoilRoot>
    </>
  );
}
