import React, { useState } from 'react';
import { FooterList } from './FooterList';

export function Footer() {

	const [ footerL, setFooterL ] = useState([
		{id: 1, title: 'Title One', sub1: "Blockchain", sub2: "Blockchain", sub3: "Blockchain", sub4: "Blockchain", sub5: "Blockchain", sub6: "Blockchain"},
		{id: 1, title: 'Title Two', sub1: "Blockchain", sub2: "Blockchain", sub3: "Blockchain", sub4: "Blockchain", sub5: "Blockchain", sub6: "Blockchain"},
		{id: 1, title: 'Title Three', sub1: "Blockchain", sub2: "Blockchain", sub3: "Blockchain", sub4: "Blockchain", sub5: "Blockchain", sub6: "Blockchain"},
		{id: 1, title: 'Title Four', sub1: "Blockchain", sub2: "Blockchain", sub3: "Blockchain", sub4: "Blockchain", sub5: "Blockchain", sub6: "Blockchain"},
	]);

	return (
		<div className="footer-container">
			<FooterList data={footerL} />
		</div>
	);
}