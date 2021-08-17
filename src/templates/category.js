import React from 'react'
import * as PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CategoryHeroCard from '../components/CategoryHeroCard'
import CategoryCard from '../components/CategoryCard'
import AdPremium from '../components/AdPremium'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class CategoryTemplate extends React.Component {
  render() {
    const CategoryItems = this.props.data.HeroCard
    const { category, categoryColor } = CategoryItems
    const HeroItem = this.props.data.HeroCard.posts

    console.log(HeroItem)
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <AdPremium />
        <section id="category" className="is-max-desktop mt-10">
          <div
            className={`${`border-` + categoryColor} ${
              `text-` + categoryColor
            } inline-flex	 py-4 font-sans tracking-wide font-semibold text-2xl text-left border-t-4 border-b-2 mt-4 mb-2 mx-4 lg:m-2 w-full`}
          >
            <h1 className="inline-flex">{category}</h1>
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
          <div>
            <CategoryHeroCard posts={HeroItem} />
            <CategoryCard posts={HeroItem} />
          </div>
        </section>
      </Layout>
    )
  }
}

CategoryTemplate.propTypes = propTypes

export default CategoryTemplate

export const pageQuery = graphql`
  query categoriesQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    HeroCard: contentfulCategories(id: { eq: $id }) {
      id
      category
      categoryColor
      posts {
        id
        contentful_id
        node_locale
        slug
        postTitle
        postDescription
        postDate
        postAuthor {
          position
          fullName
        }
        postImage {
          fluid(maxWidth: 960) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    Card: contentfulCategories(id: { eq: $id }) {
      id
      category
      categoryColor
      posts {
        id
        contentful_id
        node_locale
        slug
        postTitle
        postDescription
        postDate
        postAuthor {
          position
          fullName
        }
        postImage {
          fluid(maxWidth: 960) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
