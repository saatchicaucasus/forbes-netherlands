import React from 'react'
import * as PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div className="bg-forbes-site-white">
          <div className="w-full bg-forbes-light-gray">
            <div className="h-12" id="sticky-whitespace"></div>
            <div>Not Found</div>
            <div className="h-60 bg-forbes-light-gray"></div>
          </div>
        </div>
      </Layout>
    )
  }
}

NotFoundPage.propTypes = propTypes

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageENQuery {
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
