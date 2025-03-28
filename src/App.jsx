import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NotFound } from './Pages/NotFound.jsx';
import { MainPage } from './Pages/MainPage.jsx';
import { TaskPage } from './Pages/TaskPage.jsx';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/task/:id" element={<TaskPage />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</>
	);
};
