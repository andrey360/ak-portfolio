import React from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactAudioPlayer from 'react-audio-player';

import soundFile1 from '../assets/sounds/lofi one 140 bpm.wav';
import soundFile2 from '../assets/sounds/bounce 181 bpm.mp3';
import soundFile3 from '../assets/sounds/night (flip) 158 bpm.wav';

function SoundsPage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} />
            <Container fluid>
                <Row className="justify-content-center" md={9} sm={12} xs={12} >
                    <Col className="justify-content-around" md={3}>
                        <h3 className="display-6 font-weight-light">Lo-fi:</h3>
                        <ReactAudioPlayer src={soundFile1} autoPlay={false} controls={true}/>
                    </Col>
                    <Col className="justify-content-around" md={3}>
                        <h3 className="display-6 font-weight-light">Trap:</h3>
                        <ReactAudioPlayer src={soundFile2} autoPlay={false} controls={true}/>
                    </Col>
                    <Col className="justify-content-around" md={3}>
                        <h3 className="display-6 font-weight-light">Guitar Sample:</h3>
                        <ReactAudioPlayer src={soundFile3} autoPlay={false} controls={true}/>
                    </Col>
                </Row>
            </Container>
        </div>
            
        
    );
}

export default SoundsPage;