import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Figure, Modal, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Form, Link, useNavigate } from "react-router-dom";
import ModalPopup from "./Modal";

function BookStore() {
  const [bookData, setBookData] = useState([]);
  const [show, setShow] = useState(false);
  const [popupData, setPopupData] = useState({
    id: "",
    author: "",
    description: "",
    imageUrl: "",
    info: "",
    publishedDate: "",
    publisher: "",
    title: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (popupData.id) {
      editBook(popupData);
    } else {
      createBook(popupData);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setPopupData((prevData) => {
      console.log(prevData);
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    getBooksData(
      "https://bookallocation-a3133-default-rtdb.asia-southeast1.firebasedatabase.app/books.json"
    );
  }, []);

  const editBook = async (data) => {
    try {
      const res = await axios.put(
        `https://bookallocation-a3133-default-rtdb.asia-southeast1.firebasedatabase.app/books/${data.id}.json`,
        data
      );
      if (res.statusText === "OK") {
        console.log("Res after editing", res);
        setPopupData({
          id: "",
          author: "",
          description: "",
          imageUrl: "",
          info: "",
          publishedDate: "",
          publisher: "",
          title: "",
        });

        const updatedBook = bookData.map((book) => {
          if (data.id === book.id) {
            return data;
          }
          return book;
        });
        setBookData(updatedBook);
        handleClose();
      }
    } catch (error) {
      console.log(error, "Something went wrong white editing the expense");
    }
  };
  async function getBooksData(url) {
    const { data } = await axios(url);
    const keys = Object.keys(data);
    let values = Object.values(data);

    values.map((data, i) => {
      data.id = keys[i];
      return data;
    });

    setBookData(values);
  }
  const createBook = async (data) => {
    data.id = Math.random();
    data.imageUrl =
      "https://cdn.pixabay.com/photo/2017/06/01/16/42/book-2363912_1280.jpg";
    try {
      const res = await axios({
        method: "post",
        url: `https://bookallocation-a3133-default-rtdb.asia-southeast1.firebasedatabase.app/books.json`,
        data: data,
      });
      if (res.statusText === "OK") {
        setBookData((prevState) => {
          return [...prevState, { ...data, id: res.data.name }];
        });
        setPopupData({
          id: "",
          author: "",
          description: "",
          imageUrl: "",
          info: "",
          publishedDate: "",
          publisher: "",
          title: "",
        });
        handleClose();
      }
    } catch (error) {
      console.log(error, "Something went wrong while creating book");
    }
  };
  const handleDelete = (id) => {
    axios
      .delete(
        `https://bookallocation-a3133-default-rtdb.asia-southeast1.firebasedatabase.app/books/${id}.json`
      )
      .then((res) => {
        const newBookData = bookData.filter((data) => data.id !== id);
        setBookData(newBookData);
      });
  };
  return (
    <Container className="">
      <Row
        style={{ height: "900px" }}
        className=" overflow-y-scroll justify-content-center g-5"
      >
        <Col>
          <Table responsive={"md"} bordered striped className=" caption-top">
            <caption className="text-center fs-1 text-dark">
              List of Books
            </caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Book Summary</th>
                <th onClick={handleShow}>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookData.map((book, i) => {
                const { author, info, imageUrl, id, title } = book;
                return (
                  <tr key={id}>
                    <td>{i + 1}</td>
                    <td>
                      <strong>
                        <Link to={`/${id}`}>{title}</Link>
                      </strong>
                    </td>
                    <td>
                      <Link to={`/${id}`}>{author}</Link>
                    </td>
                    <td>
                      <Link to={`/${id}`}>{info}</Link>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          setPopupData(book);
                          handleShow();
                        }}
                        variant="success"
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="position-fixed top-0 end-50" onClick={handleShow}>
            Create Book
          </Button>
        </Col>
      </Row>
      <ModalPopup
        bookData={popupData}
        handleClose={handleClose}
        handleChange={changeHandler}
        show={show}
        submitHandler={submitHandler}
      />
    </Container>
  );
}

export default BookStore;
