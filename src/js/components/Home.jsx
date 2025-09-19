import React, { useState } from "react";


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>todos</h1>
			<ul className="card shadow">
				<li className="border border-light-subtle px-5">
					<input type="text"
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="What do you need to do?"
						value={inputValue}
						onKeyUp={(e) => {
							console.log(e.key);
							if (e.key === "Enter") {
								console.log("enter was pressed");
								if (inputValue.trim() === "") return;
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
					></input>
				</li>
				{todos.map((item, index) => (
					<li key={index} className="tarea d-flex justify-content-between border border-light-subtle px-5">
						{item}
						<span className="xdelay"><i className="fa-solid fa-xmark"
							onClick={() =>
								setTodos(
									todos.filter(
										(t, currentIndex) =>
											index != currentIndex
									)
								)
							}></i></span>
					</li>
				))}

			</ul>

			<div>{todos.length == 0 ? "No hay tareas, añadir tareas" : todos.length + " tareas por hacer"}
			</div>
		</div>


	);
};

export default Home;