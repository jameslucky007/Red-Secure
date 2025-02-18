import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
   <>
      <Component {...pageProps} />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></Script>

      <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></Script>    

      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>

      </>

  )
}