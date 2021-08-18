import * as React from "react";
import { ThemeProvider } from "next-themes";

import "aos/dist/aos.css";
import "../styles/index.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
