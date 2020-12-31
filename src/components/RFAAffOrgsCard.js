import React from 'react';
import {Container, Row, Image, Col, Card, CardDeck} from "react-bootstrap";
import MFALogo from "../media/AffiliatedOrgs/MFALogo.png";

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
            <Col className = "border" md = {10}>
                {(window.innerWidth >= 768) && (<Row><h1 style = {{color: this.props.mainColor}} className = "border header-size afforgs-header">{this.props.affOrgName}</h1></Row>)}            
                <Row style = {{backgroundColor: (this.props.mainColor + "80"), borderRadius: 15}} className = "border">
                    {(window.innerWidth >= 768) ? (
                        <Col md = {3} className = "p-3 border d-flex align-items-center justify-content-center">
                            <Image className = "aff-orgs-logo-size" src = {MFALogo}/>
                        </Col>
                    ) : (
                        <Col>
                            <Row className = "border">
                                <Col className = "d-flex align-items-center justify-content-center border">
                                    <Image className = "border aff-orgs-logo-size" src = {MFALogo}/>
                                </Col>
                                <Col className = "d-flex align-items-center justify-content-center border">
                                    <h1 style = {{color: this.props.mainColor}} className = "border text-center header-size afforgs-header">{this.props.affOrgName}</h1>
                                </Col>
                            </Row>
                        </Col>
                    )}
                    <Col md = {4} className = "p-3 border d-flex align-items-center justify-content-center">
                        <Image className = "aff-orgs-logo-size" src = {MFALogo} />
                    </Col>
                    <Col md = {5} className = "p-3 border">
                        <Container>
                            <Row className = "justify-content-center">
                                <p className = "afforgs-card-text">{this.props.affOrgsDescription}</p>
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

