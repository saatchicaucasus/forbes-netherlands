import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ children, className }) => (
  // <main role="main" id="content" className={className}>
  <main role="main" id="content" className="bg-forbes-site-white">
    {children}
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Main.defaultProps = {
  className: '',
}

export default Main
