import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const isHome = router.pathname === '/';
    document.body.classList.toggle('page-home', isHome);
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
