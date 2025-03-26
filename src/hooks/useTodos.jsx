import { useState, useEffect } from 'react';
import { todosAPI } from '../api/todosAPI';
import { filterTodos } from '../components/helpers/filterTodos';
import { sortTodos } from '../components/helpers/sortTodos';
import { useNavigate } from 'react-router-dom';

export const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [isSort, setIsSort] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		readTodos();
	}, []);

	const readTodos = async () => {
		setIsLoading(true);
		try {
			const data = await todosAPI.readALL();
			setTodos(data);
		} catch (error) {
			setError(error);
			console.log('Ошибка загрузки данных', error);
		} finally {
			setIsLoading(false);
		}
	};

	const createTodo = async (todo) => {
		setIsLoading(true);
		try {
			const createTodos = await todosAPI.create(todo);
			setTodos((prevTodos) => [...prevTodos, createTodos]);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};
	const updateTodo = async (todoId, newTitle) => {
		setIsLoading(true);

		try {
			await todosAPI.update(todoId, newTitle);
			setTodos((prevTodos) =>
				prevTodos.map((todo) =>
					todo.id === todoId ? { ...todo, title: newTitle } : todo,
				),
			);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};
	const deleteTodo = async (todoId) => {
		setIsLoading(true);
		try {
			await todosAPI.delete(todoId);
			setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
			setTimeout(() => {
				navigate(-1);
			}, 5000);
		}
	};

	const filtredTodos = searchTerm ? filterTodos(todos, searchTerm) : todos;
	const sortedTodos = isSort ? sortTodos(filtredTodos) : filtredTodos;

	return {
		todos: sortedTodos,
		isLoading,
		error,
		createTodo,
		updateTodo,
		deleteTodo,
		setSearchTerm,
		isSort,
		setIsSort,
	};
};
