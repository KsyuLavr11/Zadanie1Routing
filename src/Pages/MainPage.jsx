import { ControlPanel } from '../components/controlPanel/ControlPanel.jsx';
import { SearchDebounce } from '../components/Search/Search.jsx';
import { TodoList } from '../components/TodoList/TodoList.jsx';
import { useTodos } from '../hooks/useTodos.jsx';
import styles from '../App.module.css';

export const MainPage = () => {
	const {
		todos,
		isLoading,
		error,
		createTodo,
		updateTodo,
		deleteTodo,
		setIsSort,
		setSearchTerm,
		isSort,
	} = useTodos([]);

	const handleSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	if (isLoading) return <div className={styles.loader}>Загрузка...</div>;
	if (error) return <div className={styles.error}>Ошибка{error.message}</div>;

	return (
		<div className="app">
			<h4>Список дел</h4>
			<SearchDebounce onChange={handleSearch} />
			<ControlPanel
				createTodo={createTodo}
				isLoading={isLoading}
				isSort={isSort}
				setIsSort={setIsSort}
				setSearchTerm={setSearchTerm}
			/>
			<TodoList
				todos={todos}
				updateTodo={updateTodo}
				deleteTodo={deleteTodo}
				isLoading={isLoading}
			/>
		</div>
	);
};
