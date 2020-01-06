import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function CommentBox(props) {
	const [data, setData] = useState([]);

	async function fetchData(url) {
		try {
			const response = await fetch(url);
			if (response.ok) {
				let json = await response.json();
				setData(json);
			} else {
				console.log(response.status);
			}
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		fetchData(props.url);
		const intervalId = setInterval(() => {
			fetchData(props.url);
		}, props.pollInterval);
		return () => clearInterval(intervalId);
	}, [props.pollInterval, props.url]);

	async function handleCommentSubmit(comment) {
		try {
			let response = await fetch(props.url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8"
				},
				body: JSON.stringify(comment)
			});
			let result = await response.json();
			setData(result);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="commentBox">
			<h1>Comments</h1>
			<CommentList data={data} />
			<CommentForm onCommentSubmit={handleCommentSubmit} />
		</div>
	);
}

export default CommentBox;
