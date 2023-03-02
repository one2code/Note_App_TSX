import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./Components/NewNote";
import Home from "./Components/Home";
import Show from "./Components/Show";
import Edit from "./Components/Edit";
import useLocalStorage from "./Hooks/useLocalStorage";

export type Note = {
	id: string;
} & NoteData;

export type RawNote = {
	id: string;
};

export type RawNoteData = {
	title: string;
	markdown: string;
	tags: string[];
};

export type NoteData = {
	title: string;
	markdown: string;
	tags: Tag[];
};

export type Tag = {
	id: string;
	label: string;
};

function App() {
	const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
	const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

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
