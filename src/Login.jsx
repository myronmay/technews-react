import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const KEY = "LoginData.users";

export function Login() {

	useEffect(() => {
		const userCheck = JSON.parse(localStorage.getItem(KEY));
		if (userCheck){
			window.location = "/home";
		}
	}, []);

	const [ users, setUsers ] = useState([
		{id: 1, username: 'hello', password: 'world'}
	]);

	const auth = () => {
		let username = document.querySelector('#username').value;
		let password = document.querySelector('#password').value;
		const user = users.find( user => user.username === username && user.password === password );
		if (user){
			localStorage.setItem( KEY, JSON.stringify(user) )
			window.location = '/home';
		}else{
			console.log("false");
		}
	}

	return (
		<div className="login-box">
			<section className="login-section">
				<input id="username" type="text" placeholder="Username"/><br/>
				<input id="password" type="password" placeholder="Password"/><br/>
				<button onClick={ auth }>LogIn</button>
			</section>
		</div>
	);
}