import React from 'react';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import CardSlimContent from '../components/CardSlimContent';
import ModalToolOverview from '../components/ModalToolOverview';
import ModalImageGallery from '../components/ModalImageGallery';
import TabLayout from '../components/TabLayout';

import { default as tools } from '../resources/overview_tools.json';


class ScreenOverviewVisual extends React.Component {
    state = {
        activeImageShow: false,
        activeImageShowTool: "",
        activeDetailsShow: false,
        activeDetailsShowTool: "",
        tools: tools
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
        this.setState({ activeImageShowTool: item })
    }

    onMoreClick = (item) => {
        this.setState({ activeDetailsShow: true })
        this.setState({ activeDetailsShowTool: item })
    }


    getLink(tool) {
        if (tool.linkHomepage) { return tool.linkHomepage; }
        if (tool.linkSource) { return tool.linkSource; }
        if (tool.linkDocumentation) { return tool.linkDocumentation; }
        if (tool.linkPaper) {
            if (Array.isArray(tool.linkPaper)) { return tool.linkPaper[0] }
            return tool.linkPaper;
        }
        if (tool.linkPresentation) {
            if (Array.isArray(tool.linkPresentation)) { return tool.linkPresentation[0] }
            return tool.linkPresentation;
        }
    }

    displayStringOrArray(content) {
        if (Array.isArray(content)) {
            return content.map(item => this.displayStringOrArray(item)).join(", ")
        }
        return content;
    }

    printTools() {
        // this prints links together with lastUpdateDate
        Object.keys(this.state.tools).forEach(toolName => {
            if (this.state.tools[toolName].linkSource) {
                console.log(this.state.tools[toolName].id, this.state.tools[toolName].linkSource, this.state.tools[toolName].lastUpdateDate);
            }
        })
    }

    render() {
        return (
            <TabLayout visual={true}>
                <Head>
                    <title>Open Source Tools</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Open Source Tools for Clinical Study Evaluations" key="title" />
                    <meta name="description" content="Various open source tools which are available for clinical study evalautions can be found in this overview.
                        There are complex tools available as well as script and macro collections. Various programming languages are used like SAS, R, Java, 
                        RShiny and many more."></meta>
                </Head>

                
                <title>Open Source Tools</title>
                <meta charSet="utf-8" />
                <meta property="title" content="Open Source Tools for Clinical Study Evaluations" key="title" />
                <meta name="description" content="Various open source tools which are available for clinical study evalautions can be found in this overview.
                    There are complex tools available as well as script and macro collections. Various programming languages are used like SAS, R, Java, 
                    RShiny and many more. The tools can easily be searched in table format."></meta>
                <ModalToolOverview
                    show={this.state.activeDetailsShow}
                    tool={this.state.activeDetailsShowTool}
                    onClose={this.handleDetailsShowClose}
                    onImageClick={this.imageOnClick}
                />
                <ModalImageGallery
                    show={this.state.activeImageShow}
                    tool={this.state.activeImageShowTool}
                    onClose={this.handleImageShowClose}
                />

                <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                    {Object.keys(this.state.tools).map(toolName => {
                        var logo = undefined;
                        var tools = this.state.tools;
                        if (tools[toolName].logo !== undefined && tools[toolName].logo !== "") {
                            logo = "./images/tools/" + tools[toolName].logo;
                        }
                        return (
                            <Box sx={{ width: { xs: '100%', sm: '48%', md: '32%' }}} key={toolName} style={{ paddingBottom: "10px" }}>
                                <CardSlimContent
                                    title={tools[toolName].name}
                                    titleLogo={logo}
                                    titleOnClick={() => this.onMoreClick(toolName)}
                                >
                                    <p>{tools[toolName].description}</p>

                                    {tools[toolName].image &&
                                        <img src={"./images/tools/" + tools[toolName].image} onClick={() => this.imageOnClick(toolName)} alt="Screenshot" className="center bordered pointer" />
                                    }
                                    <table style={{ width: "100%" }}>
                                        <tbody>
                                            <tr>
                                                <td>{this.displayStringOrArray(tools[toolName].language)}</td>
                                                <td>{this.displayStringOrArray(tools[toolName].type)}</td>
                                                <td>{this.displayStringOrArray(tools[toolName].areaWorkfield)}</td>
                                                <td align="right">
                                                    <a href={this.getLink(tools[toolName])} rel="noopener noreferrer" target="_blank" className="intextlink">
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
            </TabLayout>
        );
    }
}

export default ScreenOverviewVisual;                                        