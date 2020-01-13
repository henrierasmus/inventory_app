import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className='navbar'>
				<h1>Inventorty Manager</h1>
				<ul>
					<li>
						<Link to={'/catagory'}>Catagory</Link>
					</li>
					<li>
						<Link to={'/brand'}>Brands</Link>
					</li>
					<li>
						<Link to='#!'>All products</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
