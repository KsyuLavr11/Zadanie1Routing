import styles from '../../App.module.css';
import { NavLink } from 'react-router-dom';

export const TodoList = ({ todos }) => {
	const truncateText = (text, maxLength) => {
		if (!text) {
			return '';
		}
		return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
	};

	return (
		<div className={styles['todo-list-container']}>
			{todos.map(({ id, title }) => (
				<li key={id} className={styles['todo-item']}>
					<NavLink to={`/task/${id}`}>{truncateText(title, 7)}</NavLink>
				</li>
			))}
		</div>
	);
};
