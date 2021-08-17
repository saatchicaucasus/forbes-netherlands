import React from 'react'
import * as PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FaLinkedin from '@meronex/icons/fa/FaLinkedin'
import FaFacebookSquare from '@meronex/icons/fa/FaFacebookSquare'
import FaInstagramSquare from '@meronex/icons/fa/FaInstagramSquare'
import FaYoutubeSquare from '@meronex/icons/fa/FaYoutubeSquare'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ForbesPressRoom extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div className="flex flex-col justify-center bg-white items-center">
          <div className="max-w-screen-md lg:px-10 my-8 mx-4">
            <h1 className="text-turmeric-600 text-4xl font-serif font-bold">
              Forbes Monaco Corporate Communications
            </h1>
            <p className="text-gray-700 my-5">
              We publish press releases and news about the company. For members
              of the press: if you're interested in interviewing a Forbes
              reporter or contributor or learning more about Forbes Monaco,
              please contact –{' '}
              <a className="text-turmeric-600 hover:text-turmeric-500" href="#">
                admin@forbes-monaco.com
              </a>
              . Follow us on Instagram @forbesmonaco
            </p>
            <div className="flex">
              <a title="facebook" href="https://www.facebook.com/forbes/">
                <FaFacebookSquare
                  className="mx-2 bg-white text-black "
                  size="2.5rem"
                />
              </a>
              <a title="twitter" href="https://twitter.com/Forbes">
                <FaInstagramSquare
                  className="mx-2 bg-white text-black "
                  size="2.5rem"
                />
              </a>
              <a
                title="linkedin"
                href="https://www.linkedin.com/company/forbes-magazine"
              >
                <FaLinkedin
                  className="mx-2 bg-white text-black "
                  size="2.5rem"
                />
              </a>
              <a title="linkedin" href="https://www.youtube.com/user/forbes">
                <FaYoutubeSquare
                  className="mx-2 bg-white text-black "
                  size="2.5rem"
                />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

ForbesPressRoom.propTypes = propTypes

export default ForbesPressRoom

export const pageQuery = graphql`
  query ForbesPressRoomENQuery {
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
