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
        <Col>
            <br/><br/>
            {(window.innerWidth >= 768) && (<Col><h1 style = {{color: this.props.color}} className = "ml-3 border header-size afforgs-header">{this.props.affOrgName}</h1></Col>)}            
            <Row className = "justify-content-center"> 
                {(window.innerWidth >= 768) ? (
                    <Col style = {{...borderRadiusLeft, backgroundColor: (this.props.color + "80")}} md = {3} className = "p-3 border d-flex align-items-center justify-content-center">
                        <Image className = "aff-orgs-logo-size" src = {MFALogo}/>
                    </Col>
                ) : (
                    <Col style = {{...borderRadiusLeft, backgroundColor: (this.props.color + "80")}} md = {3}>
                        <Row sm = {2} className = "p-3 d-flex justify-content-around align-items-center border">
                            <Image className = "aff-orgs-logo-size" src = {MFALogo}/>
                            <h1 style = {{color: this.props.color}} className = "border w-60 text-center header-size afforgs-header">{this.props.affOrgName}</h1>
                        </Row>
                    </Col>
                )}
                <Col style = {{backgroundColor: (this.props.color + "80")}} md = {4} className = "p-3 border d-flex align-items-center justify-content-center">
                    <Image className = "aff-orgs-logo-size" src = {MFALogo} />
                </Col>
                <Col style = {{...borderRadiusRight, backgroundColor: (this.props.color + "80")}} md = {4} className = "p-3 border d-flex align-items-center">
                    <Container>
                        <Row><p className = "afforgs-card-text text-center">{this.props.affOrgsDescription}</p></Row>
                        <Row className = "justify-content-center"><a className = "text-center" href = "#">Vist TFA</a></Row>
                    </Container>
                </Col>
            </Row>
        </Col>
    );
    }
}

