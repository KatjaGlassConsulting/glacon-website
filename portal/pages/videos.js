import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import Layout from '../components/Layout';
import YouTubeDisplay from '../components/YouTubeDisplay';
import videosData from '../resources/videos.json';

class ScreenInfo extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Videos Open Source Related</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Open Source related Videos" key="title" />
                    <meta name="description" content="Videos around Open Source for Clinical Study Evaluations are available. These range from general information
                        about open source up to detailed open source tool demonstrations."></meta>
                </Head>
                <header className="main-header">
                    <div className="header-text">
                        <div className="col-md-12 text-center">
                            <h1>Videos</h1>
                        </div>
                    </div>
                </header>
                <div className="bodycontent" style={{ paddingTop: "0" }}>
                    <Container>                       
                        {videosData.map((section, index) => (
                            <div key={index}>                                
                                <h1 className="article-h1" id={section.title}>{section.title}</h1>
                                <hr className="article-hr" />
                                <br/> 
                                <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                                    {section.videos.map((video, index) => (        
                                        <Box width={{ xs: '100%', md: '48%' }} style={{ textAlign: "center" }} key={'video' + index}>
                                            <h2 className='marginTop'>{video.title}</h2>
                                            <YouTubeDisplay key={index} id={video.videoId} title={video.videoTitle}/> 
                                        </Box>
                                    ))}
                                </Box>
                            </div>
                        ))}

                        <Box textAlign="center">
                            <h1 className="article-h1" id="top">Remarks</h1>
                            <hr className="article-hr" />
                            <br></br>
                            <p>The videos are available on YouTube and been made available by different companies and organizations.</p>
                        </Box>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ScreenInfo;                                        