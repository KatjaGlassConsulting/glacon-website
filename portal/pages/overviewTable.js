import React from 'react';
import Head from 'next/head';

import ModalToolOverview from '../components/ModalToolOverview';
import ModalImageGallery from '../components/ModalImageGallery';
import TabLayout from '../components/TabLayout';
import { default as metadata } from '../resources/overview_metadata.json';
import TableSmall from '../components/ReactTable/TableSmall';

import { default as tools } from '../resources/overview_tools.json';

class ScreenOverviewTable extends React.Component {
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

                if (item === "name") {
                    toAdd["accessor"] = cellData => {
                        return (<p className="pointer" onClick={() => { this.onMoreClick(cellData.rowData.id) }}>{cellData.rowData.name}</p>);
                    };
                }

                if (metadata[item].width !== undefined) {
                    toAdd["width"] = metadata[item].width;
                }
                if (metadata[item].widthPerc !== undefined) {
                    toAdd["widthPerc"] = metadata[item].widthPerc;
                }
                columns.push(toAdd)
            }
        })
        return columns;
    }

    

    render() {
        const data = Object.values(this.state.tools);
        const columns = this.defineColumns();

        return (
            <TabLayout visual={false}>
                <Head>
                    <title>Open Source Tools</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Open Source Tools for Clinical Study Evaluations" key="title" />
                    <meta name="description" content="Various open source tools which are available for clinical study evalautions can be found in this overview.
                        There are complex tools available as well as script and macro collections. Various programming languages are used like SAS, R, Java, 
                        RShiny and many more."></meta>
                </Head>

                <TableSmall 
                    columns={columns} 
                    data={data} 
                    windowHeightDelta={260}
                    rowHeight={40}/>

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
            </TabLayout>
        );
    }
}

export default ScreenOverviewTable;