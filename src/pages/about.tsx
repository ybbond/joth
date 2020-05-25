// Gatsby supports TypeScript natively!
import React from 'react';
import {PageProps, Link} from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const About = (props: PageProps) => (
  <Layout>
    <SEO title="About Seladine" />
    <h1>Seladine Greenleaf</h1>
    <p>
      She lives in a place calm, soothing and rich of Wednesday&rsquo;s air.
    </p>
    {/* <p>Welcome to page 2 ({props.path})</p> */}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export default About;
