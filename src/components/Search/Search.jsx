import { useEffect, useState } from 'react';
import styles from '../../App.module.css';

export const SearchDebounce = ({ onChange }) => {
	const [searchTermDebounce, setSearchTermDebounce] = useState('');

	useEffect(() => {
		const timerId = setTimeout(() => {
			onChange(searchTermDebounce);
		}, 300);
		return () => {
			clearTimeout(timerId);
		};
	}, [searchTermDebounce, onChange]);

	return (
		<div className={styles['add-todo-container-search']}>
			<input
				className={styles['input-search']}
				type="text"
				name="text"
				placeholder="Поиск дела по названию"
				value={searchTermDebounce}
				onChange={(event) => setSearchTermDebounce(event.target.value)}
			/>
		</div>
	);
};
