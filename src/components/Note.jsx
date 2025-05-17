function Note(props) {
	return (
		<div className="note">
			<h1>{props.item.title ? props.item.title : "..."}</h1>
			<p>{props.item.content ? props.item.content : "..."}</p>
			<button
				onClick={() => {
					console.log(props, props);
					props.onDelete(props.id);
				}}
			>
				DEL
			</button>
		</div>
	);
}

export default Note;
