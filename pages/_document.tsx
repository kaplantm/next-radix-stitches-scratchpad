import Document, { Html, Head, Main, NextScript } from "next/document";
import globalStyles from "../lib/styling/globalStyles";
import { getCssText } from "../lib/styling/stitches.config";

// Stitches SSR: https://stitches.dev/blog/using-nextjs-with-stitches

class MyDocument extends Document {
  render() {
    globalStyles();
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
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
