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
    <h1 style={{textAlign: 'center'}}>Journey On The Horizon</h1>
    <iframe
      className="anchor-embed"
      src="https://anchor.fm/seladinegreenleaf/embed"
      height={102}
      width="100%"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  </Layout>
);

export default IndexPage;
