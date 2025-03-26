import { useNavigate, useParams } from 'react-router-dom';
import { TodoItemEdition } from '../components/TododItem/TodoItemEdition.jsx';
import { useTodos } from '../hooks/useTodos.jsx';
import { useEffect, useState } from 'react';
import styles from '../App.module.css';

export const TaskPage = () => {
	const { id } = useParams();
	const { todos, updateTodo, deleteTodo } = useTodos();

	const [foundTodo, setFoundTodo] = useState(null);

	const navigate = useNavigate();

	const getTodoById = (id) => {
		return todos.find((todo) => todo.id === id);
	};

	useEffect(() => {
		const foundTodoId = getTodoById(id);
		setFoundTodo(foundTodoId);
	}, [todos, id]);

	if (!foundTodo) {
		return (
			<div>
				<h3>
					Задача не найдена или удалена, до перехода на главную страницу
					подождите 5 секунд...
				</h3>
			</div>
		);
	}

	const handleBackClick = () => {
		navigate(-1);
	};

	return (
		<div className={styles['task-page-container']}>
			<h3>Выбранная задача:</h3>
			<TodoItemEdition
				todo={foundTodo}
				updateTodo={updateTodo}
				deleteTodo={deleteTodo}
			/>
			<div>
				<button onClick={handleBackClick} className={styles['button-back']}>
					◄ Назад
				</button>
			</div>
		</div>
	);
};
