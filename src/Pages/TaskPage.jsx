import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../App.module.css';
import { todosAPI } from '../api/todosAPI.js';

export const TaskPage = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (id === undefined) return;
		const readTodo = async () => {
			setIsLoading(true);
			try {
				const LoaderTodo = await todosAPI.getTodoById(id);
				console.log('LoaderTodo', LoaderTodo);
				if (LoaderTodo.title === undefined) {
					navigate('/404');
				}
				setTodo(LoaderTodo);
			} catch (error) {
				setError(true);
			} finally {
				setIsLoading(false);
			}
		};
		readTodo();
	}, [id, navigate]);

	const handleChangeTitle = (event) => {
		setTodo({ ...todo, title: event.target.value });
	};

	const handlerCompleted = (event) => {
		setTodo({ ...todo, completed: event.target.checked });
	};

	const handleSave = async () => {
		setIsLoading(true);
		try {
			await todosAPI.update(id, todo);
		} catch (error) {
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async () => {
		setIsLoading(true);
		try {
			await todosAPI.delete(id);
			navigate(-1);
		} catch (error) {
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) return <div className={styles.loader}>Загрузка...</div>;
	if (error) return <div className={styles.error}>Ошибка{error.message}</div>;

	return (
		<div className={styles['task-page-container']}>
			<h3>Выбранная задача:</h3>
			<div>
				<textarea
					className={styles['input-textarea']}
					value={todo.title}
					onChange={handleChangeTitle}
				></textarea>
				<div className={styles['task-page-container-IB']}>
					<input
						className={styles['checkbox-CP']}
						type="checkbox"
						checked={todo.completed}
						onChange={handlerCompleted}
					/>
					<button className={styles['button-todos-save']} onClick={handleSave}>
						🔒 Сохранить
					</button>
					<button
						onClick={handleDelete}
						className={styles['button-todos-delete']}
					>
						🗑️ Удалить дело
					</button>
				</div>
			</div>
			<div>
				<button onClick={() => navigate(-1)} className={styles['button-back']}>
					◄ Назад
				</button>
			</div>
		</div>
	);
};
