// pages/blog/[slug]/index.js
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { posts } from "../../../data/posts";
import BlogSidebar from "../../../components/BlogSidebar";

export const getStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = posts.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
    },
  };
};



const BlogPost = ({ post }) => {
  const router = useRouter();
const domain = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== "undefined" && window.location.origin);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="robots" content="index, follow" />
     <link rel="canonical" href={`${domain}/blog/${post.slug}/`} />
        
      </Head>
      <h1 className="d-none">{post.h1} </h1>

      <div
        id="carouselExampleCaptions"
        className="carousel slide top-bg"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators d-none">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/img/Blog.webp"
              className="d-block w-100"
              alt="Slide 1"
              width={1920}
              height={1080}
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="slider-txt mb-0">BLOGS</p>
              <p className="text-white fs-5 slider-txt2">
                Insights on Luxury and Efficiency
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev d-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next  d-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div class="col-9 px-3 px-md-5">
              <div class="gallery-item">
                <Image
                  src={`/img/blogs_image/${post.image}`}
                  className="w-100"
                  alt={post.title}
                  width={1296}
                  height={607}
                />
                <div class="title text-left">
                  <h2 className="text-main fs-2 fw-bold my-4">{post.title}</h2>
                </div>
                
                <div class="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
