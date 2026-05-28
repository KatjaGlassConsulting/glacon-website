import React from 'react';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/Layout';

import CardSlimContent from '../components/CardSlimContent';
import { getAllPosts } from '../lib/api'

export default function Index({ allPosts }) {
    const articleSelection = (articles) => {
        return articles.map((item, pos) => {
            return (
                <Box key={"article" + pos} sx={{ width: { xs: '100%', sm: '48%', md: '48%' }, marginBottom: '16px' }}>
                    <Link as={`/articles/${item.slug}`} href="/articles/[article]" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="bodyTextColor">
                            <CardSlimContent
                                title={item.title + " (" + item.date + ")"}
                            >
                                <p style={{ margin: 0 }}>{"by " + item.author}</p>
                                <p>{item.summary}</p>

                                {item.img &&
                                    <img src={"./articles/img/" + item.img} alt="Screenshot" className="center bordered" width="100%" />
                                }
                            </CardSlimContent>
                        </div>
                    </Link>
                </Box>
            )
        })
    }

    return (
        <div>
            <Layout>
                <Head>
                    <title>Articles</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Articles related to open source or other huge projects for clinical study evaluations" key="title" />
                </Head>
                <header className="main-header">
                    <div className="header-text">
                        <div className="col-md-12 text-center">
                            <h1>Articles</h1>
                        </div>
                    </div>
                </header>                                    
                <div className="bodycontent" style={{ paddingTop: "0" }}>
                    <Container>
                        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>                    
                            {articleSelection(allPosts)}
                        </Box>
                    </Container>
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'author',
        'date',
        'companyType',
        'tags',
        'license',
        'img',
        'summary',
        'slug'
    ])

    return {
        props: { allPosts },
    }
}
