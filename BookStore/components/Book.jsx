import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Book() {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(
      `https://bookallocation-a3133-default-rtdb.asia-southeast1.firebasedatabase.app/books/${id}.json`
    ).then((res) => {
      res.data.id = id;
      setData(res.data);
    });
  }, []);

  return (
    <Container>
      <Row sm={1} className="justify-content-center">
        <Col sm={12} md={{ span: 8, offset: 2 }} off>
          <Card style={{ maxWidth: "36rem" }}>
            <Card.Img variant="top" src={data?.imageUrl} />

            <Card.Body>
              <Card.Title>Title: {data?.title}</Card.Title>
              <Card.Text>Summary : {data?.info} </Card.Text>
              <Card.Text>Description : {data?.description}</Card.Text>
              <Card.Text>
                <strong>Author : {data?.author}</strong>
              </Card.Text>
              <Card.Text>Publication Year : {data?.publishedDate}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Book;
