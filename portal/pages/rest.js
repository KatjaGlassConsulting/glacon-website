import React from 'react';
import Head from 'next/head';
import { Container, Table, TableCell, TableContainer, TableHead, TableBody, TableRow, Paper } from "@mui/material";
import Layout from '../components/Layout';

class ScreenInfo extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>REST and APIs</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="REST and API services" key="title" />
                    <meta name="description" content="REST and API Services related to clinical study evaluations are listed."></meta>
                </Head>
                <header className="main-header">
                    <div className="header-text">
                        <div className="col-md-12 text-center">
                            <h1>REST &amp; APIs</h1>
                        </div>
                    </div>
                </header>
                <div className="bodycontent" style={{ paddingTop: "0" }}>
                    <Container>
                        <p>
                            The following table shows usefule REST and API Services related to clinical study evaluations. Please let me know if you are aware of
                            other services to include them here.
                        </p>
                        <TableContainer component={Paper}>
                            <Table style={{ width: "100%" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Service</TableCell>
                                        <TableCell>Provider</TableCell>
                                        <TableCell>Description / Link</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>   
                                    <TableRow>
                                        <TableCell>OpenFDA</TableCell>
                                        <TableCell>FDA</TableCell>
                                        <TableCell>
                                            <p>OpenFDA is an Elasticsearch-based API that serves public FDA data about nouns like drugs, devices, and foods.</p>
                                            <a href="https://open.fda.gov/apis/" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                https://open.fda.gov/apis/
                                                </a>  
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ClinicalTrials.gov</TableCell>
                                        <TableCell>NIH - U.S. National Library of Medicine</TableCell>
                                        <TableCell>
                                            <p>Access ClinicalTrials.gov study records data</p>
                                            <a href="https://clinicaltrials.gov/data-api/api" rel="noopener noreferrer" target="_blank" className="intextlink">
                                            https://clinicaltrials.gov/data-api/api
                                                </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>UML REST Services</TableCell>
                                        <TableCell>NIH - U.S. National Library of Medicine</TableCell>
                                        <TableCell>
                                            <a href="https://documentation.uts.nlm.nih.gov/rest/home.html#endpoints-to-search-and-retrieve-umls-content" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                UMLS REST API Home Page (Unified Medical Language System)
                                                </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>UCUM RESTful Web Services</TableCell>
                                        <TableCell>NIH - U.S. National Library of Medicine</TableCell>
                                        <TableCell>
                                            <a href="https://documentation.uts.nlm.nih.gov/rest/home.html#endpoints-to-search-and-retrieve-umls-content" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                UCUM validation and unit conversions service, including "Conventional" to "SI" unit conversions and vice versa (Unified Code for Units of Measure)
                                                </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Cancer Clinical Trials API (Beta)</TableCell>
                                        <TableCell>NIH - U.S. National Library of Medicine</TableCell>
                                        <TableCell>
                                            <a href="https://www.cancer.gov/syndication/api" rel="noopener noreferrer" target="_blank" className="intextlink">
                                            https://www.cancer.gov/syndication/api
                                                </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>CDISC API (requires account)</TableCell>
                                        <TableCell>CDISC</TableCell>
                                        <TableCell>
                                            <a href="https://www.cdisc.org/cdisc-library/api-documentation" rel="noopener noreferrer" target="_blank" className="intextlink">
                                            https://www.cdisc.org/cdisc-library/api-documentation
                                                </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>CDISC-CT services</TableCell>
                                        <TableCell>XML4Pharma </TableCell>
                                        <TableCell>
                                            <a href="http://xml4pharmaserver.com/WebServices/CDISCCT_webservices.html" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                CDISC Controlled Terminology services 
                                                </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>CDISC Domains / Standards Versions Web Services </TableCell>
                                        <TableCell>XML4Pharma </TableCell>
                                        <TableCell>
                                            <a href="http://xml4pharmaserver.com/WebServices/CDISCDomain_webservices.html" rel="noopener noreferrer" target="_blank" className="intextlink">
                                                CDISC SDTM/SEND <b>domain</b> information services 
                                                </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>CDISC SDS/SDTM Variable Web Services </TableCell>
                                        <TableCell>XML4Pharma </TableCell>
                                        <TableCell>
                                            <a href="http://xml4pharmaserver.com/WebServices/CDISCSDSVariables_webservices.html " rel="noopener noreferrer" target="_blank" className="intextlink">
                                                CDISC SDTM/SEND <b>variable</b> information services 
                                                </a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>LOINC to CDISC Mapping Web Services (LB,MB,VS) </TableCell>
                                        <TableCell>XML4Pharma</TableCell>
                                        <TableCell>
                                            <a href="http://xml4pharmaserver.com/WebServices/LOINC2CDISC_webservices.html " rel="noopener noreferrer" target="_blank" className="intextlink">
                                                RESTful web services implementing LOINC to CDISC mappings 
                                                </a>
                                        </TableCell>
                                    </TableRow>
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