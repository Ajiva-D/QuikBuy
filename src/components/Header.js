import React from "react";
import "./Header.css";
import {Link, BrowserRouter as Router} from 'react-router-dom'


class Header extends React.Component{
	constructor(){
		super()
		this.state = {
			  condition:false
		}
	}
	// const showMenu = () => {
	// const menu =	document.querySelector("nav-item-con");

	// }
	changeClass = () => this.setState({condition:!this.state.condition})
	render(){

	return (
		<header>
			<nav>
				<a className="logo" href="/">QuikBuy</a>
				<div className="menu" onClick={this.changeClass}>
				<i className="fas fa-bars"></i>
				</div>
				
				<ul className={ `nav-item-con ${this.state.condition ? "show-menu" : ""}`}>
					<li>
						<a href="women">WOMEN</a>
					</li>
					<li>
						<Link to="/men">MEN</Link>
					</li>
					<li>
						<Link to="/cart">SALE</Link>
					</li>
					<li>
						<a href="brands">BRANDS</a>
					</li>
					<li>
						<a href="size">SIZE</a>
					</li>
					<li>
						<a href="contact">CONTACT</a>
					</li>
				</ul>
				<ul className="icons">
					<li>
						<i className="fas fa-search" />
					</li>
					<li>
						<i className="material-icons">lock_outline</i>
					</li>
				</ul>
				
			</nav>
		</header>
	);
	}
};

export default Header;
