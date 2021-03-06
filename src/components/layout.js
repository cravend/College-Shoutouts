import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
      `}
      render={data => (
        <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 10,
          }}
          >
          {children}
          <div style={{ position: "fixed", bottom: 0 }}>
            <p>&copy; 2018 Dalton Craven &#47;&#47; <a href="https://github.com/cravend/college-shoutouts">View source on GitHub</a></p>
          </div>
        </div>
        </>
    )}
    />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
