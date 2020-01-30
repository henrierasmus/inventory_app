import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Brands = ({ match }) => {
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		getData(match.params.id);
	}, []);

	const getData = async id => {
		try {
			const res = await axios.get(`http://localhost:5000/api/brand`);
			const newData = await res.data;
			setBrands(newData);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='brands'>
			<div className='brands-inner'>
				{brands.map(brand => (
					<div key={brand._id}>
						<Link to={`/brand/${brand._id}`}>{brand.name}</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Brands;
