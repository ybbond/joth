import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <p>Don&#39;t be sad, we are still seeking the truth anyway, right?</p>
  </Layout>
);

export default NotFoundPage;
