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
								console.log(e.key);
								if (e.key === "Enter") {
									console.log("enter was pressed");
									setTodos(todos.concat(inputValue));
									setInputValue("");
								}
							}}
						></input>
					</li>
					{todos.map((item, index) => (
						<li>
							{item} {""}
							onClick={() =>
								setTodos(
									todos.filter(
										(t, currentIndex) =>
											index != currentIndex
									)
								)
							}
						</li>
					))}

				</ul>

				<div>{todos.length} tasks</div>
			</div>
		</>

	);
};

export default Home;