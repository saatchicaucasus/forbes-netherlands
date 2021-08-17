import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
// import SelectLanguage from '../SelectLanguage'
import { useFlexSearch } from 'react-use-flexsearch'

const Header = ({ node }) => {
  const [active, setActive] = useState(false)
  const [searchActive, setSearchActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const handleSearchClick = () => {
    setSearchActive(!searchActive)
    setActive(false)
  }

  const data = useStaticQuery(graphql`
    query SearchQuery {
      localSearchPost {
        index
        store
      }
    }
  `)

  const index = data.localSearchPost.index
  const store = data.localSearchPost.store

  const [query, setQuery] = useState('')
  const results = useFlexSearch(query, index, store)

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
                            fixed
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
        <Link to="/en-US/" className="m-auto  lg:absolute lg:left-16 ">
          <svg
            id="prefix__Layer_1"
            className="w-64 bg-forbes-site-black"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 480.6 41.3"
            xmlSpace="preserve"
          >
            <style>{'.prefix__st2{fill:#fff}'}</style>
            <path
              id="prefix__Background"
              fill="none"
              d="M-142.7-50.8h584v136h-584z"
            />
            <path
              id="prefix__Shape"
              d="M101.9 11.8c-2.6 0-4.7.7-7 1.7C95 7.4 95 2 95.3 0L82.4 2.5v1.1l1.3.1c1.7.3 2.4 1.3 2.6 3.7.4 4.5.3 28.7 0 32.6 3.5.8 7.2 1.3 10.9 1.3 10.2 0 16.3-6.2 16.3-16 .1-7.9-4.9-13.5-11.6-13.5zm-4.4 27.5c-.8 0-1.7-.1-2.2-.2-.2-2.7-.3-13.9-.3-23.6 1.2-.4 2-.5 3-.5 4.2 0 6.6 4.8 6.6 10.8 0 7.7-2.9 13.5-7.1 13.5zM34 12.1l-2 .6c-1.7-5.7-4.5-9-9.8-9h-6.7c-.3 3.6-.4 9.8-.4 16.1l4.5-.1c3-.1 4.3-2.3 5-5.5h1.7v13.5h-1.7c-.7-3.2-2-5.4-5-5.5l-4.5-.2c.1 4.8.2 8.9.4 11.4.3 3.6 1.3 5.2 3.9 5.5l2.3.2v1.6H0V39l1.8-.3c2.6-.3 3.6-2 3.9-5.5.5-5.9.6-18.1 0-25-.3-3.5-1.3-5.1-3.9-5.5L0 2.5V.9h33.8l.2 11.2zm10.8-.6c9.6 0 14.4 6.4 14.4 14.9 0 8.2-5.4 15-15 15S29.8 35 29.8 26.5c0-8.3 5.4-15 15-15zm-.5 1.8c-4.3 0-5.4 5.6-5.4 13.1 0 7.3 1.9 13.1 5.8 13.1 4.3 0 5.4-5.6 5.4-13.1 0-7.2-1.8-13.1-5.8-13.1zM116 26.6c0-7.8 5-15.1 14.9-15.1 8.1 0 11.9 5.9 11.9 13.5h-18c-.2 7 3.4 12.1 10.3 12.1 3 0 4.7-.8 6.5-2.1l.8 1c-2 2.7-6.1 5.3-11.7 5.3-8.6 0-14.7-6-14.7-14.7zm8.9-3.5l9-.2c.1-3.9-.6-9.5-3.8-9.5-3.3 0-5.1 5.2-5.2 9.7zm41.1-2.8l-1.5.4c-1.6-5-4-7.1-7.5-7.1-2.3 0-4 1.7-4 4.2s1.9 3.8 7.3 5.9c5 1.9 7 4.1 7 8.1 0 6-4.7 9.6-12.3 9.6-3.7 0-7.7-.8-10.2-1.7l-.3-8.2 1.5-.4c2.1 5.8 4.9 7.9 8.4 7.9 3.1 0 4.8-2.2 4.8-4.5 0-2.2-1.3-3.6-6.2-5.3-4.5-1.6-7.9-3.6-7.9-8.6 0-4.9 4.4-9 11.6-9 3.3 0 6.6.6 8.7 1.5l.6 7.2zM81.2 20c-3.9-2.6-8.1-1.5-8.9-.1-.3 4.6-.3 11.8 0 15.3.2 2.4.9 3.4 2.7 3.6l2.3.1v1.6H59.5V39l1.3-.1c1.8-.2 2.5-1.3 2.7-3.6.3-3.8.4-11.9 0-16.5-.2-2.4-.9-3.4-2.7-3.6l-1.3-.1V14l12.8-2.4-.1 6.6c3-6.8 8.9-7.7 12.1-5.8L81.2 20z"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#fff"
            />
            <path
              className="prefix__st2"
              d="M210.4 3.9v36.8h-2.1l-22.5-32-1.9-3.1h-.1l.1 3.6v31.5h-1.5V3.9h2L207 36l1.9 3.1-.1-3.7V3.9h1.6zM231.6 41.3c-2.5 0-4.7-.6-6.7-1.7-2-1.2-3.5-2.8-4.7-5-1.2-2.2-1.7-4.8-1.7-7.8s.6-5.7 1.7-7.8c1.1-2.2 2.7-3.8 4.5-5 1.9-1.2 4-1.7 6.4-1.7 2.5 0 4.6.6 6.4 1.7 1.8 1.1 3.1 2.7 4.1 4.7.9 2 1.4 4.4 1.4 7.2v.5c0 .2 0 .3-.1.4h-23.5v-1.4h22.9l-.7.3c0-3.6-1-6.5-2.8-8.8-1.8-2.2-4.4-3.3-7.7-3.3-2.1 0-4 .5-5.7 1.6-1.7 1.1-3 2.6-4 4.5-1 2-1.5 4.3-1.5 7.1s.5 5.1 1.5 7.1 2.3 3.4 4.1 4.5c1.7 1 3.7 1.6 5.9 1.6s4.2-.5 6-1.6c1.7-1 3.1-2.5 4-4.3l1.2.7c-.6 1.4-1.5 2.5-2.6 3.5s-2.4 1.7-3.8 2.3c-1.4.4-2.9.7-4.6.7zM264 12.9v1.3h-17.8v-1.3H264zm-10.6-7.6v28.3c0 2 .4 3.6 1.3 4.7s2.3 1.6 4.1 1.6c1 0 1.9-.2 2.7-.5.8-.4 1.5-.9 2.2-1.5l.7 1.3c-.6.6-1.4 1.2-2.4 1.6-1 .4-2.1.6-3.3.6-1.5 0-2.7-.3-3.8-.8-1.1-.6-1.9-1.4-2.4-2.5s-.8-2.5-.8-4.2v-28l1.7-.6zM269.5 40.8V0h1.6v19.6c.7-2.2 2-4 4-5.3 2-1.4 4.4-2 7.1-2 2.1 0 4 .4 5.5 1.2 1.6.8 2.8 2 3.7 3.5.9 1.5 1.3 3.4 1.3 5.6v18.2h-1.6V22.9c0-3-.8-5.3-2.5-6.9-1.7-1.6-3.9-2.3-6.7-2.3-2 0-3.8.5-5.5 1.4-1.7.9-3 2.2-3.9 3.8-1 1.6-1.5 3.4-1.5 5.4v16.5h-1.5zM313.2 41.3c-2.5 0-4.7-.6-6.7-1.7-2-1.2-3.5-2.8-4.7-5-1.2-2.2-1.7-4.8-1.7-7.8s.6-5.7 1.7-7.8c1.1-2.2 2.7-3.8 4.5-5 1.9-1.2 4-1.7 6.4-1.7 2.5 0 4.6.6 6.4 1.7 1.8 1.1 3.1 2.7 4.1 4.7.9 2 1.4 4.4 1.4 7.2v.5c0 .2 0 .3-.1.4H301v-1.4h22.9l-.7.3c0-3.6-1-6.5-2.8-8.8-1.8-2.2-4.4-3.3-7.7-3.3-2.1 0-4 .5-5.7 1.6-1.7 1.1-3 2.6-4 4.5-1 2-1.5 4.3-1.5 7.1s.5 5.1 1.5 7.1 2.3 3.4 4.1 4.5c1.7 1 3.7 1.6 5.9 1.6s4.2-.5 6-1.6c1.7-1 3.1-2.5 4-4.3l1.2.7c-.6 1.4-1.5 2.5-2.6 3.5s-2.4 1.7-3.8 2.3c-1.4.4-3 .7-4.6.7zM332.2 40.8V12.9h1.4l.1 6.7c.7-2.1 1.8-3.9 3.4-5.2 1.6-1.4 3.5-2.1 5.7-2.1.9 0 1.7.1 2.3.3.6.2 1.1.5 1.5.9l-.6 1.3c-.4-.3-.8-.6-1.3-.8-.5-.2-1.2-.3-2.2-.3-1.6 0-3.1.5-4.4 1.5-1.3 1-2.4 2.4-3.2 4-.8 1.7-1.2 3.5-1.2 5.5v16h-1.5zM353.4 0v34.5c0 1.9.3 3.3.9 4.1.6.8 1.6 1.2 3 1.2.8 0 1.4-.1 1.9-.2.4-.1.9-.3 1.5-.5l-.2 1.4c-.4.2-.9.3-1.5.5-.6.1-1.2.2-2 .2-1.7 0-3.1-.5-3.9-1.6-.9-1.1-1.3-2.8-1.3-5.1V0h1.6zM383.6 22.1c0-2.6-.7-4.7-2.2-6.2-1.5-1.5-3.5-2.3-6.2-2.3-2.3 0-4.2.5-5.9 1.5-1.7 1-2.9 2.6-3.7 4.9l-1.2-.8c.8-2.3 2.2-4 4-5.1 1.9-1.2 4.2-1.7 6.8-1.7 2 0 3.8.4 5.3 1.1 1.5.7 2.6 1.8 3.4 3.3.8 1.5 1.2 3.2 1.2 5.2v14.2c0 2.5 1 3.7 3.1 3.7.8 0 1.4-.1 2-.4l-.1 1.3c-.6.3-1.3.5-2.2.5-.7 0-1.3-.1-2-.4-.7-.3-1.2-.8-1.6-1.6-.4-.7-.6-1.8-.6-3.2v-2.2l.5-.2c-.3 1.7-1 3.2-2.2 4.4-1.2 1.2-2.5 2-4.1 2.6-1.6.6-3.2.8-4.9.8-1.8 0-3.4-.3-4.7-.8s-2.4-1.3-3.1-2.4c-.7-1-1.1-2.3-1.1-3.8 0-2.1.7-3.7 2.1-4.9 1.4-1.2 3.4-2.1 5.9-2.5l11.9-2.3v1.3l-11 2.2c-2.5.4-4.3 1.2-5.5 2.2-1.2 1-1.8 2.4-1.8 4 0 1.8.6 3.2 2 4.2 1.3 1 3.2 1.5 5.6 1.5 1.1 0 2.3-.2 3.5-.5 1.2-.3 2.3-.8 3.4-1.5s1.9-1.6 2.6-2.7c.7-1.1 1-2.4 1-3.9v-9.5zM395.3 40.8V12.9h1.5l.1 7.5-.2-.3c.4-1.5 1.2-2.9 2.3-4.1 1.1-1.2 2.4-2.1 3.9-2.8 1.5-.7 3.3-1 5.2-1 2.1 0 4 .4 5.5 1.2 1.6.8 2.8 1.9 3.7 3.4.9 1.5 1.3 3.3 1.3 5.6v18.2H417V22.9c0-3-.8-5.3-2.5-6.9-1.7-1.6-3.9-2.4-6.7-2.4-2 0-3.8.5-5.5 1.4-1.7.9-3 2.2-3.9 3.8-1 1.6-1.5 3.4-1.5 5.5v16.4h-1.6zM438.7 41.3c-2.5 0-4.7-.6-6.6-1.7-1.9-1.2-3.4-2.8-4.5-5s-1.6-4.8-1.6-7.8.5-5.7 1.6-7.8c1.1-2.2 2.6-3.8 4.5-5 2-1.2 4.2-1.7 6.7-1.7 2.8 0 5.1.8 7.1 2.3 2 1.5 3.3 3.7 4 6.4l-.2.2V0h1.6v40.7h-1.5l-.1-8.5.2.1c-.4 1.9-1.1 3.5-2.1 4.9-1.1 1.3-2.4 2.4-3.9 3.1-1.7.7-3.4 1-5.2 1zm.1-1.4c2.1 0 4-.5 5.6-1.6 1.6-1.1 2.9-2.6 3.8-4.6.9-2 1.4-4.3 1.4-7s-.5-5-1.4-7c-.9-2-2.2-3.5-3.8-4.5-1.6-1.1-3.5-1.6-5.6-1.6-3.5 0-6.2 1.2-8.3 3.5-2.1 2.3-3.1 5.6-3.1 9.7s1 7.3 3.1 9.6c2.2 2.4 4.9 3.5 8.3 3.5zM469.7 41.3c-2.9 0-5.3-.6-7.4-1.7-2.1-1.1-3.5-2.8-4.2-5l1.4-.8c.6 2 1.8 3.6 3.6 4.6 1.8 1 4.1 1.6 6.8 1.6 2.8 0 5-.6 6.6-1.7 1.6-1.1 2.4-2.6 2.4-4.5 0-1.3-.4-2.4-1.3-3.3-.8-.9-2.4-1.6-4.7-2l-6.4-1.4c-2.6-.6-4.5-1.4-5.6-2.6-1.1-1.2-1.7-2.6-1.7-4.3 0-1.5.4-2.8 1.3-4 .9-1.2 2.1-2.1 3.7-2.8 1.6-.7 3.4-1 5.4-1 2.8 0 5.1.6 6.9 1.7 1.8 1.1 3 2.8 3.6 5.1l-1.3.8c-.5-2.2-1.6-3.8-3.2-4.8s-3.6-1.5-6-1.5c-1.7 0-3.3.3-4.6.8-1.3.5-2.4 1.3-3.1 2.2-.8.9-1.1 2-1.1 3.2 0 1.3.4 2.4 1.3 3.4s2.4 1.7 4.5 2.2l6.6 1.5c2.6.6 4.5 1.4 5.6 2.5 1.1 1.1 1.6 2.5 1.6 4.2 0 1.6-.4 2.9-1.3 4.1-.9 1.2-2.1 2.1-3.8 2.7-1.5.5-3.4.8-5.6.8z"
            />
          </svg>
        </Link>
        <Link
          to="/en-US/subscribe"
          className="m-auto hidden lg:block  lg:absolute lg:right-14 align-vertical"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2   px-6 rounded">
            Subscribe
          </button>
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
          <div className="w-full bg-forbes-site-black text-1xl text-forbes-site-white">
            <input
              type="text"
              name="search-input"
              id="search-input inpu1"
              placeholder="Tap enter to search"
              className="w-full bg-forbes-site-black text-forbes-site-white h-16
                        xl:h-16 placeholder-gray-400 pl-5 pr-10 text-1xl font-sans"
              name="query"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div>
              {results.map((result) => (
                <Link ley={result.slug} to={`/en-US/posts/${result.slug}`}>
                  <li>{result.title}</li>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
