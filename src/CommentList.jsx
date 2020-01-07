import React from "react";
import Comment from "./Comment";

function CommentList(props) {
	const commentNodes = props.data.map(comment => (
		<Comment key={comment.id} date={comment.date} author={comment.author}>
			{comment.text}
		</Comment>
	));
	return <div>{commentNodes}</div>;
}

export default CommentList;
