import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { default as projects } from '../resources/projects_data.json';
import { default as projects_metadata } from '../resources/projects_metadata.json';

import {displayContent} from '../functions/general.js';

class ModalProjectOverview extends React.Component {
    // props: show, project, onClose, onImageClick

    renderModalContent() {

        if (this.props.show === false || this.props.project === undefined || this.props.project === "") {
            return null;
        }

        const project = projects[this.props.project];

        return (
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                <Box sx={{ width: { xs: '100%', sm: '48%', md: '48%' }}}>
                    <a href={project.linkProject} rel="noopener noreferrer" target="_blank" className="intextlink">
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    <td><h2><i className="external alternate icon"></i>{project.name}</h2></td>
                                    {project.logo ? <td><img src={"./images/projects/" + project.logo} alt="Logo" className="logo right" /></td> : null}
                                </tr>
                            </tbody>
                        </table>
                    </a>
                    {Object.keys(projects_metadata).map(item => {
                        if (projects_metadata[item].displayDetailsText && project[item]) {
                            return (
                                <div key={item}>
                                    <b>{projects_metadata[item].label}:</b><br></br>
                                    {displayContent(project[item], projects_metadata[item].type)}
                                </div>
                            );
                        }
                        return null;
                    })}
                    {project.images && Array.isArray(project.images) && project.images.length > 0 &&
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src={"./images/projects/" + project.images[0]}
                                                onClick={() => this.props.onImageClick(project.id)}
                                                alt="Screenshot"
                                                className="bordered pointer size50"
                                            />
                                        </td>
                                        {project.images && project.images.length > 1 &&
                                            <td>
                                                <p>( + {project.images.length - 1} )</p>
                                            </td>
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                </Box>
                <Box sx={{ width: { xs: '100%', sm: '48%', md: '48%' }}}>
                    <table className="styled">
                        <tbody>
                            {Object.keys(projects_metadata).map(item => {
                                if (projects_metadata[item].displayDetailsView && project[item]) {
                                    return (
                                        <tr className="border_bottom" key={item}>
                                            <td style={{ width: "125px" }}>{projects_metadata[item].label}</td>
                                            <td>{displayContent(project[item], projects_metadata[item].type)}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                            <tr className="border_bottom" key="Contact">
                                <td style={{ width: "125px" }}>Contact</td>
                                <td>
                                    {project.contactName}<br></br>
                                    <a href={"mailto:" + project.contactMail} className="intextlink nowrap" 
                                        rel="noopener noreferrer" target="_blank"><i className="envelope icon"></i>{project.contactMail}</a><br></br>
                                    <a href={project.contactHomepage} className="intextlink nowrap" 
                                        rel="noopener noreferrer" target="_blank">{project.contactHomepage}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>
        );
    }

    render() {
        return (
            <Box position="relative">
                <Dialog open={this.props.show} onClose={this.props.onClose} maxWidth="md">
                    <DialogTitle>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={this.props.onClose}
                                aria-label="close"
                                style={{ position: 'absolute', right: 12, top: 12 }}
                                >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        {this.renderModalContent()}
                    </DialogContent>
                </Dialog>
            </Box>
        );
    };
}

export default ModalProjectOverview;