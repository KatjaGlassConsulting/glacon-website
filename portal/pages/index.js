import React from 'react';
import Head from 'next/head';

import { Box, Container, Divider } from '@mui/material';
import { default as news } from '../resources/news.json';

import Layout from '../components/Layout';

class Home extends React.Component {
  renderNews() {
    return (
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
        {Object.keys(news).map(newsId => {
          return (
            <Box key={newsId} width={{ xs: '100%', sm: '48%', md: '30%' }}>
              <h2 style={{ textAlign: 'center' }} className="header-news">
                {newsId}
              </h2>
              {typeof news[newsId] === "string" ? (
                <p>{news[newsId]}</p>
              ) : (
                news[newsId].map((newsItem, index) => (
                  <p key={index}>{newsItem}</p>
                ))
              )}
            </Box>
          );
        })}
      </Box>
    );
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Open Source Portal</title>
          <meta charSet="utf-8" />
          <meta property="title" content="Open Source Portal for Clinical Study Evaluations" key="title" />
          <meta name="description" content="The Open Source Portal for Clinical Study Evaluations is a knowledge database about available open source solutions which can be used for evaluations. Tools, scripts and macros can easily be found through search." />
        </Head>

        <header className="main-header">
          <div className="header-text">
            <div className="col-md-12 text-center">
              <h1 style={{ fontSize: '44px' }}>Open Source Portal</h1>
              <h2 style={{ fontSize: '22px', fontWeight: 'normal' }}>For Clinical Study Evaluations</h2>
            </div>
          </div>
        </header>
        <div className="bodycontent">
          <Container>
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
              <Box width={{ xs: '100%', md: '30%' }}>
                <h1 style={{ textAlign: 'center' }}>Why?</h1>
                <p>
                  Currently it is very difficult to investigate which open-source solutions are available for clinical study evaluations.
                  There are many lists available for open-source R programs. PhUSE has a R-Shiny App to display the PhUSE content. But still, 
                  it is very tough to investigate what is available, especially when searching for a specific area.
                </p>
              </Box>
              <Box width={{ xs: '100%', md: '30%' }}>
                <h1 style={{ textAlign: 'center' }}>What?</h1>
                <p>
                  This page will be a link collection of open-source solutions, programs and scripts for clinical study evaluations. Additional metadata will
                  be stored and a user-friendly search filter, as well as other navigations will be available.
                </p>
              </Box>
              <Box width={{ xs: '100%', md: '30%' }}>
                <h1 style={{ textAlign: 'center' }}>How?</h1>
                <p>
                  The content is collected manually. Further information and metadata are derived according available metadata and header analysis.
                  If you want to provide additional input, please get in touch with me
                  via <a href="mailto:info@glacon.eu?subject=Portal%20Input" className="intextlink nowrap">
                    info@glacon.eu</a>.
                  Additional content, views and also edit facilities will be added in the future.
                </p>
              </Box>
            </Box>
            <Divider sx={{ my: 4 }} />
            <h1 style={{ textAlign: 'center' }}>News</h1>
            {this.renderNews()}
            <Divider sx={{ my: 4 }} />
            <h1>Want to financially support this project?</h1>
            <p>
              To support this project, you can do a donation or become a sponsor of this webpage.
              There are many plans for further enhancements and enrichment of this portal.
              Apart from updating the page to allow many interactions like ratings and user edits, the content should also be enriched by
              including additionally available open-source as well as making hidden open-source jewels available and findable. For example, the SAS(R) support
              pages contains for example quite some useful macros. Furthermore valuable macros could be derived from papers, when the copyright-owner
              allows this.
            </p>
            <p>
              Additionally it is planned to develop a process and macros for managing and downloading open-source SAS macros and scripts to allow
              something similar and easy like install.packages("package name") for easy use.
            </p>
            <p>
              You can support the open-source portal with a donation or by becoming a sponsor. The advantages of sponsorship are that your logo will be made available
              on the portal page and will be mentioned in all communications delivered by Katja Glass Consulting relating to the portal. If you are interested, get in touch with
              me (<a href="mailto:info@glacon.eu?subject=Portal%20Sponsorship" className="intextlink nowrap" rel="noopener noreferrer" target="_blank">info@glacon.eu</a>) or
              press the button below for a donation through PayPal.
            </p>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="center">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="YYD85EAF7ZEFJ" />
              <input type="image" src="https://www.glacon.eu/images/buttonDonate100.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            </form>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Home;