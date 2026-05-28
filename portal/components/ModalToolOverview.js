import React from 'react';
import { Dialog, DialogContent, IconButton, DialogTitle, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { default as overview_metadata } from '../resources/overview_metadata.json';
import { default as tools } from '../resources/overview_tools.json';

import {displayShortContent} from '../functions/general.js';

class ModalToolOverview extends React.Component {
    // props: show, tool, onClose, onImageClick

    state = {
        tools: tools
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

    renderModalContent() {
        if (this.props.show === false || this.props.tool === "") {
            return null;
        }
        
        const tool = this.state.tools[this.props.tool];

        return (
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                <Box sx={{ width: { xs: '100%', sm: '48%', md: '48%' }}}>
                    <a href={this.getLink(tool)} rel="noopener noreferrer" target="_blank" className="intextlink">
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    <td><h2><i className="external alternate icon"></i>{tool.name}</h2></td>
                                    {tool.logo ? <td><img src={"./images/tools/" + tool.logo} alt="Logo" className="logo right" /></td> : null}
                                </tr>
                            </tbody>
                        </table>
                    </a>
                    {Object.keys(overview_metadata).map(item => {
                        if (overview_metadata[item].displayDetailsText && tool[item]) {
                            return (
                                <div key={item}>
                                    <b>{overview_metadata[item].label}:</b>
                                    <p>{tool[item]}</p>
                                </div>
                            );
                        }
                        return null;
                    })}
                    {tool.image &&
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src={"./images/tools/" + tool.image}
                                                onClick={() => this.props.onImageClick(tool.id)}
                                                alt="Screenshot"
                                                className="bordered pointer size50"
                                            />
                                        </td>
                                        {tool.images && tool.images.length > 1 &&
                                            <td>
                                                <p>( + {tool.images.length - 1} )</p>
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
                            {Object.keys(overview_metadata).map(item => {
                                if (overview_metadata[item].displayDetailsView && tool[item]) {
                                    return (
                                        <tr className="striped" key={item}>
                                            <td style={{ width: "125px" }}>{overview_metadata[item].label}</td>
                                            <td>{displayShortContent(tool[item], overview_metadata[item].type)}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </Box>
            </Box>
        );
    }

    render() {
        return (
            <Dialog open={this.props.show} onClose={this.props.onClose} maxWidth="md" fullWidth>
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
        );
    };
}

export default ModalToolOverview;