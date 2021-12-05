import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/Theme.provider';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          ></style>
        </Head>
        <body>
          <Main />
          <div id="portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
