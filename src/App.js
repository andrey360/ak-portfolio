import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SoundsPage from './pages/SoundsPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "AK",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "Sounds", path: "/sounds"},
        {title: "Services", path: "/services"},
        {title: "Contact", path: "/contact"}
      ],
      
      home: {
        title: "AK",
        subTitle: "Music Producer from Vancouver, BC",
        text: " Click on the images below for links to my Youtube, Samples, and my Beatstore!"
      },
      
      sounds: {
        title: "Sounds by AK",
        subTitle: "Here are a few different compositions I have made, hope you enjoy! More of my work can be found on my Youtube, Instagram, or Beatstars profile!"
      },

      contact: {
        title: "Let's work!",
        subTitle: "If need mixing/mastering services, want to collaborate, or just want to talk, reach out with the form below!"
      }
    }
  }  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid = {true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand> AK </Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-control="navbar-toggle"/>
          <Navbar.Collapse id = "navbar-toggle">
            <Nav className = "ml-auto">
              <Link className = "nav-link" to="/">Home</Link>
              <Link className = "nav-link" to="/sounds">Sounds</Link>
              <Link className = "nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle = {this.state.home.subTitle} text = {this.state.home.text}/>}/>
        <Route path="/sounds" exact render={() => <SoundsPage title={this.state.sounds.title} subTitle={this.state.sounds.subTitle}/>}/>
        <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle}/>}/>
        <Footer />

        </Container>
      </Router>    
    );
  }
}

export default App;
