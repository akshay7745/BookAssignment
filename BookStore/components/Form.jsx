import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BookForm({ bookData, handleChange: changeHandler, submitHandler }) {
  const {
    author,
    description,
    id,
    imageUrl,
    info,
    publishedDate,
    publisher,
    title,
  } = bookData;
  return (
    <Form onSubmit={submitHandler} className="p">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Author</Form.Label> */}
        <Form.Control
          type="text"
          name="author"
          value={author}
          placeholder="Author Name"
          onChange={changeHandler}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        {/* <Form.Label>Description</Form.Label> */}
        <Form.Control
          value={description}
          type="text"
          placeholder="Description"
          name="description"
          onChange={changeHandler}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
        {/* <Form.Label>Enter imageurl</Form.Label> */}
        <Form.Control
          name="imageUrl"
          value={imageUrl}
          type="text"
          placeholder="Enter image link"
          onChange={changeHandler}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="info">
        {/* <Form.Label>Book info</Form.Label> */}
        <Form.Control
          name="info"
          value={info}
          type="text"
          placeholder="Enter book info"
          onChange={changeHandler}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="publisher">
        {/* <Form.Label>Publisher</Form.Label> */}
        <Form.Control
          value={publisher}
          type="text"
          name="publisher"
          placeholder="Enter publisher"
          onChange={changeHandler}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        {/* <Form.Label>Title</Form.Label> */}
        <Form.Control
          type="text"
          name="title"
          value={title}
          placeholder="Enter title"
          onChange={changeHandler}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        {/* <Form.Label>Date</Form.Label> */}
        <Form.Control
          type="date"
          name="publishedDate"
          value={publishedDate}
          placeholder="Enter Date"
          onChange={changeHandler}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BookForm;
