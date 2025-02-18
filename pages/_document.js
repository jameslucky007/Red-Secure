import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/>

        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
