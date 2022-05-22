import React from "react";
// .char {
// 	border-bottom: 3px solid #2980b9;
// 	display: inline-flex;
// 	font-size: 30px;
// 	align-items: center;
// 	justify-content: center;
// 	margin: 0 5px;
// 	height: 50px;
// 	width: 20px;
//   }
const Letters = (props) => {
	return (
		<div className="mb-10 text-center">
			{props.chosenWord.split("").map((char, index) => {
				return (
					<span className="border-b-2 border-b-teal-400 w-20 h-10 inline-flex mr-4 justify-center" key={index}>
						{props.correctChar.includes(char) ? char : ""}
					</span>
				);
			})}
		</div>
	);
};

export default Letters;
