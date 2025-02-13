// pages/blog/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../../data/posts';
import SimpleCarousel from '../../components/SimpleCarousel';
import BlogSection2 from '../../components/BlogSection2';
export default function Blog() {
   const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
 const slides = [
    {
      mobile: '/img/mobile/Banner Mobile - Blogs.png',
      desktop: '/img/Blog.webp',
    }
   
  ];
    return (
        <>
            <Head>
                <title>Blog |  Elevator Manufacturers In India | Home Lifts Price In Bangalore</title>
                <meta name="description" content="Explore insights on luxury and efficiency through our blogs." />
                <meta name="keywords" content="blogs, elevators, technology, luxury, efficiency" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.teknixelevators.com/blog/" />
            </Head>

          

    <SimpleCarousel slides={slides} showIndicators={false} showControls={false} />
    <h1 className='d-none'>Blog</h1>
<BlogSection2></BlogSection2>
        

 
          <section className="section">
  <div className="container">
    <div className="row d-flex align-content-center justify-content-center">
      
    </div>

    {/* Blog Posts */}
    <div className="row m-20">
      {sortedPosts.map((post) => (
       

        <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={post.slug} data-aos="fade-up" data-aos-delay={200}>
          <div className="post-box blog-bottom">
            <p className="date-color m2-image">{post.date}</p>
            <div className="post-img">
             
                <Image
                  src={`/img/blogs_image/${post.image}`}
                  className="img-fluid m-20"
                  alt={post.title}
                  width={500}
                  height={500}
                />
             
            </div>
            <h3 className="text-white fs-4 mb-3">
             
                {post.title}
            
            </h3>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        </>
    );
}
