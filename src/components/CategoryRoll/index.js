import React from 'react'
import { Link } from 'gatsby'
import Time from '../Time'
import Img from 'gatsby-image'

const CategoryRoll = ({ node }) => (
  <div>
    <section id="category" className="is-max-desktop mt-10">
      <div
        className={`${`border-` + node.categoryColor} ${
          `text-` + node.categoryColor
        } inline-flex	 py-4 font-sans tracking-wide font-semibold text-2xl text-left border-t-4 border-b-2 mt-4 mb-2 mx-4 lg:m-2 w-full`}
      >
        <Link to={`/${node.node_locale}/categories/${node.categorySlug}`}>
          <h1 className="inline-flex">{node.category}</h1>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-5 mx-2 inline-flex"
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
      </div>

      <div className="Blogroll1X2example bg-forbes-site-white">
        {node &&
          node.posts.slice(0, 3).map((p, i) => (
            <div className="m-3" key={i}>
              <Link to={`/${p.node_locale}/posts/${p.slug}`}>
                <figure className="mb-4">
                  {p.postImage ? <Img fluid={p.postImage.fluid} /> : null}
                </figure>
              </Link>
              <h3 className="hover:underline tracking-wide">
                <Link
                  className="BlogRollTitle"
                  to={`/${p.node_locale}/posts/${p.slug}`}
                >
                  {p.postTitle}
                </Link>
              </h3>
              <div className="text-forbes-type-black text-xs mt-4 font-sans font-normal">
                <span className="b_r">
                  <Time pubdate date={p.postDate} />
                </span>
                By{' '}
                <span className="font-sans text-forbes-type-black font-bold px-1">
                  {p.postAuthor.fullName} {''}
                </span>
                <span className="text-forbes-type-black text-xs font-sans font-normal">
                  {p.postAuthor.position}
                </span>
              </div>
              <p className="BlogRollPostContent mt-3">{p.postDescription}</p>
              <Link to={`/${p.node_locale}/posts/${p.slug}`}>
                <p className="text-forbes-read-more text-md underline mt-3 font-geo font-normal">
                  Read more
                </p>
              </Link>
            </div>
          ))}
      </div>
    </section>
  </div>
)

export default CategoryRoll
