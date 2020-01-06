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
		<form className="commentForm" onSubmit={event => handleSubmit(event)}>
			<input
				type="text"
				placeholder="Your name"
				name="author"
				onChange={event => handleChange(event)}
			/>
			<input
				type="text"
				placeholder="Say something..."
				name="text"
				onChange={event => handleChange(event)}
			/>
			<input type="submit" value="Post" />
		</form>
	);
}

export default CommentForm;
