import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import TableSmall from '../components/ReactTable/TableSmall';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { default as metadata } from '../resources/conf_videos/display_metadata.json';
import { default as youtube_other } from '../resources/conf_videos/youtube_other.json';
import { default as youtube_phuse } from '../resources/conf_videos/youtube_phuse.json';
import { default as youtube_rinpharma } from '../resources/conf_videos/youtube_rinpharma.json';
import { default as youtube_rtsudio } from '../resources/conf_videos/youtube_rstudio.json';
import { default as youtube_sasusers } from '../resources/conf_videos/youtube_sasusers.json';
import { default as youtube_rconsortium } from '../resources/conf_videos/youtube_rconsortium.json';

class TableScreen extends React.Component {

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

                if (metadata[item].filter) {
                    toAdd["filter"] = metadata[item].filter
                }

                if (metadata[item].type === "YouTubeId") {
                    toAdd["accessor"] = cellData => {
                        if (cellData.rowData['youtube'] == false) {
                            return (
                                <a href={"https://gateway.on24.com/wcc/eh/2309258/lp/" + cellData.rowData[item]} rel="noopener noreferrer" target="_blank" className="intextlink center">
                                    <OpenInNewIcon fontSize="small"/>
                                </a>
                            );
                        }
                        else {
                            return (
                                <a href={"https://www.youtube.com/watch?v=" + cellData.rowData[item]} rel="noopener noreferrer" target="_blank" className="intextlink center">
                                    <OpenInNewIcon fontSize="small"/>
                                </a>
                            )
                        }
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
        const content = [...youtube_other, ...youtube_rconsortium, ...youtube_phuse, ...youtube_rinpharma, ...youtube_rtsudio, ...youtube_sasusers];
        const columns = this.defineColumns(content);
        const data = content;

        return (
            <Layout>
                <Head>
                    <title>Conference Videos</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Videos of concferences related to clinical study evaluations" key="title" />
                    <meta name="description" content="Various conferences are available in the pharmaceutical area which are related to
                    clinical study evaluations like the SAS Global Forum, PHUSE, R in Pharma and more. This link list provides an easy opportunity
                    to find available videos for specific topics."></meta>
                </Head>
                <div style={{ margin: '10px' }}>
                    <TableSmall
                        columns={columns}
                        data={data}
                        windowHeightDelta={180}
                        rowHeight={40} />
                </div>
            </Layout>)
    }
}

export default TableScreen;

