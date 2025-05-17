import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);
	const titleRef = useRef("");
	const contentRef = useRef("");

	function addNote(newNote) {
		setNotes((prevItems) => {
			return [...prevItems, newNote];
		});
	}

	const deleteNote = (indexTarget) => {
		setNotes(notes.filter((_, index) => index !== indexTarget));
		console.log(notes);
	};

	const deleteLastNote = () => {
		setNotes((prevItems) => prevItems.slice(0, -1));
		// Using setNotes to remove the last note will make it stale data. Always use prevItems to get the latest state.
	};

	useEffect(() => {
		function handleKeyDown(event) {
			console.log(event.key);
			switch (event.key) {
				case "Enter":
					if (contentRef.current && titleRef.current) {
						const title = titleRef.current.value;
						const value = contentRef.current.value;
						addNote({ title: title, content: value });
						contentRef.current.value = ""; // Clear input
						titleRef.current.value = ""; // Clear input
					}
					// TODO : contentRef and titleRef do not clear after adding note
					break;
				case "Delete":
					deleteLastNote();
					break;
				default:
					break;
			}
		}

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div>
			<Header />
			<CreateArea
				onAdd={addNote}
				titleRef={titleRef}
				contentRef={contentRef}
			/>
			{notes.map((element, index) => (
				<Note
					key={index}
					id={index}
					item={element}
					onDelete={deleteNote}
				/>
			))}
		</div>
	);
}

export default App;
