import { Link } from 'react-router-dom';
import styles from '../App.module.css';

export const NotFound = () => {
	return (
		<div className={styles.error}>
			<h1>404</h1>
			<p>Страница не найдена</p>
			<Link to="/">
				<button className={styles.button}>Вернуться на главную</button>
			</Link>
		</div>
	);
};
