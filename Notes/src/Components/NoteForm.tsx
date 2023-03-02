import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";
import { Link, LinkProps } from "react-router-dom";
import { useRef, useState } from "react";
import { NoteData, Tag } from "../App";

//Takes the types defined in NoteData and NoteFormProps and uses them to define the props for the NoteForm component

type NoteFormProps = {
	onSubmit: (data: NoteData) => void;
};

// Manages the Note submission form and hooks into the text fields and tags with the useRef hook
export function NoteForm({ onSubmit }: NoteFormProps) {
	const titleRef = useRef<HTMLInputElement>(null);
	const markdownRef = useRef<HTMLTextAreaElement>(null);
	const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		onSubmit({
			title: titleRef.current!.value,
			markdown: markdownRef.current!.value,
			tags: [],
		});
	}
	return (
		<Form onSubmit={handleSubmit}>
			<Stack gap={4}>
				<Row>
					<Col>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control
								ref={titleRef}
								required
								type="text"
								placeholder="Enter title"
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="tags">
							<Form.Label>Tags</Form.Label>
							<Creatable
								value={selectedTags.map((tag) => {
									return { value: tag.id, label: tag.label };
								})}
								onChange={(tags) => {
									setSelectedTags(
										tags.map((tag) => {
											return { id: tag.value, label: tag.label };
										})
									);
								}}
								isMulti
							/>
						</Form.Group>
					</Col>
				</Row>
				<Form.Group controlId="markdown">
					<Form.Label>Body</Form.Label>
					<Form.Control
						required
						as="textarea"
						rows={15}
						placeholder="Enter Info"
						ref={markdownRef}
					/>
				</Form.Group>
				<Stack direction="horizontal" gap={3} className="justify-content-end">
					<Button type="submit" variant="outline-primary">
						Save
					</Button>
					<Button as={Link as any} to="..." variant="outline-secondary">
						Cancel
					</Button>
				</Stack>
			</Stack>
		</Form>
	);
}
export default NoteForm;
