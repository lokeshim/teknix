import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../data/posts'; // Import the posts data

const BlogSection = () => {
  // Sort posts by date descending and limit to 6
  const sortedPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="col-md-3">
      <div className="border border-light border-opacity-10 px-3 py-3">
        <h4 className="sidebar__widget-title text-white">Latest Posts</h4>
        <div className="sidebar__post-list my-3">
          {sortedPosts.length > 0 && (
            <div classNmae="sidebar__post-item mb-4">
                        <div className="sidebar__post-thumb">
                              <a href={`/blog/${sortedPosts[0].slug}`} passHref>
                                <Image
                src={`/img/blogs_image/${sortedPosts[0].image}`}
              
                alt={sortedPosts[0].title}
                layout="responsive"
                width={700}
                height={475}
                className="w-100"
              />
                              </a>
                        
                        </div>
                        <div className="sidebar__post-content">
                          
                            <h5 class="title">
                              <a href={`/blog/${sortedPosts[0].slug}`} passHref class="text-white">
                                 {sortedPosts[0].title}
                              </a>
                            </h5>
                           
                            <span class="date font-15"><i class="flaticon-time"></i>  {sortedPosts[0].date}</span>
                        </div>
                    </div>

          
          )}

          {/* Render the remaining 5 blog posts */}
          {sortedPosts.slice(1).map((post) => (
            <div className="sidebar__post-item mb-4" key={post.slug}>
              <div className="sidebar__post-thumb">
                <Link href={`/blog/${post.slug}`} passHref>
                      
                    <Image
                     src={`/img/blogs_image/${post.image}`}
                    
                      alt={post.title}
                      layout="responsive"
                      width={700}
                      height={475}
                      className="w-100"
                    />
                 
                </Link>
              </div>
                <div className="sidebar__post-content">
                          
                            <h5 class="title">
                              <a href={`/blog/${sortedPosts[0].slug}`} passHref class="text-decoration-none text-white">
                                 {post.title}
                              </a>
                            </h5>
                           
                            <span class="date font-15"><i class="flaticon-time"></i>  {sortedPosts[0].date}</span>
                        </div>

         
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
