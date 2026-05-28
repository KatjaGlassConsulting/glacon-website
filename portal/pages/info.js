import React from "react";

import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Email from "@mui/icons-material/Email";
import Head from "next/head";
import Layout from "../components/Layout";

class ScreenInfo extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Information</title>
          <meta charSet="utf-8" />
          <meta property="title" content="Additional information" key="title" />
          <meta
            name="description"
            content="General information about the open source portal for clinical study evaluations can be found.
                        The maintenance is explained as well as terms and plans."
          ></meta>
        </Head>
        <header className="main-header">
          <div className="header-text">
            <div className="col-md-12 text-center">
              <h1>Open Source Portal</h1>
              <p>General Information</p>
            </div>
          </div>
        </header>
        <div className="bodycontent" style={{ paddingTop: "0" }}>
          <Container>
            <div style={{ textAlign: "center" }}>
              <h1 className="article-h1" id="top">
                Maintenance
              </h1>
              <hr className="article-hr" />
            </div>
            <p>
              The portal is maintained by me - Katja Glass (
              <a
                href="https://www.glacon.eu/"
                rel="noopener noreferrer"
                target="_blank"
                className="intextlink"
              >
                Katja Glass Consulting
              </a>
              ). As the creation and maintenance requires a lot of resources, I
              am looking for donations and sponsors to be able to further
              enhance the portal and work to make open-source solutions
              findable, accessible, interoperable and reusable. If you are
              interested in sponsorship, please get in touch with me through{" "}
              <a
                href="mailto:info@glacon.eu?subject=Portal%20Sponsorship"
                className="intextlink nowrap"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Email />
                info@glacon.eu
              </a>{" "}
              for further information or to schedule a phone call. You can also
              make a donation through PayPal with the button below.
            </p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              className="center"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="YYD85EAF7ZEFJ"
              />
              <input
                type="image"
                src="https://www.glacon.eu/images/buttonDonate100.png"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
            </form>

            <hr></hr>

            <div style={{ textAlign: "center" }}>
              <h1 className="article-h1" id="top">
                Portal Content
              </h1>
              <hr className="article-hr" />
            </div>
            <p>
              This portal allows for <b>Findable</b> tools, macros and scripts
              which are related to clinical study evaluations. This is a step in
              the direction of creating FAIR tools. It can be seen as a
              collection of links with additional information. The first major
              issue of open source in clinical study evaluations is locating
              these tools. People are often unaware of these tools as they are
              announced on very different events and media, if at all. Sometimes
              there is only the word of mouth.
            </p>
            <p>
              <b>Definitions</b>: Four terms are used which could be defined in
              the context of the portal as following:
            </p>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Term</TableCell>
                    <TableCell>Explanation</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Tool</TableCell>
                    <TableCell>
                      A tool can be seen either as a stand-alone software or a group of small programs which belong together according to their
                      content, scope, author or other criteria.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Script</TableCell>
                    <TableCell>
                      A Script is a stand-alone program which can be executed and immediately creates a result. It could be a
                      SAS, R or any other script which is quite often understood as "program". Typically scripts are created for a
                      specific content and needs updating when applied.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Macro</TableCell>
                    <TableCell>
                      A macro is a more generic script which has typically has parameters to provide various options
                      to apply. A macro must be called to produce a result, as this only contains a definition.
                      Macros are typically very flexible and ideally do not need modifications when applied, e.g. to different data.
                      In SAS these are defined as "MACRO", in R these would be "FUNCTIONS" which are similar content-wise.
                      <br />
                      If a macro is included in a script, the file would be considered as script, as the file is executable and will return a result
                      and is not just a definition.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Program</TableCell>
                    <TableCell>
                      A program in the context of this portal can be seen as spanning definition for scripts and macros. These macros are small 
                      to medium single files and share many similarities. These files need to be executed in programming environments such as SAS or R.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <p>
              <b>Information Gathering:</b> The collection of links are
              currently gathered manually periodically. In currently hidden
              metadata the information is stored when a tool/program is included
              in the portal and when the content has been updated. This will
              allow users to check for tools entered after a specific time point
              later on. Thanks to all who provided additional information and
              made me aware of additional open-source solutions available. It is
              planned to update information automatically.
            </p>

            <hr></hr>
            <div style={{ textAlign: "center" }}>
              <h1 className="article-h1" id="top">
                Portal Additions
              </h1>
              <hr className="article-hr" />
              <br></br>
            </div>
            <p>
              If you would like to include additional tools, programs, scripts or videos or even
              are interested in writing an article, you can do so with a pull requests, following
              the instructions in the following GitHub repository: <a href="https://github.com/KatjaGlassConsulting/clinicalOpenSourcePortal">https://github.com/KatjaGlassConsulting/clinicalOpenSourcePortal</a>.
            </p>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default ScreenInfo;
