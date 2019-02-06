import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			navBar: ['SERVICES', 'PORTFOLIO', 'ABOUT', 'TEAM', 'CONTACT'],
			secretMenu: false
		};
	}

	showMenu = () => {
		this.setState({ secretMenu: !this.state.secretMenu });
	};

	render() {
		let bar = this.state.navBar.map((info, i) => {
			return (
				<li key={i}>
					{info}
				</li>
			);
		});
		return (
			<div className="App">
				<nav>
					<h4>Start BootStrap</h4>
					<ul className="mainMenu">{bar}</ul>
					<button className="secretMenu" onClick={this.showMenu}>
						Menu
						<div className="menulineup">
							{this.state.secretMenu &&
								<ul className="hiddenMenu">
									{bar}
								</ul>}
						</div>
					</button>/>
				</nav>
				<div className="background_image">
					<h1 className="headline">Welcome To Our Studio!</h1>
					<h1 className="secondline">IT'S NICE TO MEET YOU</h1>
				</div>
			</div>
		);
	}
}

export default App;
