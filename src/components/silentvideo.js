import React from 'react';
import Container from 'react-bootstrap/Container';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

function silentvideo(props) {

    return(
        <Container fluid={true}>
      <Player
      playsInline
      poster="../../src/assets/MFA.png"
      src="../../src/assets/images/silent.mp4"
    />
         </Container>
    );

}

export default silentvideo;