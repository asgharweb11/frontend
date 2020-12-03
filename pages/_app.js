import Head from "next/head";
import React from "react"
import '../styles/globals.css';
// ----------------
import { Provider } from "react-redux"
import { createWrapper } from "next-redux-wrapper"
import Store from "../store/store"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      {/* redux */}
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
      
  )
}

const makeStore = () => Store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp)
