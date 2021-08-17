import React from 'react'
import * as PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import RichText from '../components/RichText'
import Time from '../components/Time'
import AdPremium from '../components/AdPremium'
import ViewCounter from '../components/ViewCounter'
import Layout from '../components/Layout'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends React.Component {
  render() {
    const posts = this.props.data.allContentfulPosts.edges

    console.log(posts)
    const {
      postTitle,
      postDate,
      postAuthor,
      postContent,
      postImage,
      id,
      categoryColor,
      category,
      postCategories,
    } = posts
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <section className="bg-forbes-site-white">
          <AdPremium />
          {posts &&
            posts.map(({ node: post }) => (
              <div className="flex flex-col justify-center items-center">
                <div className="max-w-screen-lg">
                  <div className="w-full mt-16">
                    {post.postCategories &&
                      post.postCategories.map((p, i) => (
                        <div
                          key={i}
                          className={`${`border-` + p.categoryColor} ${
                            `text-` + p.categoryColor
                          } inline-flex	 py-4 font-sans tracking-wide font-semibold text-2xl text-left border-t-4 border-b-2 mt-4 mb-2 mx-4 lg:m-2 w-full`}
                        >
                          <h1 className="inline-flex">{p.category}</h1>
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
                      ))}
                    <div
                      className="container is-max-desktop px-2"
                      id="article-section"
                    >
                      <div className="flex px-2 lg:px-5">
                        <div className="flex mr-2">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="eye"
                            className="w-3 text-forbes-dark-gray mr-1"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                            ></path>
                          </svg>
                          <ViewCounter id={`${id}`} />
                        </div>
                        <div className="ml-2 font-sans font-normal">
                          <Time pubdate date={post.postDate} />
                        </div>
                      </div>

                      <div className="px-2 lg:px-5">
                        <div className="mt-5 mb-4">
                          <h1 className="text-2xl tracking-wide xl:text-4xl text-forbes-type-black font-serif font-bold tracking-wide	">
                            <div>{post.postTitle}</div>
                          </h1>
                        </div>
                        <div>
                          <div className="my-3 flex items-center">
                            <figure className="w-16 mr-2">
                              {post.postAuthor ? (
                                <Img
                                  className="rounded-full"
                                  alt={post.postAuthor.fullName}
                                  fluid={post.postAuthor.avatar.fluid}
                                />
                              ) : null}
                            </figure>
                            <div className="flex-col">
                              <div className="flex flex-row items-center">
                                <p className="text-forbes-type-black mr-2 font-sans font-bold">
                                  {post.postAuthor.fullName}
                                </p>
                                <p className="text-forbes-dark-gray text-sm font-sans font-normal">
                                  {post.postAuthor.position}
                                </p>
                              </div>
                              {post.postCategories.map(
                                (
                                  { node_locale, categorySlug, category },
                                  i
                                ) => (
                                  <Link
                                    className="text-green-600 text-sm hover:text-green-600 font-sans font-normal"
                                    to={`/${node_locale}/categories/${categorySlug}`}
                                  >
                                    {category}
                                  </Link>
                                )
                              )}
                              <div>
                                <h3 className="text-forbes-dark-gray font-serif font-normal italic">
                                  {post.postAuthor.quote}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          {post.postImage ? (
                            <Img
                              alt={post.postTitle}
                              fluid={post.postImage.fluid}
                            />
                          ) : null}
                        </div>

                        <div className="mt-4 font-geo font-normal">
                          <RichText
                            json={post.postContent.json}
                            image={post.postContent}
                          />
                        </div>

                        <div className="my-8 items-center">
                          <div className="flex pt-6 items-center border-forbes-dark-gray border-t-2 pb-10">
                            <figure className="w-16 mr-2">
                              {post.postAuthor ? (
                                <Img
                                  className="rounded-full"
                                  alt={post.postAuthor.fullName}
                                  fluid={post.postAuthor.avatar.fluid}
                                />
                              ) : null}
                            </figure>
                            <div className="flex-col">
                              <div className="flex flex-row items-center">
                                <p className="text-forbes-type-black mr-2 font-sans font-bold">
                                  {post.postAuthor.fullName}
                                </p>
                                <p className="text-forbes-dark-gray text-sm font-sans font-normal">
                                  {post.postAuthor.position}
                                </p>
                              </div>
                              {post.postCategories.map(
                                (
                                  { node_locale, categorySlug, category },
                                  i
                                ) => (
                                  <Link
                                    className="text-green-600 text-sm hover:text-green-600 font-sans font-normal"
                                    to={`/${node_locale}/categories/${categorySlug}`}
                                  >
                                    {category}
                                  </Link>
                                )
                              )}
                              <div>
                                <h3 className="text-forbes-dark-gray font-serif font-normal italic">
                                  {post.postAuthor.quote}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <AdPremium />
        </section>
      </Layout>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query postQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulPosts(filter: { id: { eq: $id } }) {
      edges {
        node {
          postTitle
          node_locale
          slug
          id
          postDate
          postImage {
            fluid(maxWidth: 960) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          postCategories {
            node_locale
            categorySlug
            categoryColor
            category
          }
          postContent {
            json
          }
          postAuthor {
            fullName
            position
            quote
            avatar {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
    # contentfulPosts(id: { eq: $id }) {
    #   postTitle
    #   node_locale
    #   slug
    #   id
    #   postDate
    #   postImage {
    #     fluid(maxWidth: 960) {
    #       ...GatsbyContentfulFluid_withWebp
    #     }
    #   }
    #   postAuthor {
    #     quote
    #     position
    #     fullName
    #     avatar {
    #       fluid(maxWidth: 200) {
    #         ...GatsbyContentfulFluid_withWebp
    #       }
    #     }
    #   }
    #   postCategories {
    #     node_locale
    #     categorySlug
    #     categoryColor
    #     category
    #   }
    #   postContent {
    #     json
    #   }
    # }
  }
`
