// Gatsby supports TypeScript natively!
import React from 'react';
import {PageProps, Link} from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Seladine Greenleaf</h1>
    <p>I want to be a witch.</p>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
