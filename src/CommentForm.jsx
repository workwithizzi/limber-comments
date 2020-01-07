import React, { useState } from "react";

function CommentForm(props) {
	const [comment, setComment] = useState({});

	function handleChange(event) {
		const value = event.target.name;
		setComment({ ...comment, [value]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!comment.text || !comment.author) {
			return;
		}
		props.onCommentSubmit(comment);
		return;
	}

	return (
		<div
			style={{
				display: "inline-block",
				width: "40rem",
				margin: "0 0 20px 0",
				backgroundColor: "#222"
			}}
		>
			<h2>Add a Comment</h2>
			<form className="c-comment__form" onSubmit={event => handleSubmit(event)}>
				<input
					type="text"
					placeholder="Your name"
					name="author"
					onChange={event => handleChange(event)}
					className="form-input"
				/>
				<input
					type="text"
					placeholder="Say something..."
					name="text"
					onChange={event => handleChange(event)}
					className="form-input"
				/>
				<input type="submit" value="Add Comment" className="form-btn" />
			</form>
		</div>
	);
}

export default CommentForm;
