import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import BookStore from "../components/BookStore";
import Book from "../components/Book";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookStore />,
      },
      { path: "/:id", element: <Book /> },
    ],
  },
]);

export default AppRouter;
