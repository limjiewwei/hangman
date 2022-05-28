import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Stickman from "./components/Stickman";
import Word from "./components/Word";
import Swal from "sweetalert2";
import "animate.css";

function App() {
	const [chosenCategory, setChosenCategory] = useState("");
	const [chosenWord, setChosenWord] = useState("");
	const [correctChar, setCorrectChar] = useState([]);
	const [wrongChar, setWrongChar] = useState([]);
	const [livesLeft, setLivesLeft] = useState(6);

	useEffect(() => {
		const [generatedWord, generatedCategory] = generateWord();
		setChosenWord(generatedWord);
		setChosenCategory(generatedCategory);
	}, []);

	useEffect(() => {
		let status = "win";
		chosenWord.split("").forEach((char) => {
			if (!correctChar.includes(char)) status = "";
		});
		if (status === "win" && chosenWord.length > 0) {
			Swal.fire({
				title: "You won the game!",
				text: `You guessed the word ${generateWord}`,
				confirmButtonText: "Play again",
				showClass: {
					popup: "animate__animated animate__fadeInDown",
				},
				hideClass: {
					popup: "animate__animated animate__fadeOutUp",
				},
			}).then(() => {
				restartGame();
			});
		}
	}, [correctChar]);

	useEffect(() => {
		if (livesLeft === 0) {
			Swal.fire({
				title: "You lost the game!",
				text: `The word was: ${generateWord}`,
				confirmButtonText: "Play again",
				showClass: {
					popup: "animate__animated animate__fadeInDown",
				},
				hideClass: {
					popup: "animate__animated animate__fadeOutUp",
				},
			}).then(() => {
				restartGame();
			});
		}
	}, [livesLeft]);

	function generateWord() {
		const categories = ["programming", "animal"];
		let chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		let chosenWord;
		if (chosenCategory === "programming") {
			let words = ["ruby", "python", "javascript", "java", "kotlin", "php"];
			chosenWord = words[Math.floor(Math.random() * words.length)];
		} else {
			let words = ["cat", "dog", "rhinoceros", "panda", "tiger", "lion"];
			chosenWord = words[Math.floor(Math.random() * words.length)];
		}
		return [chosenWord, chosenCategory];
	}

	function restartGame() {
		setCorrectChar([]);
		setWrongChar([]);
		setLivesLeft(6);
		const [generatedWord, generatedCategory] = generateWord();
		setChosenWord(generatedWord);
		setChosenCategory(generatedCategory);
	}

	function submitChar(char) {
		if (chosenWord.includes(char)) {
			setCorrectChar([...correctChar, char]);
		} else {
			setWrongChar([...wrongChar, char]);
			setLivesLeft(livesLeft - 1);
		}
	}

	function charClicked(char) {
		if (correctChar.includes(char) || wrongChar.includes(char)) return true;
		return false;
	}

	return (
		<div className="App">
			<Header livesLeft={livesLeft} />
			<Stickman wrongChar={wrongChar} />
			<p className="text-center">Guess the hidden word related to {chosenCategory}</p>
			<Word chosenWord={chosenWord} correctChar={correctChar} />
			<div className="text-center">
				{"abcdefghijklmnopqrstuvwxyz".split("").map((char, index) => {
					return (
						<button
							className="bg-blue-300 mx-2 md:mx-4 p-2 md:p-4 mb-2 md:mb-4 text-[14px] md:text-[16px] text-black font-semibold disabled:opacity-20"
							value={char}
							key={index}
							disabled={charClicked(char)}
							onClick={(e) => submitChar(e.target.value)}>
							{char}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default App;
