import React from "react";

const Stickman = (props) => {
	let numErrors = props.wrongChar.length;
	return (
		<div>
			<svg height="250" width="200" className="stroke-[4px] stroke-white fill-transparent mx-auto">
				{/* <!-- Rod --> */}
				<line x1="60" y1="20" x2="140" y2="20" />
				<line x1="140" y1="20" x2="140" y2="50" />
				<line x1="60" y1="20" x2="60" y2="230" />
				<line x1="20" y1="230" x2="100" y2="230" />

				{/* <!-- Head --> */}
				{numErrors > 0 && <circle cx="140" cy="70" r="20" />}

				{/* <!-- Body --> */}
				{numErrors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}

				{/* <!-- Arms --> */}
				{numErrors > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
				{numErrors > 3 && <line x1="140" y1="120" x2="160" y2="100" />}

				{/* <!-- Legs --> */}
				{numErrors > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
				{numErrors > 5 && <line x1="140" y1="150" x2="160" y2="180" />}
			</svg>
		</div>
	);
};

export default Stickman;
