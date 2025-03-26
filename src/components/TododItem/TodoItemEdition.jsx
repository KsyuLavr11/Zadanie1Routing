import { useState } from 'react';

import styles from '../../App.module.css';

export const TodoItemEdition = ({ todo, deleteTodo, updateTodo }) => {
	const [isEditing, seIsEditing] = useState(false);
	const [editTitle, setEditTitle] = useState(todo.title);

	const handleSaveEdit = () => {
		updateTodo(editTitle, todo.id);
		seIsEditing(false);
	};

	return (
		<>
			{isEditing ? (
				<>
					<input
						className={styles.input}
						type="text"
						value={editTitle}
						onChange={(e) => setEditTitle(e.target.value)}
					/>
					<button
						className={styles['button-todos-cancel']}
						onClick={() => seIsEditing(false)}
					>
						🛇 Отменить
					</button>

					<button
						className={styles['button-todos-save']}
						onClick={handleSaveEdit}
					>
						🔒 Сохранить
					</button>
				</>
			) : (
				<>
					{todo.title}
					<button
						onClick={() => deleteTodo(todo.id)}
						className={styles['button-todos-delete']}
					>
						🗑️ Удалить дело
					</button>

					<button
						onClick={() => seIsEditing(true)}
						className={styles['button-todos']}
					>
						✍ Изменить дело
					</button>
				</>
			)}
		</>
	);
};
