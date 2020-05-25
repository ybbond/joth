/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {ReactNode} from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import Header from './Header';
import './layout.css';

type Props = {
  children: ReactNode;
};

const Layout = ({children}: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* <div */}
      {/*   style={{ */}
      {/*     display: 'flex', */}
      {/*     flex: 1, */}
      {/*     flexDirection: 'column', */}
      {/*     margin: `0 auto`, */}
      {/*     maxWidth: 960, */}
      {/*     padding: `0 1.0875rem 1.45rem`, */}
      {/*     alignItems: 'center', */}
      {/*   }} */}
      {/* > */}
      <main style={{flex: 1, margin: '0 auto', maxWidth: 960}}>{children}</main>
      <footer style={{alignSelf: 'center', marginBottom: '1rem'}}>
        © {new Date().getFullYear()} - Seladine Greenleaf
      </footer>
      {/* </div> */}
    </div>
  );
};

export default Layout;
