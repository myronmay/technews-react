import React from 'react';

export function NewsCard({data}) {

	return (
		<div className="news-card">
			{data.map((data) => (
				<div>
					<img src={data.img} alt="News"/>
					<h3>{data.title}</h3>
					<p>{data.text}</p>
					<a href="#">Learn More <i className="fas fa-angle-double-right"></i> </a>
				</div>
			))}
		</div>
	);
};