import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
	render() {
		return (
			<>
				<div id='index-banner' className='parallax-container'>
					<div className='section no-pad-bot'>
						<div className='container'>
							<br />
							<br />
							<h1 className='header center'>Carbon</h1>
							<div className='row center'>
								<h5 className='header col s12 light'>
									Helping people prevent food waste by suggesting recipe ideas
									on expiring groceries!
								</h5>
							</div>
							<div className='row center'>
								<Link
									to='/grocery'
									id='download-button'
									className='btn-large waves-effect waves-light green accent-2'>
									Get Started
								</Link>
							</div>
							<br />
							<br />
						</div>
					</div>
					<div className='parallax'>
						{/* <img src={img6} alt='Unsplashed background img 1' /> */}
					</div>
				</div>

				<div className='container'>
					<div className='section'>
						<div className='row'>
							<div className='col s12 m4'>
								<div className='icon-block'>
									<h2 className='center green-text text-accent-2'>
										<i class='fas fa-apple-alt'></i>
									</h2>
									<h5 className='center'>Do you know...?</h5>

									<p className='light'>
										The average Canadian household wastes about $1770 each year
										on preventable food waste.
									</p>
								</div>
							</div>

							<div className='col s12 m4'>
								<div className='icon-block'>
									<h2 className='center green-text text-accent-2'>
										<i class='fas fa-carrot'></i>
									</h2>
									<h5 className='center'>What do we do...?</h5>

									<p className='light'>
										We help you cut down on food waste by reminding you when
										your groceries are about to expire and give you recipe
										inspiration for it.
									</p>
								</div>
							</div>

							<div className='col s12 m4'>
								<div className='icon-block'>
									<h2 className='center green-text text-accent-2'>
										<i class='fas fa-lemon'></i>
									</h2>
									<h5 className='center'>What are you waiting for?</h5>

									<p className='light'>
										Get started by logging what you have in your fridge!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='parallax-container valign-wrapper'>
					<div className='section no-pad-bot'>
						<div className='container'>
							<div className='row center'>
								<h5 className='header col s12 light'></h5>
							</div>
						</div>
					</div>
					<div className='parallax'>
						{/* <img src={img3} alt='Unsplashed background img 2' /> */}
					</div>
				</div>

				<div className='container'>
					<div className='section'>
						<div className='row'>
							<div className='col s12 center'>
								<h3>
									<i class='fas fa-leaf'></i>
								</h3>
								<h4></h4>
								<p className='left-align light'>
									Being mindful about what you already have,when it is about to
									expire, and what to do with it is a good place to start in
									preventing food waste. Join{" "}
									<span className='logo-text'>Carbon</span> and minimize your
									food waste!
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
