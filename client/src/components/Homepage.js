import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/carbonLogo.png";

export default class Homepage extends Component {
	render() {
		return (
			<div id='homepage'>
				<div id='header'>
					<header>
						<h2>Welcome to</h2>
						<Link to='/'>
							<img id='main-logo' src={logo} />
						</Link>
						<h2>No Food Wasted</h2>
					</header>

					<p>
						Quickly find recipes to use the <br /> ingredients you already have
					</p>
				</div>
				<div class='button-div'>
					<Link class='button button1 link' to='/'>
						Create a Meal Plan
					</Link>
				</div>

				<div class='button-div'>
					<Link class='button button2 link' to='/grocery'>
						Use Previous Lists
					</Link>
				</div>

				<div class='button-div'>
					<Link class='button button3 link' to='/recipe'>
						Find a Recipe
					</Link>
				</div>
			</div>
		);
	}
}
