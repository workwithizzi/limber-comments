import React from "react";
import Showdown from "showdown";
import moment from "moment";

function Comment(props) {
	const converter = new Showdown.Converter();
	const rawMarkup = converter.makeHtml(props.children.toString());
	return (
		<div className="c-comment__block">
			<div>
				<span className="comment-author">{props.author}</span>
				<span>on</span>
				<span className="comment-date">
					{moment(new Date(props.date)).format("MMM Do YYYY")}
				</span>
			</div>

			<div
				className="comment-content"
				dangerouslySetInnerHTML={{ __html: rawMarkup }}
				style={{ backgroundColor: "grey", textAlign: "left" }}
			/>
		</div>
	);
}

export default Comment;
