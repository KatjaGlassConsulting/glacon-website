import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Head from 'next/head';
import Layout from '../components/Layout';


import { default as links } from '../resources/links.json';

class ScreenInfo extends React.Component {
    render() {

        /* Create finalRows containing all rows for the "Other links" section */
        var finalLinks = {};
        Object.keys(links).forEach(key => {
            const item = links[key];
            if (!finalLinks[item.type]){
                finalLinks[item.type] = []
            }
            finalLinks[item.type].push(item);
        })
        var finalRows = [];
        Object.keys(finalLinks).forEach(key => {
            const myArray = finalLinks[key];
            myArray.forEach((item, pos) => {
                var rowSpanCell = null;
                if (pos == 0){
                    rowSpanCell = <TableCell rowSpan={myArray.length}>{item.type}</TableCell>
                }
                var result = 
                    <TableRow key={item.url}>
                        {rowSpanCell}
                        <TableCell className="cellNextRowSpan">
                            <a href={item.url} rel="noopener noreferrer" target="_blank" className="intextlink">
                                {item.title}
                            </a>
                        </TableCell>
                        <TableCell>{item.description}</TableCell>
                    </TableRow>
                finalRows.push(result);
            })
        });

        return (
            <Layout>
                <Head>
                    <title>Links</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Links - additional resources" key="title" />
                </Head>
                <header className="main-header">
                    <div className="header-text">
                        <div className="col-md-12 text-center">
                            <h1>Links</h1>
                        </div>
                    </div>
                </header>
                <div className="bodycontent" style={{ paddingTop: "0" }}>
                    <Container>                        
                        <h1 className="article-h1" id="top">Additional Tool Links</h1>
                        <hr className="article-hr" />
            
                        <p style={{ textAlign: "center" }}>
                            The following tools are useful to know, not all are open source.
                        </p>
                        <TableContainer component={Paper}>
                            <Table style={{ width: "100%" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Tool</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Link</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>CDISC Dataset Generator (+ more)</TableCell>
                                        <TableCell>Test Data, TLF Shells, CRFs, Specs, Protocol</TableCell>
                                        <TableCell>
                                            <a href="https://cdiscdataset.com/" rel="noopener noreferrer" target="_blank" className="intextlink">
                                            https://cdiscdataset.com/
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>PhUSE CDISC Pilot Data + updated</TableCell>
                                        <TableCell>Data</TableCell>
                                        <TableCell>
                                            <a href="https://github.com/phuse-org/phuse-scripts/tree/master/data/adam/TDF_ADaM_v1.0" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                https://github.com/phuse-org/phuse-scripts/tree/master/data/adam/TDF_ADaM_v1.0
                                            </a>
                                            <br></br>
                                            <a href="https://github.com/phuse-org/phuse-scripts/tree/master/data/sdtm/TDF_SDTM_v1.0" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                https://github.com/phuse-org/phuse-scripts/tree/master/data/sdtm/TDF_SDTM_v1.0
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>SEND Data Factory</TableCell>
                                        <TableCell>Data, Programs</TableCell>
                                        <TableCell>
                                            <a href="https://github.com/phuse-org/phuse-scripts/tree/master/contributed/Nonclinical/R/SEND%20Data%20Factory" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                https://github.com/phuse-org/phuse-scripts/tree/master/contributed/Nonclinical/R/SEND%20Data%20Factory
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>CLI Define.xml Tools</TableCell>
                                        <TableCell>Tool</TableCell>
                                        <TableCell>
                                            <a href="https://github.com/defineEditor/definetools" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                https://github.com/defineEditor/definetools
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>SAS Support Pages Macros</TableCell>
                                        <TableCell>Macros</TableCell>
                                        <TableCell>
                                            <a href="https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=pgmsashome&docsetTarget=home.htm" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                https://go.documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.4&docsetId=pgmsashome&docsetTarget=home.htm
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Can R be used for submissions?</TableCell>
                                        <TableCell>Knowledge</TableCell>
                                        <TableCell>
                                            <a href="https://www.slideshare.net/AdrianOlszewski1/gnu-r-in-clinical-research-and-evidencebased-medicine" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                https://www.slideshare.net/AdrianOlszewski1/gnu-r-in-clinical-research-and-evidencebased-medicine
                                            </a>
                                        </TableCell>
                                    </TableRow>                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                               
                        <br/>

                        {/* ********************** OTHER LINKS **************************************** */}
                        <h1 className="article-h1" id="top">Other Links</h1>
                        <hr className="article-hr" />
                        <br></br>
                        <p style={{ textAlign: "center" }}>The following links might be useful for additional information.</p>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Link</TableCell>
                                        <TableCell>Description</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {finalRows}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ScreenInfo;