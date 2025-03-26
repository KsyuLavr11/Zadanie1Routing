import { useState } from 'react';
import styles from '../../App.module.css';

export const ControlPanel = ({ createTodo, isLoading, isSort, setIsSort }) => {
	const [title, setTitle] = useState('');

	const handleAddTodo = () => {
		if (title.trim()) {
			createTodo(title);
		}
	};

	const handleSumbit = (event) => {
		event.preventDefault();
		if (title.trim()) {
			createTodo({ title });
			setTitle('');
		}
	};

	return (
		<>
			{isLoading && <div className={styles.loader}>Загрузка...</div>}
			<form onSubmit={handleSumbit}>
				<div className={styles['add-todo-container']}>
					<input
						className={styles.input}
						type="text"
						name="text"
						value={title}
						placeholder="Ведите название дела"
						onChange={(event) => setTitle(event.target.value)}
					/>
					<button
						disabled={isLoading}
						onClick={handleAddTodo}
						className={styles.button}
					>
						🖌 Добавить дело
					</button>
				</div>
			</form>
			<div>
				<button
					className={styles['sort-button']}
					onClick={() => setIsSort(!isSort)}
				>
					{!isSort ? '✖ Отмена сортировки' : '✔ Сортировать по алфавиту'}
				</button>
			</div>
		</>
	);
};
