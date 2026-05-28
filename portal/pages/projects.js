import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import Layout from '../components/Layout';
import CardSlimContent from '../components/CardSlimContent';
import ModalProjectOverview from '../components/ModalProjectOverview';
import ModalImageGallery from '../components/ModalImageGallery';

import { default as projects } from '../resources/projects_data.json';


class ScreenProjects extends React.Component {
    state = {
        activeImageShow: false,
        activeImages: "",
        activeDetailsShow: false,
        activeDetailsShowTool: ""
    }

    constructor(props) {
        super(props);
        this.imageOnClick = this.imageOnClick.bind(this);
        this.handleImageShowClose = this.handleImageShowClose.bind(this);
        this.handleDetailsShowClose = this.handleDetailsShowClose.bind(this);
    }

    handleImageShowClose() {
        this.setState({ activeImageShow: false })
    };

    handleDetailsShowClose() {
        this.setState({ activeDetailsShow: false })
    };

    imageOnClick = (item) => {
        this.setState({ activeImageShow: true })
        this.setState({ activeImages: projects[item].images })
    }

    onMoreClick = (item) => {
        this.setState({ activeDetailsShow: true })
        this.setState({ activeDetailsShowTool: item })
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title>Open Source Projects</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Open Source Projects for Clinical Study Evaluations" key="title" />
                    <meta name="description" content="Various open source projects for clinical study evaluations are presented."></meta>
                </Head>
                <header className="main-header">
                    <div className="header-text">
                        <div className="col-md-12 text-center">
                            <h1>Projects</h1>
                        </div>
                    </div>
                </header>
                <div className="bodycontent">
                    <div className="ui grid container">
                        <ModalProjectOverview
                            show={this.state.activeDetailsShow}
                            project={this.state.activeDetailsShowTool}
                            onClose={this.handleDetailsShowClose}
                            onImageClick={this.imageOnClick}
                        />
                        <ModalImageGallery
                            show={this.state.activeImageShow}
                            images={this.state.activeImages}
                            locationPrefix="./images/projects/"
                            onClose={this.handleImageShowClose}
                        />

                        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                            {Object.keys(projects).map(projectName => {
                                var logo = undefined;
                                if (projects[projectName].logo !== undefined && projects[projectName].logo !== "") {
                                    logo = "./images/projects/" + projects[projectName].logo;
                                }
                                return (
                                    <Box key={projectName} sx={{ width: { xs: '100%', sm: '48%', md: '48%' }, paddingBottom: "10px" }}>
                                        <CardSlimContent
                                            title={projects[projectName].name}
                                            titleLogo={logo}
                                            titleOnClick={() => this.onMoreClick(projectName)}
                                        >
                                            <p>{projects[projectName].description}</p>

                                            {projects[projectName].images && Array.isArray(projects[projectName].images) && projects[projectName].images.length > 0 &&
                                                <img src={"./images/projects/" + projects[projectName].images[0]} onClick={() => this.imageOnClick(projectName)} alt="Screenshot" className="center bordered pointer" />
                                            }
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                    <tr>
                                                        <td>{projects[projectName].type}</td>
                                                        <td align="right">
                                                            <a href={projects[projectName].linkProject} rel="noopener noreferrer" target="_blank" className="intextlink">
                                                                <i className="external alternate icon"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </CardSlimContent>
                                    </Box>
                                );
                            })}                            
                        </Box>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default ScreenProjects;                                        