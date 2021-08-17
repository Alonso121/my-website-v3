import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/my-icon.ico" />
          <meta
            name="description"
            content="You can find projects Alison Tahiri worked on and contact details on this site."
          ></meta>
          <meta
            property="og:description"
            content="You can find projects Alison Tahiri worked on and contact details on this site."
          />
          <meta
            property="og:title"
            content="Alison Tahiri, Frontend Developer from Tirana"
          />
          <meta property="og:image" content="/alison-pic.png" />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, Frontend, Tirana, Alison, Tahiri"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
