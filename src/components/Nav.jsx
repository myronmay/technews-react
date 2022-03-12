import React from 'react';
import logo from '../img/brand.png';

export const Nav = () => {
	return (
		<nav className="nav-main">
			<img src={logo} alt="TechNews LOGO" className="nav-brand"/>
			<ul className="nav-menu">
				<li>
					<a href="#">Web Development</a>
				</li>
				<li>
					<a href="#">Blockchain</a>
				</li>
				<li>
					<a href="#">Artificial Intellegence</a>
				</li>
				<li>
					<a href="#">Machine learning</a>
				</li>
				<li>
					<a href="#">Quantium computing</a>
				</li>
				<li>
					<a href="#">Startup</a>
				</li>
				<li>
					<a href="#">More</a>
				</li>
			</ul>
			<ul className="nav-menu-right">
				<li>
					<a href="#">
						<i className="fas fa-search"></i>
					</a>
				</li>
			</ul>
		</nav>
	);
};