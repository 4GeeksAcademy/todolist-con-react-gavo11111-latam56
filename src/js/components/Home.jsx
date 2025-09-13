import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<>
			<div className="container">
				<h1>My Todos</h1>
				<ul>
					<li>
						<input type="text"
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="What do you need to do?"
							value={inputValue}
							onKeyUp={(e) => {
								console.log("key was pressed", e.key);
								if (e.key === "Enter") {
									console.log("enter was pressed");
									setTodos(todos.concat(inputValue));
									//:	null
								}
							}}
						></input>
					</li>
					<li>Make the bed</li>
					<li>Walk the dog</li>
					<li>Pay taxes</li>
					<li>Go on vacation</li>
				</ul>
			</div>
			<div>23 tasks</div>
		</>

	);
};

export default Home;