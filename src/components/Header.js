import React from "react";

const Header = (props) => {
	return (
		<div className="text-center">
			<h1>Hangman game</h1>
			<h3>Total lives left: {props.livesLeft}</h3>
		</div>
	);
};

export default Header;
