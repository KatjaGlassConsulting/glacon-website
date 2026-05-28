import React from 'react';

class CardSlimContent extends React.Component {

    // possible props: title, titleLogo, titleLink, titleOnClick, subtitle, image, imagePosition, imageOnClick, imageDescription, imageAlt
    // additional support of {children}

    renderImage(props) {
        return (
            <div>
                <img src={props.image} onClick={props.imageOnClick} alt={props.imageAlt} className="center"/>
                <p>{props.imageDescription}</p>
            </div>
        );
    }

    renderLogoTableCell(logo) {
        if (logo === undefined || logo === ""){
            return null;
        }
        return <td style={{minWidth:"60px"}}><img src={logo} alt="Logo" className="logo right"/></td>
    }

    renderTitle(props) {       
        if (props.titleLink) {
            return (
                <a href={props.titleLink} rel="noopener noreferrer" target="_blank" className="intextlink" onClick={props.titleOnClick}>
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td><h1 style={{ marginBottom: 0, marginTop: 0, lineHeight: "normal" }}>{props.title}</h1></td>
                                {this.renderLogoTableCell(props.titleLogo)}
                            </tr>
                        </tbody>
                    </table>
                </a>
            );
        }
        else if (props.titleOnClick){            
            return (
                <table style={{ width: "100%" }} onClick={props.titleOnClick}>
                    <tbody>
                        <tr>
                            <td><h1 style={{ marginBottom: 0, marginTop: 0, lineHeight: "normal" }} className="pointer">{props.title}</h1></td>
                            {this.renderLogoTableCell(props.titleLogo)}
                        </tr>
                    </tbody>
                </table>
            );
        }
        else {
            return (
                <table style={{ width: "100%" }} onClick={props.titleOnClick}>
                    <tbody>
                        <tr>
                            <td><h1 style={{ marginBottom: 0 }}>{props.title}</h1></td>
                            {this.renderLogoTableCell(props.titleLogo)}
                        </tr>
                    </tbody>
                </table>
            );
        }
    }

    render() {
        return (
            <div className="boxCard fullHeight">
                {this.props.image && this.props.imagePosition === "top" &&
                    this.renderImage(this.props)}

                {this.renderTitle(this.props)}

                {this.props.subtitle &&
                    <h3>{this.props.subtitle}</h3>}

                {this.props.children}

                {this.props.image && this.props.imagePosition === "bottom" &&
                    this.renderImage(this.props)}
            </div>
        );
    }
}

export default CardSlimContent;