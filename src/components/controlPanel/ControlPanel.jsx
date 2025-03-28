import { useState } from 'react';
import styles from '../../App.module.css';

export const ControlPanel = ({ createTodo, isLoading, isSort, setIsSort }) => {
	const [title, setTitle] = useState('');
	const [completed, setCompleted] = useState(false);

	const handleAddTodo = () => {
		if (title.trim()) {
			createTodo({ title, completed });
			setTitle('');
		}
	};

	const handleSumbit = (event) => {
		event.preventDefault();
		handleAddTodo();
	};

	const handlerCheckbox = (event) => {
		setCompleted(event.target.checked);
	};

	return (
		<>
			{isLoading && <div className={styles.loader}>Загрузка...</div>}
			<form onSubmit={handleSumbit}>
				<div className={styles['add-todo-container']}>
					<input
						className={styles['input-control-panel']}
						type="text"
						name="text"
						value={title}
						placeholder="Ведите название дела"
						onChange={(event) => setTitle(event.target.value)}
					/>
					<input
						className={styles['checkbox-CP']}
						type="checkbox"
						checked={completed}
						onChange={handlerCheckbox}
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
