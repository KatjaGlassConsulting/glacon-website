import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import ModalToolOverview from '../components/ModalToolOverview';
import ModalImageGallery from '../components/ModalImageGallery';
import ModalScriptsOverview from '../components/ModalScriptsOverview';
import { default as metadata } from '../resources/scripts_metadata.json';
import TableSmall from '../components/ReactTable/TableSmall';
import { scripts } from '../functions/general';

class ScreenScriptsTable extends React.Component {
    state = {
        activeImageShow: false,
        activeImageShowTool: "",
        activeDetailsShow: false,
        activeDetailsShowTool: "",
        activeScriptShow: false,
        activeScriptShowName: "",
        activeScriptShowTool: "",
    }

    constructor(props) {
        super(props);
        this.imageOnClick = this.imageOnClick.bind(this);
        this.handleImageShowClose = this.handleImageShowClose.bind(this);
        this.handleDetailsShowClose = this.handleDetailsShowClose.bind(this);
        this.handleScriptsShowClose = this.handleScriptsShowClose.bind(this);
    }

    handleImageShowClose() {
        this.setState({ activeImageShow: false })
    };

    handleDetailsShowClose() {
        this.setState({ activeDetailsShow: false })
    };

    handleScriptsShowClose() {
        this.setState({ activeScriptShow: false, activeScriptShowName: "" })
    };

    imageOnClick = (item) => {
        this.setState({ activeImageShow: true })
        this.setState({ activeImageShowTool: item })
    }

    onToolLinkClick = (item) => {
        this.setState({ activeDetailsShow: true })
        this.setState({ activeDetailsShowTool: item })
    }

    onScriptLinkClick = (item, tool) => {
        this.setState({ activeScriptShow: true })
        this.setState({ activeScriptShowName: item })
        this.setState({ activeScriptShowTool: tool })
    }

    defineColumns() {
        var columns = [];

        Object.keys(metadata).forEach(item => {
            if (metadata[item].displayTable === true) {
                var toAdd = {
                    id: item,
                    label: metadata[item].label,
                    accessor: item,
                    sortable: true
                }

                if (metadata[item].filter){
                    toAdd["filter"] = metadata[item].filter
                }

                if (item === "tool") {
                    toAdd["accessor"] = cellData => {
                        return (<p className="pointer" onClick={() => { this.onToolLinkClick(cellData.rowData.toolId) }}>{cellData.rowData.tool}</p>)
                    };
                }

                if (item === "name") {
                    toAdd["accessor"] = cellData => {
                        return (<p className="pointer" onClick={() => { this.onScriptLinkClick(cellData.rowData.name, cellData.rowData.toolId) }}>{cellData.rowData.name}</p>)
                    };
                }

                if (metadata[item].width !== undefined) {
                    toAdd["width"] = metadata[item].width;
                }
                columns.push(toAdd)
            }
        })
        return columns;
    }

    render() {
        var data = [];
        Object.values(scripts).forEach(tool => {
            Object.values(tool).forEach(script => {
                data.push(script);
            })
        })

        var columns = this.defineColumns();

        return (
            <Layout>
                <Head>
                    <title>Open Source Scritps and Macros</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Open Source Scritps and Macros" key="title" />
                    <meta name="description" content="Single open source scripts, macros and programs for clinical study evaluations can be found.
                        An intuitive search enables to find fitting programs in languages like R and SAS to solve various problems in this area."></meta>
                </Head>
                <div style={{ margin: '10px' }}>
                    <TableSmall columns={columns} data={data} windowHeightDelta={170} rowHeight={40}/>
                    
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

                    <ModalScriptsOverview
                        show={this.state.activeScriptShow}
                        script={this.state.activeScriptShowName}
                        project={this.state.activeScriptShowTool}
                        onClose={this.handleScriptsShowClose}
                        onToolLinkClick={this.onToolLinkClick}
                    />
                </div>
            </Layout>
        );
    }
}

export default ScreenScriptsTable;