import Head from 'next/head';
import '@/styles/styles.scss';
import { Roboto, Bebas_Neue } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const bebas = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${bebas.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className={bebas.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
