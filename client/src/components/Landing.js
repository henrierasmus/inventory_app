import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export const Landing = props => {
	const [catagories, setCatagories] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const res = await axios.get('http://localhost:5000');
		const newData = await res.data;
		console.log(newData);
		setCatagories(newData);
	};

	return (
		<div>
			<div className='landing'>
				<div className='landing-inner'>
					{catagories.map(catagory => (
						<div key={catagory._id}>
							<Link to={`/catagory/${catagory._id}`}>
								{catagory.instrument}
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
