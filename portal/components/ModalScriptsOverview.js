import React from 'react';
import { Dialog, DialogContent, IconButton, DialogTitle, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { default as scripts_metadata } from '../resources/scripts_metadata.json';
import { scripts } from '../functions/general';

import { displayShortContent } from '../functions/general.js';

class ModalProjectOverview extends React.Component {
    // props: show, project, script, onClose, onImageClick, onToolLinkClick

    renderModalContent() {

        if (this.props.show === false || this.props.script === undefined || this.props.script === ""
            || this.props.project === undefined || this.props.project === "") {
            return null;
        }

        const script = scripts[this.props.project][this.props.script];

        return (
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                <Box sx={{ width: { xs: '100%', sm: '48%', md: '48%' }}}>
                    <h2 style={{margin:0}}>{script.name}</h2>
                    <p className="pointer" onClick={() => { this.props.onToolLinkClick(script.toolId) }}>{script.tool}</p>                            
                    {Object.keys(scripts_metadata).map(item => {
                        if (scripts_metadata[item].displayDetailsText && script[item] && script[item] !== " ") {
                            return (
                                <div key={item}>
                                    <b>{scripts_metadata[item].label}:</b><br></br>
                                    {displayShortContent(script[item], scripts_metadata[item].type)}
                                </div>
                            );
                        }
                        return null;
                    })}               
                </Box>
                <Box sx={{ width: { xs: '100%', sm: '48%', md: '48%' }}}>
                    <table className="styled">
                        <tbody>
                            {Object.keys(scripts_metadata).map(item => {
                                if (scripts_metadata[item].displayDetailsView && script[item] && script[item] !== " ") {
                                    return (
                                        <tr className="border_bottom" key={item}>
                                            <td style={{ width: "125px" }}>{scripts_metadata[item].label}</td>
                                            <td>{displayShortContent(script[item], scripts_metadata[item].type)}</td>
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

export default ModalProjectOverview;