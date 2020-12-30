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
    return (
        <Col>
            {(window.innerWidth > 768) && (<h1 style = {{color: this.props.color}} className = "border header-size afforgs-header">{this.props.affOrgName}</h1>)}            
            <Row style = {{backgroundColor: (this.props.color + "80"), borderRadius: 15}} className = "justify-content-center"> 
                {(window.innerWidth > 768) ? (
                    <Col md = {3} className = "p-3 border d-flex align-items-center justify-content-center">
                        <Image className = "aff-orgs-logo-size" src = {MFALogo}/>
                    </Col>
                ) : (
                    <Col md = {3}>
                        <Row className = "p-3 d-flex justify-content-around align-items-center border">
                            <Image className = "aff-orgs-logo-size" src = {MFALogo}/>
                            <h1 style = {{color: this.props.color}} className = "border w-60 text-center header-size afforgs-header">{this.props.affOrgName}</h1>
                        </Row>
                    </Col>
                )}
                <Col md = {5} className = "p-3 border d-flex align-items-center justify-content-center">
                    <Image className = "aff-orgs-logo-size" src = {MFALogo} />
                </Col>
                <Col md = {4} className = "p-3 border d-flex align-items-center">
                    <Container>
                        <Row><p className = "afforgs-card-text text-center">{this.props.affOrgsDescription}</p></Row>
                        <Row className = "justify-content-center"><a className = "text-center" href = "#">Vist TFA</a></Row>
                    </Container>
                </Col>
            </Row>
            <br/><br/>
        </Col>
    );
    }
}

