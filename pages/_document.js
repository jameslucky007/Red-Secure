import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to CDN for faster loading */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://unpkg.com" />

        {/* Preload and asynchronously load Bootstrap CSS */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/>

        {/* Preload and asynchronously load AOS CSS */}
        <link
          rel="preload"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}



