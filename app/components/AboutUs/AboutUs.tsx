import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="bg-2 rounded-2xl">
      <div className="h-full ">
        <div className="mx-auto py-10 relative z-10">
          <h2 className="text-5xl text-slate-100 text-center font-bold">
            Why Choose Us
          </h2>
          <div className="relative mt-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 md:ps-48">
              <div className="md:sticky md:top-80">
              <h3 className="text-4xl text-orange-200  text-center md:text-start font-bold">
                Why Identity Verse?
              </h3>
              <p className="text-white text-2xl text-center md:text-start pt-5">
                Empowering Your Brand with Unmatched Expertise and Solutions.
              </p>
              </div>
            </div>
            <div className="md:w-9/12">
              <ul className="overflow-hidden px-4 md:px-0 md:pe-48">
                <li className="flex justify-end ">
                  <div className="card bg-primary text-primary-content md:w-2/3 bg-card slide-left">
                    <div className="card-body">
                      <h2 className="text-2xl  text-white">
                        Comprehensive Services
                      </h2>
                      <p className="text-white text-lg">
                        We offer a complete package, from brand design and
                        online presence to brand management and custom-branded
                        materials.
                      </p>
                      <div className="card-actions justify-center pt-3">
                        <button className="btn px-10">Know More</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex justify-end mt-5 ">
                  <div className="card bg-primary text-primary-content md:w-2/3 bg-card-2 slide-left">
                    <div className="card-body">
                      <h2 className="text-2xl text-white">
                        Expertise in Identity Solutions:
                      </h2>
                      <p className="text-white text-lg">
                        Our team specializes in enhancing your business identity
                        through innovative digital and physical solutions.
                      </p>
                      <div className="card-actions justify-center pt-3">
                        <button className="btn px-10">Know More</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex justify-end mt-5 ">
                  <div className="card bg-primary text-primary-content md:w-2/3 bg-card-3 slide-left">
                    <div className="card-body">
                      <h2 className="text-2xl text-white">
                        Tailored Strategies
                      </h2>
                      <p className="text-white text-lg">
                        We provide customized strategies to meet your unique
                        business needs, ensuring maximum impact.
                      </p>
                      <div className="card-actions justify-center pt-3">
                        <button className="btn px-10">Know More</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex justify-end mt-5 ">
                  <div className="card bg-primary text-primary-content md:w-2/3 bg-card-4 slide-left">
                    <div className="card-body">
                      <h2 className="text-2xl text-white">
                        Cutting-Edge Technology
                      </h2>
                      <p className="text-white text-lg">
                        Our use of the latest technologies ensures your brand
                        stays ahead in the competitive market.
                      </p>
                      <div className="card-actions justify-center pt-3">
                        <button className="btn px-10">Know More</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex justify-end mt-5 ">
                  <div className="card bg-primary text-primary-content md:w-2/3 bg-card-5 slide-left">
                    <div className="card-body">
                      <h2 className="text-2xl text-white">Dedicated Support</h2>
                      <p className="text-white text-lg">
                        We offer ongoing support and maintenance to ensure your
                        brand identity remains strong and effective.
                      </p>
                      <div className="card-actions justify-center pt-3">
                        <button className="btn px-10">Know More</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex justify-end mt-5 ">
                  <div className="card bg-primary text-primary-content md:w-2/3 bg-card-6 slide-left">
                    <div className="card-body">
                      <h2 className="text-2xl text-white">
                        Proven Track Record
                      </h2>
                      <p className="text-white text-lg">
                        Our successful projects and satisfied clients are a
                        testament to our commitment to excellence.
                      </p>
                      <div className="card-actions justify-center pt-3">
                        <button className="btn px-10">Know More</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
