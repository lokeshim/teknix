import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
         {/* Google Ads / gtag.js */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11090469169"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11090469169');
            `,
          }}
        />
        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=SaolDisplay-Regular" rel="stylesheet" />


      


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
