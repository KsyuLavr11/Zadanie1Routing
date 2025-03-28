import { Link } from 'react-router-dom';
import styles from '../App.module.css';

export const NotFound = () => {
	return (
		<div className={styles['error-conteiner']}>
			<div className={styles['error-text']}>
				<h1>404</h1>
				<p>Страница не найдена</p>
				<Link to="/">
					<span className={styles['button-error']}>Вернуться на главную</span>
				</Link>
			</div>
		</div>
	);
};
