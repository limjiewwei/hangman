import React from "react";
const Letters = (props) => {
	return (
		<div className="mb-10 text-center">
			{props.chosenWord.split("").map((char, index) => {
				return (
					<span className="border-b-2 border-b-teal-400 w-10 h-10 inline-flex mr-4 justify-center" key={index}>
						{props.correctChar.includes(char) ? char : ""}
					</span>
				);
			})}
		</div>
	);
};

export default Letters;
