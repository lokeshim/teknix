// pages/blog/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../../data/posts';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="Explore insights on luxury and efficiency through our blogs." />
                <meta name="keywords" content="blogs, elevators, technology, luxury, efficiency" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.easyswipe.in/blog" />
            </Head>

            <div id="carouselExampleCaptions" className="carousel slide top-bg" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="/img/main-blog.png" className="d-block w-100" alt="Slide 1"   width={1920}
        height={1080} />
                        <div className="carousel-caption d-none d-md-block">
                            <p className="slider-txt mb-0">BLOGS</p>
                            <p className="text-white fs-5 slider-txt2">Insights on Luxury and Efficiency</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/img/main-blog.png" className="d-block w-100" alt="Slide 2"   width={1920}
        height={1080} />
                        <div className="carousel-caption d-none d-md-block">
                            <p className="slider-txt mb-0">BLOGS</p>
                            <p className="text-white fs-5 slider-txt2">Insights on Luxury and Efficiency</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/img/main-blog.png" className="d-block w-100" alt="Slide 3"   width={1920}
        height={1080} />
                        <div className="carousel-caption d-none d-md-block">
                            <p className="slider-txt mb-0">BLOGS</p>
                            <p className="text-white fs-5 slider-txt2">Insights on Luxury and Efficiency</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="section ">
                <div className="container px-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="blog-box">
                                <Image src="/img/blog1.png" className="img-fluid mb-3" alt="Blog Post 1" width={500} height={300} />
                                <h3 className="text-white fs-2 mb-3">
                                    What are all factors to consider before buying an elevator?
                                </h3>
                                <p>
                                    Elevators are a common part of most buildings and can be found in
                                    homes, offices, and buildings of all types and sizes. Elevators
                                    are very useful and t...
                                </p>
                                <Link href="#" className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog-box">
                                <Image src="/img/blog2.png" className="img-fluid mb-3" alt="Blog Post 2" width={500} height={300} />
                                <h3 className="text-white fs-2 mb-3">
                                    What to Do If You're Stuck in an Elevator - Teknix Elevators
                                </h3>
                                <p>
                                    Getting stuck in an elevator is one of those things that we all
                                    hope to avoid, unfortunately, it can't be avoided. Everyone's
                                    worst nightmare is gett...
                                </p>
                                <Link href="#" className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog-box">
                                <Image src="/img/blog3.png" className="img-fluid mb-3" alt="Blog Post 3" width={500} height={300} />
                                <h3 className="text-white fs-2 mb-3">
                                    How Safe is Your Home Elevator? - Teknix Elevators Bangalore
                                </h3>
                                <p>
                                    Residential elevators have been around for a long time, but in
                                    recent years they have become an increasingly mainstream and
                                    affordable way for people to take...
                                </p>
                                <Link href="#" className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
 
            <section className="mb-4 d-none" >
                <div className="container">
                    <div className="row d-flex align-content-center justify-content-center">
                        <div className="title text-center">
                            <h2 className="text-main">Blogs</h2>
                        </div>
                        <div className="row">
                            {posts.map((post) => (
                                <div className="col-md-6 mb-3" key={post.slug}>
                                    <div className="services-item shine-animate-item bg-white shadow-sm">
                                        <div className="services-thumb">
                                            <Link href={`/blog/${post.slug}`}>
                                                <Image
                                                    src={post.image}
                                                    className="img-fluid"
                                                    alt={post.title}
                                                    width={500}
                                                    height={500}
                                                />
                                            </Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="fa-solid fa-barcode"></i>
                                            </div>
                                            <h4 className="title">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h4>
                                            <p>
                                                {post.excerpt}
                                            </p>
                                            <Link href={`/blog/${post.slug}`} className="btn btn-danger text-white">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
