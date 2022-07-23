// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
      </>
      )
}

export default MyApp
