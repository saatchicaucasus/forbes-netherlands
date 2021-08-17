import React from 'react'
import { Link } from 'gatsby'
import { injectIntl } from 'react-intl'
import FaLinkedin from '@meronex/icons/fa/FaLinkedin'
import FaFacebookSquare from '@meronex/icons/fa/FaFacebookSquare'
import FaInstagramSquare from '@meronex/icons/fa/FaInstagramSquare'
import FaYoutubeSquare from '@meronex/icons/fa/FaYoutubeSquare'
import Release1 from '../../images/footer/1.jpg'
import Release2 from '../../images/footer/2.jpg'
import Release3 from '../../images/footer/3.jpg'
import Release4 from '../../images/footer/4.jpg'
import Release5 from '../../images/footer/5.jpg'
import Release6 from '../../images/footer/6.jpg'

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-forbes-medium-black w-full flex-col font-serif font-semibold">
        <div className="flex justify-start sm:justify-evenly py-12 flex-wrap lg:flex-nowrap">
          <div className="w-6/12 lg:w-3/12 mx-5">
            <div className="flex justify-start sm:justify-center mb-10">
              <Link to="/">
                <div className="footer-logo">
                  <svg
                    id="prefix__Layer_1"
                    className="w-64 bg-forbes-medium-black"
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
                </div>
              </Link>
            </div>
          </div>

          <div className="w-12/12 sm:w-6/12 lg:w-3/12 border-gray-400 border-t-2 mx-5 mb-10">
            <div
              id="social-and-address"
              className="pt-5 flex flex-col justify-start"
            >
              <div
                id="social-icons"
                className="border-gray-400 border-b-2 pb-5"
              >
                <div className="flex">
                  <a title="facebook" href="">
                    <FaFacebookSquare
                      className="mx-2 text-white"
                      size="2.5rem"
                    />
                  </a>
                  <a title="twitter" href="">
                    <FaInstagramSquare
                      className="mx-2 text-white"
                      size="2.5rem"
                    />
                  </a>
                  <a title="linkedin" href="">
                    <FaLinkedin className="mx-2 text-white" size="2.5rem" />
                  </a>
                  <a title="linkedin" href="">
                    <FaYoutubeSquare
                      className="mx-2 text-white"
                      size="2.5rem"
                    />
                  </a>
                </div>
              </div>
              <div id="find-us" className="pt-4 text-gray-300"></div>
            </div>
          </div>

          <div className="w-12/12 lg:w-6/12 border-gray-400 border-t-2 mx-5">
            <div id="releases" className="flex flex-wrap justify-evenly pt-5">
              <div id="image-container-release">
                <img
                  className="w-20 sm:w-36 mx-6 mb-4"
                  src={Release1}
                  alt="release"
                />
              </div>
              <div id="image-container-release">
                <img
                  className="w-20 sm:w-36 mx-6 mb-4"
                  src={Release2}
                  alt="release"
                />
              </div>
              <div id="image-container-release">
                <img
                  className="w-20 sm:w-36 mx-6 mb-4"
                  src={Release3}
                  alt="release"
                />
              </div>
              <div id="image-container-release">
                <img
                  className="w-20 sm:w-36 mx-6 mb-4"
                  src={Release4}
                  alt="release"
                />
              </div>
              <div id="image-container-release">
                <img
                  className="w-20 sm:w-36 mx-6 mb-4"
                  src={Release5}
                  alt="release"
                />
              </div>
              <div id="image-container-release">
                <img
                  className="w-20 sm:w-36 mx-6 mb-4"
                  src={Release6}
                  alt="release"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="conditions"
          className="w-full p-5 flex justify-center lg:justify-end"
        >
          <div className="w-12/12 lg:w-9/12">
            <ul className="flex justify-start flex-wrap border-gray-400 border-t-2 border-b-2 py-4 mb-5">
              <li className="mx-2 text-sm py-1">
                <Link
                  className="text-gray-400 hover:text-gray-300"
                  to="/en-US/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>

              <li className="mx-2 text-sm py-1">
                <Link
                  className="text-gray-400 hover:text-gray-300"
                  to="/en-US/contact"
                >
                  Contact
                </Link>
              </li>

              <li className="mx-2 text-sm py-1">
                <Link
                  className="text-gray-400 hover:text-gray-300"
                  to="/en-US/forbes-press-room"
                >
                  Forbes Press Room
                </Link>
              </li>
              <li className="mx-2 text-sm py-1">
                <Link
                  className="text-gray-400 hover:text-gray-300"
                  to="/en-US/subscribe"
                >
                  Subscribe
                </Link>
              </li>
              <li className="mx-2 text-sm py-1">
                <Link
                  className="text-gray-400 hover:text-gray-300"
                  to="/en-US/advertising"
                >
                  Advertising
                </Link>
              </li>
            </ul>

            <div className="flex flex-col text-white">
              <span>© 2021 Forbes Netherlands. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default injectIntl(Footer)
