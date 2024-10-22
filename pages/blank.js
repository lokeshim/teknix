// pages/contact.js
import Head from 'next/head';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        const { name, phone, email, message } = data;

        // Construct WhatsApp URL
        const whatsappUrl = `https://wa.me/917090122133?text=Full Name: ${encodeURIComponent(name)}%0AMobile Number: ${encodeURIComponent(phone)}%0AEmail ID: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

        // Open WhatsApp URL in a new tab
        window.open(whatsappUrl, '_blank');
        reset();
    };

    return (
        <>
            <Head>
                <title>teknix</title>
                <meta name="description" content="teknix" />
                <meta name="keywords" content="teknix" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="#" />

            </Head>

        </>
    );
}
