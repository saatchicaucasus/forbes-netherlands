import React, { useState } from 'react'
import Link from 'gatsby-link'
// import SelectLanguage from '../SelectLanguage'

const HeaderSticky = ({ props }) => {
  const [active, setActive] = useState(false)
  const [searchActive, setSearchActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const handleSearchClick = () => {
    setSearchActive(!searchActive)
    setActive(false)
  }

  return (
    <>
      <nav
        className="
                            flex 
                            items-center 
                            bg-forbes-site-black
                            py-5 
                            px-1 
                            h-16
                            xl:h-16 
                            justify-between 
                            z-50 
                            w-full"
      >
        <button className={`focus:outline-none pl-3`} onClick={handleClick}>
          {active ? (
            <svg
              className="w-8 h-8 text-forbes-site-white fill-current cursor-pointer outline-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z" />
              <path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 cursor-pointer outline-none text-forbes-site-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z" />
            </svg>
          )}
        </button>
        <div
          className={`${
            active
              ? 'absolute z-20 top-16 w-screen -left-1 bg-transparent flex justify-start'
              : 'hidden'
          }`}
        >
          <div className="flex flex-col bg-forbes-medium-black w-screen md:w-1/3 h-screen px-1">
            <button className="text-white hover:text-turmeric-500 font-semibold py-3 px-12 rounded inline-flex items-start">
              <Link to="/en-US/categories/money">Money</Link>
            </button>
            <button className="text-white hover:text-turmeric-500 font-semibold py-3 px-12 rounded inline-flex items-start">
              <Link to="/en-US/categories/business">Business</Link>
            </button>
            <button className="text-white hover:text-turmeric-500 font-semibold py-3 px-12 rounded inline-flex items-start">
              <Link to="/en-US/categories/innovation">Innovation</Link>
            </button>
            <button className="text-white hover:text-turmeric-500 font-semibold py-3 px-12 rounded inline-flex items-start">
              <Link to="/en-US/categories/lifestyle">Lifestyle</Link>
            </button>
            <button className="text-white hover:text-turmeric-500 font-semibold py-3 px-12 rounded inline-flex items-start">
              <Link to="/en-US/categories/featured">Featured</Link>
            </button>
            <button className="text-white hover:text-turmeric-500 font-semibold py-3 px-12 rounded inline-flex items-start">
              <Link to="/en-US/categories/breaking-news">Breaking News</Link>
            </button>
            <button className="text-white hover:text-turmeric-500 font-semibold py-3 px-12 rounded inline-flex items-start">
              <Link to="/en-US/categories/netherland-news">
                Netherland News
              </Link>
            </button>
            <div className="dropdown">
              <button className="text-white hover:text-turmeric-500 font-semibold py-3 px-12 rounded inline-flex items-start">
                <span className="mr-1">More</span>
              </button>
              <ul className="dropdown-menu hidden pt-0 w-full pl-0">
                <li className="">
                  <Link
                    className="text-gray-300 hover:text-turmeric-600 bg-forbes-medium-black py-2 pl-16 block "
                    to="/en-US/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-gray-300 hover:text-turmeric-600 bg-forbes-medium-black py-2 pl-16 block "
                    to="/en-US/subscribe"
                  >
                    Subscribe
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-gray-300 hover:text-turmeric-600 bg-forbes-medium-black py-2 pl-16 block "
                    to="/en-US/advertising"
                  >
                    Advertising
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-gray-300 hover:text-turmeric-600 bg-forbes-medium-black py-2 pl-16 block "
                    to="/en-US/forbes-press-room"
                  >
                    Forbes Press Room
                  </Link>
                </li>

                <li className="">
                  <Link
                    className="text-gray-300 hover:text-turmeric-600 bg-forbes-medium-black py-2 pl-16 block "
                    to="/en-US/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <SelectLanguage langs={props.langs} /> */}
        <Link to="/" className="m-auto pr-10 lg:pr-0 lg:absolute lg:left-16 ">
          <svg
            className="w-48 bg-forbes-site-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 201.6 24"
          >
            <path
              d="M58.4 6.9c-1.5 0-2.7.4-4 1 0-3.5.1-6.6.1-7.7l-7.4 1.4v.7l.7.1c1 .1 1.4.7 1.5 2.1.2 2.6.2 16.4 0 18.6 2 .4 4.1.8 6.3.8 5.8 0 9.4-3.5 9.4-9.2 0-4.6-2.8-7.8-6.6-7.8zm-2.6 15.8c-.4 0-1-.1-1.3-.1-.1-1.6-.2-8-.2-13.5.7-.2 1.1-.3 1.7-.3 2.4 0 3.8 2.7 3.8 6.2.1 4.3-1.6 7.7-4 7.7zM19.5 7.1l-1.2.3c-1-3.3-2.6-5.1-5.6-5.1H8.9c-.2 2.1-.2 5.6-.2 9.2l2.6-.1c1.7-.1 2.4-1.3 2.8-3.2h1v7.7h-1c-.4-1.8-1.1-3.1-2.8-3.2l-2.6-.1c0 2.8.1 5.1.2 6.5.2 2 .7 2.9 2.2 3.2l1.3.1v.9H0v-.9l1-.1c1.5-.2 2-1.1 2.2-3.2.3-3.4.3-10.4 0-14.3-.1-2-.7-2.9-2.2-3.1l-1-.1V.7h19.4l.1 6.4zm6.2-.4c5.5 0 8.2 3.7 8.2 8.5 0 4.7-3.1 8.6-8.6 8.6s-8.2-3.7-8.2-8.5c0-4.7 3-8.6 8.6-8.6zm-.3 1.1c-2.4 0-3.1 3.2-3.1 7.5 0 4.1 1.1 7.5 3.3 7.5 2.4 0 3.1-3.2 3.1-7.5 0-4.2-1.1-7.5-3.3-7.5zm41 7.6c0-4.5 2.9-8.7 8.5-8.7 4.6 0 6.8 3.4 6.8 7.8H71.5c-.1 4 1.9 6.9 5.9 6.9 1.7 0 2.7-.4 3.7-1.2l.5.6c-1.1 1.6-3.5 3-6.7 3-5 0-8.5-3.4-8.5-8.4zm5.1-2l5.2-.1c0-2.2-.3-5.4-2.2-5.4-1.9-.1-2.9 2.9-3 5.5zM95 11.8l-.8.2c-.9-2.9-2.3-4.1-4.3-4.1-1.3 0-2.3 1-2.3 2.4s1.1 2.2 4.2 3.3c2.9 1.1 4 2.4 4 4.6 0 3.4-2.7 5.5-7 5.5-2.1 0-4.4-.5-5.8-1l-.1-4.7.8-.2c1.2 3.3 2.8 4.5 4.8 4.5 1.8 0 2.7-1.2 2.7-2.5s-.7-2-3.5-3c-2.6-.9-4.5-2-4.5-4.9 0-2.8 2.5-5.2 6.7-5.2 1.9 0 3.8.3 5 .9l.1 4.2zm-48.5-.2c-2.2-1.5-4.6-.8-5.1 0-.2 2.6-.1 6.7.1 8.7.1 1.4.5 1.9 1.5 2.1l1.3.1v.9H34v-.9l.7-.1c1-.1 1.4-.7 1.5-2.1.2-2.2.2-6.8 0-9.4-.1-1.4-.5-1.9-1.5-2.1H34v-.7l7.3-1.4-.1 3.8c1.7-3.9 5.1-4.4 7-3.3l-1.7 4.4z"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#fff"
            />
            <path
              d="M104.5 23.7V2.3h7.5c2.2 0 3.9.5 5 1.4 1.1.9 1.7 2.3 1.7 4.1 0 1.3-.3 2.4-1 3.3-.7.9-1.7 1.5-3.1 1.8 1.5.2 2.6.8 3.5 1.7.8.9 1.3 2.1 1.3 3.6 0 1.8-.6 3.2-1.8 4.1-1.2 1-3 1.4-5.4 1.4h-7.7zm.9-11.2h6.6c3.8 0 5.8-1.5 5.8-4.6 0-3.2-1.9-4.7-5.8-4.7h-6.6v9.3zm0 10.4h6.7c2.1 0 3.6-.4 4.7-1.2 1-.8 1.6-2 1.6-3.6s-.5-2.8-1.6-3.6c-1-.8-2.6-1.2-4.7-1.2h-6.7v9.6zM128 24c-1.4 0-2.7-.3-3.9-1-1.1-.7-2.1-1.6-2.7-2.9-.7-1.3-1-2.8-1-4.5 0-1.8.3-3.3 1-4.5.7-1.3 1.5-2.2 2.6-2.9 1.1-.7 2.3-1 3.7-1 1.4 0 2.7.3 3.7 1 1 .6 1.8 1.6 2.4 2.7.6 1.2.8 2.6.8 4.2v.5h-13.7v-.8h13.3l-.4.2c0-2.1-.6-3.8-1.6-5.1-1-1.3-2.5-1.9-4.5-1.9-1.2 0-2.3.3-3.3.9-1 .6-1.7 1.5-2.3 2.6-.6 1.1-.8 2.5-.8 4.1s.3 3 .9 4.1c.6 1.1 1.4 2 2.4 2.6 1 .6 2.2.9 3.5.9 1.3 0 2.5-.3 3.5-.9 1-.6 1.8-1.4 2.3-2.5l.7.4c-.4.8-.9 1.5-1.5 2-.6.6-1.4 1-2.2 1.3-1 .3-1.9.5-2.9.5zm8.5-.3V7.5h.8v4.4l-.1-.2c.3-.9.7-1.7 1.3-2.4.6-.7 1.4-1.2 2.3-1.6.9-.4 1.9-.6 3-.6 1.2 0 2.3.2 3.2.7.9.5 1.6 1.1 2.1 2 .5.9.8 1.9.8 3.2v10.6h-.9V13.3c0-1.8-.5-3.1-1.4-4-1-.9-2.3-1.4-3.9-1.4-1.2 0-2.2.3-3.2.8-1 .6-1.7 1.3-2.3 2.2-.6.9-.8 2-.8 3.2v9.5h-.9zm22.7.3c-1.4 0-2.7-.3-3.9-1-1.1-.7-2.1-1.6-2.7-2.9-.7-1.3-1-2.8-1-4.5 0-1.8.3-3.3 1-4.5.7-1.3 1.5-2.2 2.6-2.9 1.1-.7 2.3-1 3.7-1 1.4 0 2.7.3 3.7 1 1 .6 1.8 1.6 2.4 2.7.6 1.2.8 2.6.8 4.2v.5h-13.7v-.8h13.3l-.4.2c0-2.1-.6-3.8-1.6-5.1-1-1.3-2.5-1.9-4.5-1.9-1.2 0-2.3.3-3.3.9-1 .6-1.7 1.5-2.3 2.6-.6 1.1-.8 2.5-.8 4.1s.3 3 .9 4.1c.6 1.1 1.4 2 2.4 2.6 1 .6 2.2.9 3.5.9 1.3 0 2.5-.3 3.5-.9 1-.6 1.8-1.4 2.3-2.5l.7.4c-.4.8-.9 1.5-1.5 2-.6.6-1.4 1-2.2 1.3-1 .3-1.9.5-2.9.5zm9.3-24v20.1c0 1.1.2 1.9.6 2.4.4.5.9.7 1.7.7.5 0 .8 0 1.1-.1.3-.1.5-.2.8-.3l-.1.8c-.2.1-.5.2-.8.3-.3.1-.7.1-1.1.1-1 0-1.8-.3-2.3-.9-.5-.6-.8-1.6-.8-3V0h.9zm10.2 24c-1.2 0-2.2-.2-3-.6-.9-.4-1.5-1.1-2-1.9-.5-.9-.7-1.9-.7-3.2V7.5h.9V18c0 1.7.4 3 1.3 3.9.9.9 2.1 1.3 3.7 1.3 1.1 0 2-.2 2.8-.6.8-.4 1.5-.9 2-1.5s.9-1.3 1.2-2 .4-1.4.4-2.1V7.5h.9v16.2h-.8v-4c-.4 1.3-1.2 2.3-2.3 3.1-1.4.8-2.8 1.2-4.4 1.2zm22.1-16.5l-6.2 8-.2.2-6.2 8H187l6.8-8.7.1-.1 5.7-7.4h1.2zm-12.3 0l5.8 7.3.1.2 7.1 8.8h-1.2l-6.4-7.9-.2-.2-6.5-8.1h1.3z"
              fill="#fff"
            />
          </svg>
        </Link>

        <div
          className="order-3 pr-3 relative right-1 z-50"
          onClick={handleSearchClick}
        >
          {searchActive ? (
            <svg
              className="w-8 h-8 text-forbes-site-white fill-current cursor-pointer outline-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z" />
              <path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z" />
            </svg>
          ) : (
            <svg
              className="w-5 text-forbes-site-white fill-current cursor-pointer"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          )}
        </div>
        <div
          className={`${
            searchActive ? '' : 'hidden'
          }   absolute w-full left-0 top-0 z-20`}
        >
          <input
            type="text"
            name="search-input"
            id="search-input inpu1"
            placeholder="Tap enter to search"
            className="w-full bg-forbes-site-black text-forbes-site-white h-16
                        xl:h-16 placeholder-gray-400 pl-5 pr-10 text-2xl font-sans"
          />
        </div>
      </nav>
    </>
  )
}

export default HeaderSticky
