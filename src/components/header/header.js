import React from 'react';

import { Link } from "react-router-dom";

import './header.css';

let cartStatus = 'empty';

// const bgImg = style {color: #00c8c8;};

const Header = () => {
	return (
	<header>
		<div className='topHeader'>
			<div className='header-section-inner'>
				<div className='currency'>
				Currency:
				<select name="theme">
					<option value="UAH">UAH</option>
					<option value="USD">USD</option>
					<option value="GBR">GBR</option>
				</select>
			</div>
			<div className='userBlock'>
				<div>Register</div>
					<div>Sigin in</div>
					<div className='cart'>
						<i className ="fas fa-shopping-cart"></i>
						{  cartStatus}
						&nbsp;
						&nbsp;
						<i className="fas fa-chevron-down"></i>
					</div>
				</div>
			</div>
			</div>
			<div className='bottomHeader' /*bgImg = {false}*/ >
				<Link to='/'><div className='Logo'>Avenue <span>fashion</span></div></Link>
				<nav>
					<ul>
						<li>mens</li>
						<li>women</li>
						<li><Link to="/brand">the Brand </Link></li>
						<li>local stores</li>
						<li>look book</li>
					</ul>
					<input className='search' type = 'search' placeholder='Search' />
				</nav>
			</div>
	</header>
	)
}
export default Header;