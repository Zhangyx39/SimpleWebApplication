// App.jsx
import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
import HeaderBackgroundImage from '../images/header.jpg';

require('../css/fullstack.css');
var $ = require('jquery');

export default class App extends React.Component {
	render () {
		return (
			<PageHeader>
				<div className='header-contents'>
					{this.addHeaderImg()}
					<Hello name='Tommy' />
				</div>
			</PageHeader>
		);
	}

	addHeaderImg() {
		let headerBg = new Image();
		headerBg.src = HeaderBackgroundImage;
	}
}