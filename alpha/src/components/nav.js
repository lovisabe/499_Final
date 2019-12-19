import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg'; 
import HamburgerIcon from '../assets/images/icon_hamburger.svg'; 


import {Link} from 'react-router-dom';

const HeaderNav = ({title}) => {
    return (
	<>
		<header className="nav flex-xs-parent flex-xs-horizontal">
			<Link to="/">
				<div className="p-xs-s p-md-n content-contain-header">
					<img src={Logo} alt="logo" style={{width: '2em'}}/>
					<h1 style={{fontSize:'1.2em', fontWeight:'bold'}}>{title}</h1>
				</div>
			</Link>
			<Nav/>
		</header>
	</>
	);
}

const Nav = () => {
	return (
		<nav className='p-xs-n nav display-xs-n flex-md-justify-end flex-md-parent flex-md-horizontal'>
		<ul className="flex-xs-parent flex-xs-horizontal flex-xs-justify-end p-xs-bl p-md-bn">
			<li>
				<Link to="/learn">How to pair fonts</Link>
			</li>
			<li>
				<Link to="/about">About FontPairing</Link>
			</li>
			<li>
				<Link className="btn btn--primary" to="pair-fonts">Get Started</Link>
			</li>
		</ul>
		</nav>	
	);
}

const MobileNav = () => {
	let [sideBarOpen, setSideBarOpen] = useState(true);
    return (
	<section className="display-md-n">
		<div className="nav-icon display-md-n position-xs-f" onClick={()=>setSideBarOpen(!sideBarOpen)}>
			<img src={HamburgerIcon} alt="nav icon"/>
		</div>
		<nav className={`p-xs-n position-xs-a mobile-nav ${sideBarOpen?'active':''}`}>
			<ul className="flex-xs-parent flex-xs-vertical flex-xs-justify-end p-xs-bl p-md-bn">
				<li className="p-xs-tl">
					<Link to="/learn" onClick={()=>setSideBarOpen(!sideBarOpen)}>How to pair fonts</Link>
				</li>
				<li className="p-xs-tl">
					<Link to="/about" onClick={()=>setSideBarOpen(!sideBarOpen)}>About FontPairing</Link>
				</li>
				<li className="p-xs-tl">
					<Link className="" to="pair-fonts" onClick={()=>setSideBarOpen(!sideBarOpen)}>Get Started</Link>
				</li>
			</ul>
		</nav>	
	</section>
	);
}


export {HeaderNav, MobileNav};