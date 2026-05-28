import React from 'react';
import Layout from './Layout';
import { Tabs, Tab, Container } from '@mui/material';
import { withRouter } from 'next/router';


class TabLayout extends React.Component {
    handleDisplayClick = (e, { name }) => {
        this.props.router.push("/overview" + name);
    }

    handleTabChange = (event, newValue) => {
        const route = newValue === 0 ? '/overviewVisual' : '/overviewTable';
        this.props.router.push(route);
    };

    renderMenu() {
        return (
            <Tabs
                value={this.props.visual ? 0 : 1}
                onChange={this.handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                sx={{ alignItems: 'flex-start' }}
            >
                <Tab label="Visual" />
                <Tab label="Table" />
          </Tabs>
        );
    }

    render() {
        if (this.props.visual) {
            return (
                <Layout>
                    <div className="bodycontent">
                        <Container>               
                            {this.renderMenu()}
                            {this.props.children}
                        </Container>
                    </div>
                </Layout>
            );
        }
        else {
            return (
                <Layout>
                    <div className="bodycontent" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                        {this.renderMenu()}
                        {this.props.children}
                    </div>
                </Layout>
            )
        }
    }
}

export default withRouter(TabLayout);
