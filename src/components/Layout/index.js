import React, { Component } from 'react'
import Header from '../Header'
import HeaderNavBar from '../HeaderNavBar'
import Footer from '../Footer'
import Main from '../Main'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider, addLocaleData } from 'react-intl'
import 'intl'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'
import nl from 'react-intl/locale-data/nl'
import 'intl/locale-data/jsonp/nl'

// add concatenated locale data
addLocaleData([...en, ...nl])

class TemplateWrapper extends Component {
  constructor(props) {
    super(props)
    this.children = this.props.children
    const data = this.props.data
    const location = this.props.location
    this.className = this.props.className
    const url = location.pathname
    const { langs, defaultLangKey } = data.site.siteMetadata.languages
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url)
    this.homeLink = `/${this.langKey}/`
    this.langsMenu = getLangs(
      langs,
      this.langKey,
      getUrlForLang(this.homeLink, url)
    )

    // get the appropriate message file based on langKey
    // at the moment this assumes that langKey will provide us
    // with the appropriate language code
    this.i18nMessages = require(`../../data/messages/${this.langKey}`)
  }
  render() {
    return (
      <IntlProvider locale={this.langKey} messages={this.i18nMessages}>
        <div>
          <Helmet
            title="Forbes Netherlands"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Helmet>
            <script
              data-ad-client="ca-pub-1562072359497089"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
          </Helmet>
          <Header langs={this.langsMenu} node={this.langKey} />
          <HeaderNavBar />
          <Main key="app-main" className={this.className}>
            {this.children}
          </Main>
          <Footer />
        </div>
      </IntlProvider>
    )
  }
}

export default TemplateWrapper
