/*
* Static page loading About Us information
*/
import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

import '../App.css';
import nelly_ackerman from '../images/nelly_ackerman.jpeg';
import denis_gayvoronsky from '../images/denis_gayvoronsky.jpeg';
import alex_peralta from '../images/alex_peralta.jpeg';
import logo from '../images/change.png';

class About extends Component {

  render() {
    return (
        <div className="main-container">

	        <Navbar color="light" light expand="md">
		        <NavbarBrand>
			        <img src={logo} />
		        </NavbarBrand>
		        <Nav className="ml-auto" navbar>
			        <NavItem>
				        <NavLink href="/ProBono">ProBono Opportunities</NavLink>
			        </NavItem>
			        <NavItem>
				        <NavLink href="/Projects">Categories</NavLink>
			        </NavItem>
			        <NavItem>
				        <NavLink href="/About/">About Us</NavLink>
			        </NavItem>
		        </Nav>
	        </Navbar>

            <div id="wrapper" className="divided">

		            <section className="spotlight style2 orient-right content-align-left image-position-center onscroll-image-fade-in color2" id="first">
			            <div className="content">
				            <h2>Nelly Ackerman</h2>
				            <p>My name is Nelly Ackerman. I'm coming from another professional background in health care, i've been a registared nurse for 15 years.
					            I obtained my Bachelor degree in nursing in 2003 and since then i'm working in the medical field.
					            For the first 10 years, i've worked in Emergency Room at the big Trauma Center hospital. In 2012 i've obtained my Master in nursing sience and moved on. For the 5 last years i've been working in surgical services post op care unit at Northside Hospital.
					            My future goal is to stay in Healthcare field, and work in nursing informatics.</p>
				            <ul className="actions stacked">
					            <li><a href="https://na995909.github.io/Basic-Portfolio/" target="_blank" className="button">Learn More</a></li>
				            </ul>
			            </div>
			            <div className="image">
				            <img src={nelly_ackerman} alt="Image of Nelly Ackerman" />
			            </div>
		            </section>

		            <section className="spotlight style2 orient-left content-align-left image-position-center onscroll-image-fade-in color6">
			            <div className="content">
				            <h2>Denis Gayvoronsky</h2>
				            <p>My name is Denis Gayvoronsky. I have Bachelor degree in financing from Ukraine University. I moved to United states in 2007, since then i've been working as a maintanence engineer in hospital settings. Even though i'm coming from another background, i've always wanted to dedicate my professional life to computer technologies, since i find this field very facinating, very advanced, and for these reasons i've signed up for the coding course in GT bootcamp.</p>
				            <ul className="actions stacked">
					            <li><a href="https://deniskag.github.io/Basic-Portfolio/" target="_blank" className="button">Learn More</a></li>
				            </ul>
			            </div>
			            <div className="image">
				            <img src={denis_gayvoronsky} alt="Image of Denis Gayvoronsky" />
			            </div>
		            </section>

		            <section className="spotlight style2 orient-right content-align-left image-position-center onscroll-image-fade-in color5">
			            <div className="content">
				            <h2>Alexander Peralta</h2>
				            <p>I am a Software Engineering enthusiast, a Servant Leader, and an aspiring Entrepreneur. I have been designing, developing, and supporting Information Technology systems since 1999. I have extensive experience leading teams which design and support Web-Scale systems.
					            As a practicing Scrum Master, I have leveraged the Scrum Framework to help teams transform their delivery methods and improve their efficiencies.</p>
				            <ul className="actions stacked">
					            <li><a href="https://alex-peralta.github.io/Responsive-Portfolio/" target="_blank" className="button">Learn More</a></li>
				            </ul>
			            </div>
			            <div className="image">
				            <img src={alex_peralta} alt="Image of Alexander Peralta" />
			            </div>
		            </section>

	            <footer className="wrapper style1 align-center">
		            <div className="inner">
			            <ul className="icons">
				            <li><a href="https://alex-peralta.github.io/DevUp/" className="icon style2 fa-github" target="_blank"><span className="label">Github</span></a>
				            </li>
				            <li><a href="https://www.linkedin.com/in/peraltasr/" className="icon style2 fa-linkedin" target="_blank"><span className="label">LinkedIn</span></a>
				            </li>
				            <li><a href="mailto:alex.peralta.sr@gmail.com" className="icon style2 fa-envelope" target="_blank"><span className="label">Email</span></a>
				            </li>
			            </ul>
			            <p>&copy; Copyright 2018 DevUp</p>
		            </div>
	            </footer>

            </div>
        </div>

    );
  }

}

export default About;
