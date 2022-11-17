import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<Container className="my-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new" element={<NewNote />} />
				<Route path="/:id">
					<Route index element={<Show />} />
					<Route path="edit" element={<Edit />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Container>
	);
}

export default App;
