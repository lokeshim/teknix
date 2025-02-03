// pages/_app.js
import React, { useEffect } from 'react';
import Script from 'next/script'; // Next.js optimized script loading
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../styles/style.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommonModal from '../components/CommonModal';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 800, 
            once: true, 
        });
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, [router.pathname]);

    return (
        <>
            {/* Google Analytics (GA4) */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-1FRKK8GBGX"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-1FRKK8GBGX');
                    `,
                }}
            />

            {/* Google Tag Manager (GTM) */}
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TSZL253F');
                    `,
                }}
            />

            <Header />
            <Component {...pageProps} />
            <Footer />
            <CommonModal />
        </>
    );
}

export default MyApp;
