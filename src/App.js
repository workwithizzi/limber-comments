import React from "react";
import "./App.css";
import CommentBox from "./CommentBox";

function App() {
	return (
		<div className="App">
			<CommentBox
				url="http://localhost:8000/api/comments"
				pollInterval={5000}
			/>
		</div>
	);
}

export default App;
