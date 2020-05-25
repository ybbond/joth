import React from 'react';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';

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
