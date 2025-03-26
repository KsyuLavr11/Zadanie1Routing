export const filterTodos = (todos, searchValue) => {
	return todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchValue.toLowerCase()),
	);
};
