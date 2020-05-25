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
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} - Seladine Greenleaf</footer>
    </div>
  );
};

export default Layout;
