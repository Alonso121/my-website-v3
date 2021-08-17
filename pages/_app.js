import * as React from "react";
import { ThemeProvider } from "next-themes";

import "aos/dist/aos.css";
import "../styles/index.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
