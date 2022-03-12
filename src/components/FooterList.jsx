import React from 'react';

export const FooterList = (data) => {
	
	data = data.data;

	return (
		<>
			{data.map((data) => (
				<ul>
					<li>
						<a href="#">
							<h3>{data.title}</h3>
						</a>
					</li>
					<li>
						<a href="#">{data.sub1}</a>
					</li>
					<li>
						<a href="#">{data.sub2}</a>
					</li>
					<li>
						<a href="#">{data.sub3}</a>
					</li>
					<li>
						<a href="#">{data.sub4}</a>
					</li>
					<li>
						<a href="#">{data.sub5}</a>
					</li>
					<li>
						<a href="#">{data.sub6}</a>
					</li>
				</ul>
			))}
		</>
	);
}