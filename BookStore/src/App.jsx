import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
