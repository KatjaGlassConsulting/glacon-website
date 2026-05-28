import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import React from 'react'
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import Layout from '../../components/Layout';
import { getPostBySlug, getAllPosts } from '../../lib/api'


export default function Post({ post, morePosts }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    const markdown = post.content;

    return (
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
                    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                        <div className="markdown">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                            >{markdown}</ReactMarkdown>
                        </div>
                    </Box>
                </Container>                        
            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'author',
        'date',
        'companyType',
        'tags',
        'license',
        'img',
        'summary',
        'slug',
        'content'
    ])

    return {
        props: {
            post: {
                ...post
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
