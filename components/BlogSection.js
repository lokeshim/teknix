import Image from 'next/image';

const BlogSection = () => {
  return (
    <section className="section">
      <div className="container-fluid px-3">
        <div className="row">
          <div className="offset-md-1 col-md-6">
            <div>
              <p className="other-heading">Our Blog</p>
              <p className="my-3 text-start my-5">
                <a href="#" className="text-danger text-decoration-none font-15 fw-normal letter-spacing">
                  ALL ARTICLE
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-6 px-0">
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
                  4 Private Island Getaways <br />
                  You’ll Love
                </p>
                <p className="my-3 text-start my-5">
                  <a href="#" className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                    READ ARTICLE
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {Array(3)
              .fill('')
              .map((_, index) => (
                <div className="row mb-5" key={index}>
                  <div className="col-md-8 offset-md-2 border-bottom border-light border-opacity-25 px-0">
                    <p className="font-35">Explore These 5 Must-Have Luxury Home Amenities</p>
                    <p className="my-4">
                      <a href="#" className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                        READ ARTICLE
                      </a>
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
