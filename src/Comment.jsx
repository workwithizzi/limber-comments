import React from "react";
import Showdown from "showdown";

function Comment(props) {
	const converter = new Showdown.Converter();
	const rawMarkup = converter.makeHtml(props.children.toString());
	return (
		<div className="comment">
			<h2 className="commentAuthor">{props.author}</h2>
			<span dangerouslySetInnerHTML={{ __html: rawMarkup }} />
		</div>
	);
}

export default Comment;
