'use client';
import { useEffect } from "react";
import "./Header.scss";
import lax from "lax.js";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    lax.init();

    // Add the scrollY driver
    lax.addDriver('scrollY', () => window.scrollY);

    lax.addElements('.page-header', {
        scrollY: {
            translateY: [
                [0, 500],
                {
                    767: [0, 0],
                    1400: [0, 30],
                },
            ],
        },
    });

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const headerElement = document.querySelector('.page-header');

        if (scrollY > 200 && headerElement) {
            headerElement.classList.add('bg-header');
        } else if (headerElement) {
            headerElement.classList.remove('bg-header');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove elements and event listener on unmount
    return () => {
        lax.removeElements('.page-header');
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <header className="fixed w-full top-0 z-50  w-100 page-header">
      <div className="container mx-auto">
        <div className="navbar rounded-2xl ps-5 pe-10 flex-col md:flex-row justify-between">
          <div className="navbar-start w-full md:w-96 flex-row-reverse justify-between">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a
                    href="#"
                    className=" text-xl font-semibold uppercase tracking-widest"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <details>
                    <summary className="text-xl font-semibold uppercase tracking-widest">
                      Services
                    </summary>
                    <ul className="p-2">
                      <li>
                        <a className="text-xl font-semibold uppercase tracking-widest">
                          Website
                        </a>
                      </li>
                      <li>
                        <a className="text-xl font-semibold uppercase tracking-widest">
                          I-cards
                        </a>
                      </li>
                      <li>
                        <a className="text-xl font-semibold uppercase tracking-widest">
                          Attendance System
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-lg font-semibold uppercase tracking-widest"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-lg font-semibold uppercase tracking-widest"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-lg font-semibold uppercase tracking-widest"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="text-white flex gap-4 items-center">
              <Image
                className="w-auto h-24"
                src="/header/logo.webp"
                alt=""
                width={623}
                height={1148}
                loading="eager"
              />
              <span className="text-2xl font-bold text-steel-blue">
                IDENTITY <br />
                <span className="text-amber">VERSE</span>
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 nav-links">
              <li>
                <a
                  href="#"
                  className=" text-xl font-semibold uppercase tracking-widest"
                >
                  About Us
                </a>
              </li>
              <li>
                <details>
                  <summary className="text-xl font-semibold uppercase tracking-widest">
                    Services
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a className="text-xl font-semibold uppercase tracking-widest">
                        Website
                      </a>
                    </li>
                    <li>
                      <a className="text-xl font-semibold uppercase tracking-widest">
                        I-cards
                      </a>
                    </li>
                    <li>
                      <a className="text-xl font-semibold uppercase tracking-widest">
                        Attendance System
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-lg font-semibold uppercase tracking-widest"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-lg font-semibold uppercase tracking-widest"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-lg font-semibold uppercase tracking-widest"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end w-full md:w-1/4 md:ms-40">
            <button className="cta w-full justify-center">
              <span className="span">Get Started</span>
              <span className="second">
                <svg
                  width="50px"
                  height="20px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      className="one"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    />
                    <path
                      className="two"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    />
                    <path
                      className="three"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
