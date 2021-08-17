import React, { useState } from 'react'
import Link from 'gatsby-link'
// import SelectLanguage from '../SelectLanguage'

const HeaderNavBar = () => {
  return (
    <div
      className="pt-16 hidden xl:block bg-forbes-extra-light-gray
    "
    >
      <nav
        className="
        flex 
        items-center 
        h-16
        xl:h-16 
        justify-center
        w-auto"
      >
        <div
          className="divide-x
        divide-forbes-site-black"
        >
          <Link
            className="px-2 text-forbes-site-black hover:text-turmeric-500 font-semibold"
            to="/en-US/categories/breaking-news"
          >
            Breaking News
          </Link>
          <Link
            className="px-2 text-forbes-site-black hover:text-turmeric-500 font-semibold"
            to="/en-US/categories/featured"
          >
            Featured
          </Link>
          <Link
            className="px-2 text-forbes-site-black hover:text-turmeric-500 font-semibold"
            to="/en-US/categories/netherland-news"
          >
            Netherland News
          </Link>
          <Link
            className="px-2 text-forbes-site-black hover:text-turmeric-500 font-semibold"
            to="/en-US/categories/business"
          >
            Business
          </Link>
          <Link
            className="px-2 text-forbes-site-black hover:text-turmeric-500 font-semibold"
            to="/en-US/categories/money"
          >
            Money
          </Link>
          <Link
            className="px-2 text-forbes-site-black hover:text-turmeric-500 font-semibold"
            to="/en-US/categories/innovation"
          >
            Innovation
          </Link>
          <Link
            className="px-2 text-forbes-site-black hover:text-turmeric-500 font-semibold"
            to="/en-US/categories/lifestyle"
          >
            Lifestyle
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default HeaderNavBar
