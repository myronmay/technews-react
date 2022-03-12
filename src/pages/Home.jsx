import React, { useState } from 'react';
import { Nav } from '../components/Nav';
import { Showcase } from '../components/Showcase';
import { NewsCard } from '../components/NewsCard';
import { Banner } from '../components/Banner';
import { Social } from '../components/Social';
import { Footer } from '../components/Footer';
import { Copyright } from '../components/Copyright';
import img1 from '../img/news1.jpg';
import img2 from '../img/news2.jpg';
import img3 from '../img/news3.jpg';
import img4 from '../img/news4.jpg';

export function Home() {

	const openMenu = () => (
		document.querySelector('.nav-menu').classList.toggle('show')
	);

	const [ newsOne, setNewsOne ] = useState([
		{id: 1, img: img1, title: 'Lorem, ipsum dolor.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum itaue eaque corporis nostrum, eligendi illo quam et aut quis impedit.'},
		{id: 2, img: img2, title: 'Lorem, ipsum dolor.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum itaue eaque corporis nostrum, eligendi illo quam et aut quis impedit.'},
		{id: 3, img: img3, title: 'Lorem, ipsum dolor.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum itaue eaque corporis nostrum, eligendi illo quam et aut quis impedit.'},
		{id: 4, img: img4, title: 'Lorem, ipsum dolor.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum itaue eaque corporis nostrum, eligendi illo quam et aut quis impedit.'},

	]);

	const [ bannerOne, setBannerOne ] = useState([
		{id: 1, title: 'Lorem, ipsum dolor.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed libero ac turpis mattis aliquet sed hendrerit eros. Maecenas vehicula.'},
	]);

	const [ bannerTwo, setBannerTwo ] = useState([
		{id: 2, title: 'Lorem, ipsum dolor.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed libero ac turpis mattis aliquet sed hendrerit eros. Maecenas vehicula.'},
	]);

	return (
		<>
			<div className="menu-btn" onClick={openMenu}>
				<i className="fas fa-bars fa-2x"></i>
			</div>
			<div className="container">
				<Nav />
				<hr/>
				<Showcase />
				<NewsCard data={newsOne} />
				<Banner data={bannerOne} />
				<NewsCard data={newsOne} />
				<Banner data={bannerTwo} />
				<Social />
			</div>
			<div className="footer-links">
				<Footer />
			</div>
			<footer className="footer">
				<Copyright />
			</footer>
		</>
	);
}