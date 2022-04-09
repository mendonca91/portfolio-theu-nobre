import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/assets/icons/favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="*" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://cdn.credihome.com.br/static/icons/chicons.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument