import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";

const globalStyles = `
  #__next{display:flex;flex-direction:column;height:100%}
  input,textarea{outline:none}
  body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = [
      // eslint-disable-next-line react/no-danger
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} key="styles" />,
    ];
    return { ...initialProps, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
