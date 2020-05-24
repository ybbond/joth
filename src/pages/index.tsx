import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{maxWidth: `500px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <h1>Journey On The Horizon</h1>
  </Layout>
);

export default IndexPage;
