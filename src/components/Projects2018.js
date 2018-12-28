import React, { Component } from 'react'
import { Grid, Thumbnail, Button, Row, Col, Jumbotron, PageHeader } from 'react-bootstrap'
import matchinggame from '../assets/matchinggame.png'
import frogger from '../assets/frogger.png'
import test from '../assets/test.png'
import restaurant from '../assets/restaurant.png'
import myreads from '../assets/myreads.png'
import neighborhood from '../assets/neighborhood.png'
import translator from '../assets/translator.png'
import todo from '../assets/todo.png'

class Projects2018 extends Component {
    render(){
        return(
            <Grid>
            <PageHeader className='project'>
            Projects: 2018
                </PageHeader>
                <Jumbotron>
                    <h1>Udacity Front-End Development Nanodegree - Google Full Scholarship 2018</h1>
                    <p>Awarded a 6-month Google Developer Nano-degree Scholarship for the Front-End Web Developer track after completing the 3-month Google Challenge beginner track.</p>
                    <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/Udacity-FEND", "_blank")} bsStyle="info">Github Repository</Button>
                    </p>
                </Jumbotron>
                <Grid>
                <Row className='holder'>
                    <Col xs={12} md={6} lg={6}>
                    <Thumbnail className='thumbnail' src={matchinggame} alt="242x200">
                        <h1>Memory Game</h1>
                        <p>Memory game is a matching game, containing of 16 cards, the goal is to matching up 8 pairs, you can only open two cards at the same time, if you success game over!</p>
                        <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/memory-game", "_blank")} bsStyle="info">Github Repository</Button>
                        <Button onClick={()=> window.open("https://yuribenjamin.github.io/memory-game/", "_blank")} bsStyle="primary">Play Now!</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <Thumbnail className='thumbnail' src={frogger} alt="242x200">
                        <h1>Arcade Game</h1>
                        <p>Classic arcade game clone project 4 in Google Developer Scholarship passed on OOJS & Canvas. simply use the arrow keys to reach the water, congrats you win!</p>
                        <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/arcade-game/", "_blank")} bsStyle="info">GitHub Repository</Button>
                        <Button onClick={()=> window.open("https://yuribenjamin.github.io/arcade-game/", "_blank")} bsStyle="primary">Play Now!</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <Thumbnail className='thumbnail' src={test} alt="242x200">
                        <h1>Feed Reader Testing</h1>
                        <p>Feed Reader Testing project 5 in Google Developer Scholarship a web-based application that reads RSS feeds, the project must passing all the required test suites using Jasmine framework.</p>
                        <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/feed-reader-testing", "_blank")} bsStyle="info">GitHub Repository</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <Thumbnail className='thumbnail' src={restaurant} alt="242x200">
                        <h1>Restaurant Reviews</h1>
                        <p>convert a static webpage to a mobile-ready web application. take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use</p>
                        <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/restaurant-reviews", "_blank")} bsStyle="info">GitHub Repository</Button>
                        <Button onClick={()=> window.open("https://yuribenjamin.github.io/restaurant-reviews/", "_blank")} bsStyle="primary">Live Preview</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <Thumbnail className='thumbnail' src={myreads} alt="242x200">
                        <h1>My Reads</h1>
                        <p>created a bookshelf app that allows the user to select and categorize books they have - read - currently reading - want to read, using React to build the application and provides an API server and client library.</p>
                        <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/myreads", "_blank")} bsStyle="info">GitHub Repository</Button>
                        <Button onClick={()=> window.open("https://yuribenjamin.github.io/myreads/", "_blank")} bsStyle="primary">Live Preview</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <Thumbnail className='thumbnail' src={neighborhood} alt="242x200">
                        <h1>Neighborhood Map</h1>
                        <p>map that display various locations to coffe cafes in cairo, egypt where you get your best coffee, the project is a single page app using react framework and this map has a several functionalities, like highlighted locations, third-party data about loctions.</p>
                        <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/neighborhood-map", "_blank")} bsStyle="info">GitHub Repository</Button>
                        <Button onClick={()=> window.open("https://yuribenjamin.github.io/neighborhood-map/", "_blank")} bsStyle="primary">Live Preview</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <Thumbnail className='thumbnail' src={translator} alt="242x200">
                        <h1>Transaltor Kit</h1>
                        <p>my friends asked me favor to create the following application for free, I did what they ask me with l❤ve  , the application not complete yet, you can try it, and if you can contribute to this you're welcome.</p>
                        <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/translatorkit", "_blank")} bsStyle="info">GitHub Repository</Button>
                        <Button onClick={()=> window.open("https://yuribenjamin.github.io/translatorkit/", "_blank")} bsStyle="primary">Live Preview</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <Thumbnail className='thumbnail' src={todo} alt="242x200">
                        <h1>Todo App</h1>
                        <p>Simple todo app using reactjs frame work, you can add task delete task, also all tasks you add store in your local storge, simply if you add tasks, and then refresh the page or close page and open again your tasks didn't go anywhere.</p>
                        <p>
                        <Button onClick={()=> window.open("https://github.com/Yuribenjamin/todoapp", "_blank")} bsStyle="info">GitHub Repository</Button>
                        <Button onClick={()=> window.open("https://yuribenjamin.github.io/todoapp/", "_blank")} bsStyle="primary">Live Preview</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                </Row>
                </Grid>
            </Grid>
        );
    }
}

export default Projects2018