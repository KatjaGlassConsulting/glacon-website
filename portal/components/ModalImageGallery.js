import React from 'react';
import { Dialog, DialogContent, IconButton, DialogTitle, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/image-gallery.css";

import { default as tools } from '../resources/overview_tools.json';

class ModalImageGallery extends React.Component {
    // props: show, tool, onClose
    // props: show, images, locationPrefix, onClose

    state = {
        tools: tools
    }

    render() {
        var images = [];

        if (this.props.tool === undefined || this.props.tool === ""){
            if (this.props.images === undefined || Array.isArray(this.props.images) === false || this.props.images.length === 0){
                return null;
            }
            else {
                this.props.images.forEach(item => {
                    images.push({ original: this.props.locationPrefix + item, thumbnail: this.props.locationPrefix + item, originalClass: "just80" })
                });
            }
        }
        else {
            const tool = this.state.tools[this.props.tool];
            
            if (tool === undefined){
                console.log("ERROR: ModalImageGallery for tool: " + this.props.tool)
            }
        
            tool.images.forEach(item => {
                images.push({ original: "./images/tools/" + item, thumbnail: "./images/tools/" + item, originalClass: "just80" })
            })
        }

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
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />
                </DialogContent>
            </Dialog>
        );
    }
}

export default ModalImageGallery;

