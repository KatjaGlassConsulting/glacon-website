import React from 'react';
import { IconButton, Menu, MenuItem, Button, Box, Container } from '@mui/material';
import { Menu as MenuIcon, ArrowDropDown, ArrowRight } from '@mui/icons-material';
import { withRouter } from 'next/router'

class HeaderTop extends React.Component {
    state = {
        smallMenuEnlarge: false,
        width: 0,
        height: 0,
        anchorEl: null
    }

    constructor(props) {
        super(props);
    
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleSmallMenuEnlargeToggle = this.handleSmallMenuEnlargeToggle.bind(this);
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleMoreMenuOpen = this.handleMoreMenuOpen.bind(this);
        this.handleMoreMenuClose = this.handleMoreMenuClose.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleItemClick = (e, name) => {
        e.preventDefault()
    
        this.setState({ smallMenuEnlarge: false, anchorEl: null, moreAnchorEl: null });
        switch (name) {
            case "Home": this.props.router.push('/'); break;
            case "Overview": this.props.router.push('/overviewVisual'); break;
            case "Programs": this.props.router.push('/scripts'); break;
            case "Articles": this.props.router.push('/articles'); break;
            case "Info": this.props.router.push('/info'); break;
            case "ConfVideos": this.props.router.push('/confVideos'); break;
            case "Videos": this.props.router.push('/videos'); break;
            case "Rest": this.props.router.push('/rest'); break;
            case "Links": this.props.router.push('/links'); break;
            case "Education": this.props.router.push('/education'); break;
            default: break;
        }
    }

    handleSmallMenuEnlargeToggle = () => { this.setState({ smallMenuEnlarge: !this.state.smallMenuEnlarge }) }

    handleMenuOpen(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleMenuClose() {
        this.setState({ anchorEl: null });
    }
    
    handleMoreMenuOpen(event) {
        this.setState({ moreAnchorEl: event.currentTarget });
    }
    
    handleMoreMenuClose() {
        this.setState({ moreAnchorEl: null });
    }
    
    renderSmallMenu() {
        const { anchorEl, moreAnchorEl } = this.state;
        const menuOpen = Boolean(anchorEl);
        const moreMenuOpen = Boolean(moreAnchorEl);

        const logoFile = this.props.router.route === '/articles/[slug]' ? 
            '../images/fischlogo_02_black_small.png' : 
            './images/fischlogo_02_black_small.png';
    
        return (
            <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                <img src={logoFile} alt="Logo" style={{ height: "60px" }} />
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    onClick={this.handleMenuOpen}
                    style={{ fontSize: '3rem', marginLeft: '16px' }}>
                    <MenuIcon fontSize="inherit" />
                </IconButton>                
                <Menu
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={this.handleMenuClose}
                >
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Home')}>Home</MenuItem>
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Overview')}>Overview</MenuItem>
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Programs')}>Programs</MenuItem>                
                    <MenuItem onClick={this.handleMoreMenuOpen}>More<ArrowRight/></MenuItem>
                    <Menu
                    anchorEl={moreAnchorEl}
                    open={moreMenuOpen}
                    onClose={this.handleMoreMenuClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Education')}>Education</MenuItem>
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'ConfVideos')}>Conf. Videos</MenuItem>
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Videos')}>Videos</MenuItem>
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Rest')}>Rest + APIs</MenuItem>
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Links')}>Links</MenuItem>
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Articles')}>Articles</MenuItem>
                    </Menu>
                    <MenuItem onClick={(e) => this.handleItemClick(e, 'Info')}>Info</MenuItem>
                </Menu>
            </Box>
        );
    }
    
    renderLargeMenu() {
        const logoFile = this.props.router.route === '/articles/[slug]' ? 
            '../images/fischlogo_02_black_small.png' : 
            './images/fischlogo_02_black_small.png';
    
        return (
            <Container>
                <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" gap={3}>
                    <a href="https://www.glacon.eu" rel="noopener noreferrer" target="_blank">
                        <img src={logoFile} alt="Logo" style={{ height: "60px" }} />
                    </a>
                    <Box display="flex" flexWrap="wrap" justifyContent="flex-end" alignItems="center" gap={3} flexGrow={1}>
                        <Button color="inherit" onClick={(e) => this.handleItemClick(e, 'Home')}>Home</Button>
                        <Button color="inherit" onClick={(e) => this.handleItemClick(e, 'Overview')}>Overview</Button>
                        <Button color="inherit" onClick={(e) => this.handleItemClick(e, 'Programs')}>Programs</Button>
                        <Button color="inherit" onClick={this.handleMoreMenuOpen} endIcon={<ArrowDropDown />}>More</Button>
                        <Menu
                            anchorEl={this.state.moreAnchorEl}
                            open={Boolean(this.state.moreAnchorEl)}
                            onClose={this.handleMoreMenuClose}
                        >
                        <MenuItem onClick={(e) => this.handleItemClick(e, 'Education')}>Education</MenuItem>
                        <MenuItem onClick={(e) => this.handleItemClick(e, 'ConfVideos')}>Conf. Videos</MenuItem>
                        <MenuItem onClick={(e) => this.handleItemClick(e, 'Videos')}>Videos</MenuItem>
                        <MenuItem onClick={(e) => this.handleItemClick(e, 'Rest')}>Rest + APIs</MenuItem>
                        <MenuItem onClick={(e) => this.handleItemClick(e, 'Links')}>Links</MenuItem>
                        <MenuItem onClick={(e) => this.handleItemClick(e, 'Articles')}>Articles</MenuItem>
                        </Menu>
                        <Button color="inherit" onClick={(e) => this.handleItemClick(e, 'Info')}>Info</Button>
                    </Box>
                </Box>
            </Container>
        );
    }
    
    render() {
        return (
            <div className="padding_top_bottom color_medium_light">
                {this.state.width >= 1000 && this.renderLargeMenu()}
                {this.state.width < 1000 && this.renderSmallMenu()}
            </div>
        );
    }
}

export default withRouter(HeaderTop);
