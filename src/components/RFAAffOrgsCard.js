import React from 'react';
import {Container, Row, Image, Col, ResponsiveEmbed} from "react-bootstrap";
export default class RFAAffOrgsCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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

    render () {

    const borderRadiusLeft = {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    };
    const borderRadiusRight = {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    }

    return (
        <Row className = "justify-content-center">
            <Col className = "" md = {11} lg = {11} xl = {11}>
                {(window.innerWidth >= 768) && (<Row><h1 style = {{color: this.props.mainColor}} className = "header-size afforgs-header">{this.props.affOrgName}</h1></Row>)}            
                <Row style = {{backgroundColor: (this.props.mainColor + "80"), borderRadius: 15}} className = "">
                    {(window.innerWidth >= 768) ? (
                        <Col sm = {3} md = {3} lg = {3} xl = {3} className = "p-3 d-flex align-items-center justify-content-center">
                            <Image className = "border aff-orgs-logo-size" src = {this.props.logo}/>
                        </Col>
                    ) : (
                        <Col>
                            <Row className = "p-3">
                                <Col sm = {5} md = {5} lg = {5} xl = {5}className = "d-flex align-items-center justify-content-center ">
                                    <Image className = "aff-orgs-logo-size" src = {this.props.logo}/>
                                </Col>
                                <Col sm = {7} md = {7} lg = {7} xl = {7} className = "d-flex align-items-center justify-content-center ">
                                    <h1 style = {{color: this.props.mainColor}} className = "text-center header-size afforgs-header">{this.props.affOrgName}</h1>
                                </Col>
                            </Row>
                        </Col>
                    )}
                    <Col md = {5} lg = {5} xl = {5} className = "p-3 border d-flex align-items-center justify-content-center">
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/NpEaa2P7qZI?playlist=NpEaa2P7qZI&loop=1&controls=0&autoplay=1&mute=1"></iframe> */}
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed src="https://www.youtube.com/embed/NpEaa2P7qZI?playlist=NpEaa2P7qZI&loop=1&controls=0&autoplay=1&mute=1" />
                    </ResponsiveEmbed>
                    </Col>
                    <Col md = {4} lg = {4} xl = {4} className = "p-3 border">
                        <Container>
                            <Row className = "justify-content-center">
                                <p className = "afforgs-card-text text-center">{this.props.affOrgsDescription}</p>
                                <a style = {{color: this.props.linkColor}} className = "text-center aff-org-card-link" href = "#">VISIT {this.props.orgAbrv}</a>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
    }
}

