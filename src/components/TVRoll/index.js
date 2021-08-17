import React from 'react'
import Helmet from 'react-helmet'

const TVRoll = () => (
  <div>
    <Helmet>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    </Helmet>
    <section id="category" className="is-max-desktop mt-10">
      <h1 className="flex py-4 font-sans tracking-wide font-semibold text-red-700 text-2xl text-left border-t-4 border-b-2 border-red-700 mt-4 mb-2 mx-4 lg:m-2">
        Forbes TV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-5 mx-2"
        >
          <path
            transform="rotate(-180 8.964 11)"
            fill="currentColor"
            d="M1 10h16v2H1z"
          />
          <path
            transform="rotate(134.999 14.965 13.124)"
            fill="currentColor"
            d="M11 12.1h8v2h-8z"
          />
          <path
            transform="rotate(-134.999 14.965 8.877)"
            fill="currentColor"
            d="M11 7.9h8v2h-8z"
          />
        </svg>
      </h1>
      <div className="bg-forbes-site-white vertical-centered">
        <div className="elfsight-app-9739bf45-03bc-47cf-b420-622cbc0b5cfe"></div>
      </div>
    </section>
  </div>
)

export default TVRoll
