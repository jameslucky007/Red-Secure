import '@/styles/globals.css'
import Script from 'next/script'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Layout from '@/Components/Layout';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
   <>
   <Layout>
      <Component {...pageProps} />
   </Layout>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></Script>

      <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></Script>    


      </>

  )
}