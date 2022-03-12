import React from 'react';
import banner1 from '../img/tech-red.jpg';
import banner2 from '../img/image-five.jpg';

export function Banner(data) {

	data = data.data[0];

	var containerStyle;

	if ( data.id == 1 ){
		var containerStyle = {
			backgroundImage: `url(${banner1})`,
		}
	}else if ( data.id == 2 ){
		var containerStyle = {
			backgroundImage: `url(${banner2})`,
		}
	}

	return (
		<section style={containerStyle} className="card-banner">
			<div className="content">
				<h2>{ data.title }</h2>
				<p>{ data.text }</p>
				<a href="#" className="btn">Learn More <i className="fas fa-angle-double-right"></i></a>
			</div>
		</section>
	);
}