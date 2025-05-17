import React, { useState } from "react";

function CreateArea(props) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<div>
			<form>
				<input
					ref={props.titleRef}
					type="text"
					name="title"
					className=""
					placeholder="Title"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<textarea
					ref={props.contentRef}
					name="content"
					placeholder="Write a note..."
					rows="5"
					value={content}
					onChange={(e) => {
						setContent(e.target.value);
					}}
				/>

				<button
					type="button"
					onClick={() => {
						props.onAdd({ title: title, content: content });
						setTitle("");
						setContent("");
						props.titleRef.current.value = ""; // Clear input
						props.contentRef.current.value = ""; // Clear input
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;
