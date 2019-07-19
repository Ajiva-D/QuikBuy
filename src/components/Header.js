import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header>
			<nav>
				<a className="logo" href="home">QuikBuy</a>
				<ul className="nav-item-con">
					<li>
						<a href="women">WOMEN</a>
					</li>
					<li>
						<a href="men">MEN</a>
					</li>
					<li>
						<a href="sale">SALE</a>
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
};

export default Header;
