import '../styles/globals.css';
import "../public/font/fontawesome-pro-5.15.1-web-ulabs/css/all.min.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
