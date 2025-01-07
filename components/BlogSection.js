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
        <div className="row ">
          {/* Main Blog Post */}
          <div className="col-md-6 px-0">
            {sortedPosts.length > 0 && (
              <div>
                <Image
               src="/img/Blog - home elevator.jpg"
                  alt="Blog main image"
                  width={956}
                  height={587}
                layout="intrinsic"
                  className="w-100"
                />
                <div className="row">
                  <div className="col-md-10  offset-md-2 mt-4  mb-3">
                    <p className="font-44 ">
                      {posts[0].title}
                    </p>
                    <p className="  text-start m-20">
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
              <div className="row align-items-center" key={index}>
                <div className="col-md-9 offset-md-1 d-flex align-tems-center mt-3">
                <div class="  border-bottom border-light border-opacity-25 p-20">    <p className="font-28 p-10">{post.title}</p>
                  <p className=" p-10 ">
                    <Link href={`/blog/${post.slug}`} className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                      READ ARTICLE
                    </Link>
                  </p></div>
                
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
