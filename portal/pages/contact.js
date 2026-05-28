import React from 'react';
import { LinkedIn, YouTube, GitHub, Phone, Email, LocationOn } from '@mui/icons-material';
import { Container, Box } from '@mui/material';
import Head from 'next/head';
import Layout from '../components/Layout'

class ScreenContact extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Contact</title>
                    <meta charSet="utf-8"/>
                    <meta property="title" content="Contact Katja Glass Consulting" key="title" />
                </Head>
                <div className="bodycontent">
                    <Container>
                        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                            <Box style={{ textAlign: "center", width: '100%' }}>
                                <h1 className="article-h1" id="top">Contact Me</h1>
                                <hr className="article-hr" />
                                <br />
                            </Box>
                            <Box sx={{ width: '58%', maxWidth: '400px'}}>
                                <span>If you are interested in sponsoring this portal, want to participant in the portal content or
                                are intested in my services, please feel free to contact me.
                                </span><br /> <br />
                                <p>
                                    <LocationOn /> Berlin, Germany<br />
                                    <Phone /> +49 30 403633 93<br />
                                    <Email /> <a href="mailto:info@glacon.eu" className="intextlink">info@glacon.eu</a><br />
                                </p>
                                <hr></hr>
                                <p>
                                    <LinkedIn /> <a href="https://www.linkedin.com/in/katja-glass-369022167" className="intextlink" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
                                    <YouTube /> <a href="https://www.youtube.com/channel/UCPUH5Hfw639qyS059LbGJ8Q" className="intextlink" target="_blank" rel="noopener noreferrer">YouTube</a><br />
                                    <GitHub /> <a href="https://github.com/KatjaGlassConsulting/SAS" className="intextlink" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </p>
                            </Box>
                            <Box sx={{ width: '38%'}}>
                                <img src='./images/Katja_profil2017_small.jpg' alt="Portrait: Katja Glass" />
                            </Box>
                        </Box>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ScreenContact;