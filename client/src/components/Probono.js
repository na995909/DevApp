import React, { Component } from "react";
import API from "../utils/api";
import { Carousel } from 'react-responsive-carousel';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

import '../App.css';
import logo from '../images/change.png';
import banner from '../images/banner.jpg';

class Probono extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, saved: [] };

  }

  componentDidMount() {
	  this.getSavedProjects()
  }

  getSavedProjects = () => {
    API.getProjects()
      .then((res) => {
        this.setState({ saved: res.data });
      });
  }

  renderProjects = () => {
    let { activeIndex } = this.state;

    let slides = this.state.saved.map((item) => {
      return (
        <div>
          <img src={item.picture} className="content-align-center col-md-6" style={{'height':'400px'}} />
          <a href={item.link} target="_blank">
          <p className="legend" style={{'font-size':'20px'},{'opacity':'0.7'}}>{item.title} </p>
          </a>
        </div>
      );
    });
    return(
        <div className="">
          <Carousel showThumbs={false} infiniteLoop emulateTouch useKeyboardArrows>
                {slides}
          </Carousel>
        </div>
    );
  }

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

		      <section className="banner style5">
			      <div className="content">
				      <header>
				      <h1>DevUp</h1>
				      <h3><b>Lend</b> a hand..., and <b>gain</b> experience...</h3>
				      <p><i><b>Many</b></i> Nonprofits need the talent you have to offer, but they have limited finances. <i><b>Probono</b></i> is a way of <em>paying your talents forward</em> while helping those who <em>meet the needs of others</em>. <i><b>What if</b></i> you could help improve
					      the world, <i><b>one line of code at a time</b></i>, would you take that opportunity?</p>
				      </header>
				      {this.renderProjects()}
			      </div>
			      <div className="image">
				      <img src={banner} alt="Alternate text"/>
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
				      <div>Icons made by <a href="https://www.flaticon.com/authors/geotatah" title="geotatah">geotatah</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
			      </div>
		      </footer>
	      </div>
      </div>
    );
  }

}

export default Probono;
