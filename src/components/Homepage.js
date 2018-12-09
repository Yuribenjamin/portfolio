import React, { Component } from 'react';
import { Grid, Jumbotron, Button, Row, Col, Image } from 'react-bootstrap'
import ibrahim from '../assets/ibrahim.jpg'
import fb from '../assets/fb.svg'
import li from '../assets/li.svg'
import gh from '../assets/gh.svg'
import tw from '../assets/tw.svg'
class Homepage extends Component {

    url () {
        const url='https://www.slideshare.net/slideshow/embed_code/key/lI4ocPTFPzNxVe';
        window.open(url);
    }
    render() {
        return(
            <Grid>
                <Jumbotron>
                <h1>Welcome</h1>
                <p>
                This is Abraham Ragab Homepage,
                I'm a Former Lawyer and Front-End Web Developer
                </p>
                    <Button
                    onClick={this.url}
                    >Resume</Button>
            </Jumbotron>
            <Row
            className='show-grid text-center'>
                <Col
                className='person-wrapper'>
                <Image src={ibrahim} circle className='profile-pic'/>
                <h3>Abraham Ragab</h3>
                <p
                className='des'>
                    Self-motivated web developer with a high level of experience working on multiple projects<br/>
                    Passionate and hard working with a penchant for meeting deadlines
                </p>
                </Col>
            </Row>
            <Row
            className='show-grid text-center footer'>
                <Col xs={3} sm={3}>
                <a href='https://facebook.com/Ibrhim.Moustafa' rel="noopener noreferrer" target='_blank'>
                <Image src={fb} circle className='icon'/>
                </a>
                </Col>
                <Col xs={3} sm={3}>
                <a href='https://www.linkedin.com/in/abrahamragab/' rel="noopener noreferrer" target='_blank'>
                <Image src={li} circle className='icon'/>
                </a>
                </Col>
                <Col xs={3} sm={3}>
                <a href='https://github.com/Yuribenjamin' rel="noopener noreferrer" target='_blank'>
                <Image src={gh} circle className='icon'/>
                </a>
                </Col>
                <Col xs={3} sm={3}>
                <a href='https://twitter.com/AbrahamRagab' rel="noopener noreferrer" target='_blank'>
                <Image src={tw} circle className='icon'/>
                </a>
                </Col>
            </Row>
            </Grid>
        );
    }
}

export default Homepage