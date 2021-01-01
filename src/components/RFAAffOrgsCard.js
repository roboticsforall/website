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
            <Col className = "" md = {11} lg = {11} xl = {11}>
                {(window.innerWidth >= 768) && (<Row><h1 style = {{color: this.props.mainColor}} className = "header-size afforgs-header">{this.props.affOrgName}</h1></Row>)}            
                <Row style = {{backgroundColor: (this.props.mainColor + "80"), borderRadius: 15}} className = "">
                    {(window.innerWidth >= 768) ? (
                        <Col sm = {3} md = {3} lg = {3} xl = {3} className = "p-3 d-flex align-items-center justify-content-center">
                            <Image className = "aff-orgs-logo-size" src = {MFALogo}/>
                        </Col>
                    ) : (
                        <Col>
                            <Row className = "p-3">
                                <Col className = "d-flex align-items-center justify-content-center ">
                                    <Image className = " aff-orgs-logo-size" src = {MFALogo}/>
                                </Col>
                                <Col className = "d-flex align-items-center justify-content-center ">
                                    <h1 style = {{color: this.props.mainColor}} className = "text-center header-size afforgs-header">{this.props.affOrgName}</h1>
                                </Col>
                            </Row>
                        </Col>
                    )}
                    <Col md = {5} lg = {5} xl = {5} className = "p-3 border d-flex align-items-center justify-content-center">
                        <Image className = "aff-orgs-logo-size" src = {MFALogo} />
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

