// components/BlogSection.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../data/posts'; // Import the posts data

const BlogSection = () => {
     const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <section className="section">
      <div className="container-fluid px-3">
        <div className="row">
          <div className="offset-md-1 col-md-6">
            <div>
              <p className="other-heading">Our Blog</p>
              <p className="my-3 text-start my-md-5 ">
                <Link href="#" className="text-danger text-decoration-none font-15 fw-normal letter-spacing">
                  ALL ARTICLE
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Blog Content */}
        <div className="row my-md-5">
          {/* Main Blog Post */}
          <div className="col-md-6 px-0">
            {sortedPosts.length > 0 && (
              <div>
                <Image
               src="/img/blog-main.png"
                  alt="Blog main image"
                  layout="responsive"
                  width={700}
                  height={475}
                  className="w-100"
                />
                <div className="row">
                  <div className="col-md-9 my-5 offset-md-3">
                    <p className="other-heading2">
                      {posts[0].title}
                    </p>
                    <p className="my-3 text-start my-5">
                      <Link href={`/blog/${posts[0].slug}`} className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                        READ ARTICLE
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other Blog Posts */}
          <div className="col-md-6">
            {sortedPosts.slice(1, 4).map((post, index) => (
              <div className="row mb-5" key={index}>
                <div className="col-md-8 offset-md-2 border-bottom border-light border-opacity-25 px-0">
                  <p className="font-35">{post.title}</p>
                  <p className="my-md-4 my-3">
                    <Link href={`/blog/${post.slug}`} className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                      READ ARTICLE
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
