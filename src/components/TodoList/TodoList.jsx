import styles from '../../App.module.css';
import { NavLink } from 'react-router-dom';

export const TodoList = ({ todos }) => {
	return (
		<div className={styles['todo-list-container']}>
			{todos.map(({ id, title, completed }) => (
				<div key={id} className={styles['todo-item']}>
					<input
						className={styles.checkbox}
						type="checkbox"
						checked={completed}
						readOnly
					/>
					<NavLink to={`/task/${id}`} className={styles['text-cropping']}>
						{title}
					</NavLink>
				</div>
			))}
		</div>
	);
};
