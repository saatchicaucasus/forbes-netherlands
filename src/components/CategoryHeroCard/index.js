import React from 'react'
import { Link } from 'gatsby'
import Time from '../Time'
import Img from 'gatsby-image'

const CategoryHeroCard = ({ posts }) => (
  <div>
    <div className="bg-forbes-site-white">
      {posts &&
        posts.slice(0, 1).map((p, i) => (
          <div className="my-6 mx-2" key={i}>
            <div className="grid md:grid-cols-2 gap-4 items-top">
              <div>
                <Link to={`/${p.node_locale}/posts/${p.slug}`}>
                  <figure className="mb-4 object-cover">
                    {p.postImage ? <Img fluid={p.postImage.fluid} /> : null}
                  </figure>
                </Link>
              </div>
              <div>
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
            </div>
          </div>
        ))}
    </div>
  </div>
)

export default CategoryHeroCard
