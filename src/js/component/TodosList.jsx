import React, { useState } from "react";

export const TodosList = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?"
					/>
				</li>
				{todos.map((item, index) => (
					<li key={index}>
						{item}{" "}
						<i
							className="fas fa-trash-alt"
							onClick={() =>
								setTodos(todos.filter((t, currentIndex) => index !== currentIndex))
							}
						></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};


