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
            <Header />
            <Component {...pageProps} />
            <Footer />
            <CommonModal />
        </>
    );
}

export default MyApp;
