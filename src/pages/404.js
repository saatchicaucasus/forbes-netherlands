import React from 'react'
import { graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n'

class RedirectNotFound extends React.PureComponent {
  constructor(args) {
    super(args)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata.languages
      const langKey = getUserLangKey(langs, defaultLangKey)
      const NotFoundUrl = withPrefix(`/${langKey}/404/`)

      navigate(NotFoundUrl)
    }
  }

  render() {
    // It's recommended to add your SEO solution in here for bots
    // eg. https://github.com/ahimsayogajp/ahimsayoga-gatsby/blob/master/src/pages/index.js#L22
    return <div />
  }
}

export default RedirectNotFound

export const pageQuery = graphql`
  query NotFoundQuery {
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
