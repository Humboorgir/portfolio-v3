import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

import NextNProgress from "nextjs-progressbar";
import { LazyMotion, domAnimation } from "framer-motion";
import { Roboto } from "next/font/google";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <LazyMotion features={domAnimation}>
      <WrapBalancerProvider>
        <Toaster position="top-center" />
        <NextNProgress color="#004fa3" />
        <main className={roboto.className}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </WrapBalancerProvider>
    </LazyMotion>
  );
}
