import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";
import { Link } from "react-router-dom";

function NoteForm() {
	return (
		<Form>
			<Stack gap={4}>
				<Row>
					<Col>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control required type="text" placeholder="Enter title" />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="tags">
							<Form.Label>Tags</Form.Label>
							<Creatable isMulti />
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
					/>
				</Form.Group>
                <Stack direction="horizontal" gap={3} className="justify-content-end">
                    <Button type="submit" variant="outline-primary">Save</Button>
                    <Button as={Link} to=".." variant="outline-secondary">Cancel</Button>
                </Stack>
			</Stack>
		</Form>
	);
}
export default NoteForm;
