import React from 'react'
import * as PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import sub from '../images/sub.jpg'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class Subscription extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div className="my-10 mx-4">
          <h1 className="text-center text-4xl font-bold text-black py-5">
            CHOOSE YOUR SUBSCRIPTION
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="border-red-600 border-8 bg-gray-100 flex flex-col justify-center items-center m-5">
              <h2 className="font-serif font-semibold text-gray-600 text-center text-xl mt-4">
                6 ISSUES
              </h2>
              <img src={sub} alt="" className="w-full max-w-sm m-4" />
              <p className="text-lg text-gray-800 text-center mx-4">
                First issue will arrive in 2 - 4 weeks. Forbes Monaco is
                published 6 times a year except for issues combined periodically
                into two and occasional extra, expanded, or premium issues.
              </p>
              <h3
                id="price-release"
                className="text-5xl font-serif text-red-600 m-4"
              >
                €49.00<sup>*</sup>
              </h3>
              <p className="mx-5 text-gray-500 text-sm border-t border-gray-400 text-center">
                *Shipping included for Monaco only. For other destinations
                please consult us:
              </p>
              <a
                className="text-sm text-center text-turmeric-500 hover:text-turmeric-400 mb-4"
                href="mailto:admin@forbes-monaco.com"
              >
                admin@forbes-monaco.com
              </a>
              <p className="text-lg text-red-600 font-serif text-center m-2">
                Learn More
              </p>
              <a
                href="mailto:subscribe@forbesbenelux.com"
                className="text-white text-xl bg-red-600 px-10 py-3 font-serif mb-4 hover:text-white"
              >
                SUBSCRIBE
              </a>
            </div>
            <div className="border-red-600 border-8 bg-gray-100 flex flex-col justify-center items-center m-5">
              <h2 className="font-serif font-semibold text-gray-600 text-center text-xl mt-4">
                12 ISSUES
              </h2>
              <img src={sub} alt="" className="w-full max-w-sm m-4" />
              <p className="text-lg text-gray-800 text-center mx-4">
                First issue will arrive in 2 - 4 weeks. Forbes Monaco is
                published 6 times a year except for issues combined periodically
                into two and occasional extra, expanded, or premium issues.
              </p>
              <h3
                id="price-release"
                className="text-5xl font-serif text-red-600 m-4"
              >
                €99.00<sup>*</sup>
              </h3>
              <p className="mx-5 text-gray-500 text-sm border-t border-gray-400 text-center">
                *Shipping included for Monaco only. For other destinations
                please consult us:
              </p>
              <a
                className="text-sm text-center text-turmeric-500 hover:text-turmeric-400 mb-4"
                href="mailto:admin@forbes-monaco.com"
              >
                admin@forbes-monaco.com
              </a>
              <p className="text-lg text-red-600 font-serif text-center m-2">
                Learn More
              </p>
              <a
                href="mailto:subscribe@forbesbenelux.com"
                className="text-white text-xl bg-red-600 px-10 py-3 font-serif mb-4 hover:text-white"
              >
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

Subscription.propTypes = propTypes

export default Subscription

export const pageQuery = graphql`
  query SubscriptionENQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
