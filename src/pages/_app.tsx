import type { AppProps } from "next/app";
import "../styles/globals.css"

import { RecoilRoot } from "recoil";
import MetaSeo from "@/metaSeo/metaSeo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar";
import EditModal from "@/modal/editModal";
import AuthModal from "@/modal/authModal";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <MetaSeo />
        <Navbar />
        <main className=" font-body">
          
          <Component {...pageProps} />
          <ToastContainer />
        </main>
        <EditModal />
        <AuthModal />
      </RecoilRoot>
    </>
  );
}
