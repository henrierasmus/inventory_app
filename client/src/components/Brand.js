import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Brand = ({ match }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		getData(match.params.id);
	}, []);

	const getData = async id => {
		try {
			const res = await axios.get(`http://localhost:5000/api/brand/${id}`);
			const newData = await res.data;
			setItems(newData);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='landing'>
			<div className='landing-inner'>
				{items.map(item => (
					<div key={item._id}>{item.model}</div>
				))}
			</div>
		</div>
	);
};

export default Brand;
