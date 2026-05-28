import React from "react";
import { Container, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import Head from "next/head";
import Layout from "../components/Layout";

import { default as learnings } from "../resources/learnings.json";

class Education extends React.Component {
  render() {
    var finalRows = [];
    Object.keys(learnings).forEach((key) => {
      const learningItem = learnings[key];
      var result = (
        <TableRow key={learningItem.id}>
          <TableCell>
            <b>{learningItem.name}</b>
            <p>{learningItem.quickDescription}</p>
            <img
              src={"./images/learning/" + learningItem.image}
              alt="Screenshot"
              className="bordered maxImg"
            />
          </TableCell>
          <TableCell>
            <p>{learningItem.description && learningItem.description}</p>
            {learningItem.remark && <p>Remark: {learningItem.remark} </p>}
            {learningItem.authors && <p>Author(s): {learningItem.authors} </p>}
            {learningItem.audience && <p>Audience: {learningItem.audience} </p>}
            {learningItem.link && (
              <p>
                Link:{" "}
                <a
                  href={learningItem.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="intextlink"
                >
                  {learningItem.link}
                </a>
              </p>
            )}
            {learningItem.linkAdditional && (
              <p>
                {learningItem.linkAdditionalDescription}:{" "}
                <a
                  href={learningItem.linkAdditional}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="intextlink"
                >
                  {learningItem.linkAdditional}
                </a>
              </p>
            )}
          </TableCell>
        </TableRow>
      );
      finalRows.push(result);
    });

    return (
      <Layout>
        <Head>
          <title>Education</title>
          <meta charSet="utf-8" />
          <meta
            property="title"
            content="Education - learning resources related to clinical study evaluations"
            key="title"
          />
        </Head>
        <header className="main-header">
          <div className="header-text">
            <div className="col-md-12 text-center">
              <h1>Education</h1>
            </div>
          </div>
        </header>
        <div className="bodycontent" style={{ paddingTop: "0" }}>
          <Container>
            <h1 className="article-h1" id="top">
              Learning Opportunities
            </h1>
            <hr className="article-hr" />

            <p style={{ textAlign: "center" }}>
              Quite comprehensive learning resources and courses are available.
            </p>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>{finalRows}</TableBody>
              </Table>
            </TableContainer>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Education;
