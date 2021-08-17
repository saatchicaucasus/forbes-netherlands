import React from 'react'
import { Link } from 'gatsby'
import Time from '../Time'
import Img from 'gatsby-image'
import AdPremium from '../AdPremium'

const CategoryCard = ({ posts }) => {
  const cardRenderer = []

  for (var i = 1; i < posts.length; i += 4) {
    cardRenderer.push(
      <>
        <div className="grid flex md:grid-cols-3 gap-8">
          {posts.slice(i).map((p) => (
            <div className="my-6" key={i}>
              <Link to={`/${p.node_locale}/posts/${p.slug}`}>
                <figure className="mb-4 object-cover">
                  {p.postImage ? <Img fluid={p.postImage.fluid} /> : null}
                </figure>
              </Link>
              <h1 className="hover:underline tracking-wide mt-4 mb-3">
                <Link
                  className="BlogRollTitle"
                  to={`/${p.node_locale}/posts/${p.slug}`}
                >
                  {p.postTitle}
                </Link>
              </h1>
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
        <div>
          <AdPremium />
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="bg-forbes-site-white border-t-2">
        <div className="m-3">{cardRenderer}</div>
      </div>
    </div>
  )
}

export default CategoryCard
