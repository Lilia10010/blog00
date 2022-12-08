import "../styles/globals.css";

import { client, ssrCache } from "../lib/urql";

import type { AppProps } from "next/app";
import { Provider } from "urql";

export default function App({ Component, pageProps }: AppProps) {
  //verificação para evitar refazer query no client caso já tenha feito no sssr / reaproveitando o cache do ssr
  if (pageProps.urqState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
