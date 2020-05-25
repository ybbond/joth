import {Link} from 'gatsby';
import React from 'react';

type Props = {
  siteTitle?: string;
};

const Header = ({siteTitle = ''}: Props) => (
  <header
    style={{
      background: '#f3e0d1',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div>
        <span style={{margin: 0}}>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: `none`,
              padding: '1rem',
            }}
          >
            Home
          </Link>
        </span>
        <span style={{margin: 0}}>
          <Link
            to="/about/"
            style={{
              color: 'black',
              textDecoration: `none`,
              padding: '1rem',
            }}
          >
            About
          </Link>
        </span>
      </div>
      <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
        <span style={{margin: 0}}>
          <a
            href="https://anchor.fm/seladinegreenleaf/"
            style={{
              color: 'black',
              textDecoration: `none`,
              padding: '1rem',
              textAlign: 'right',
            }}
            target="_blank"
            rel="noreferrer noopener"
          >
            Anchor.FM
          </a>
        </span>
      </div>
    </div>
  </header>
);

export default Header;
