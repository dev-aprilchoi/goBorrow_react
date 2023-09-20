import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages";

const router = createBrowserRouter(
  [
    { path: '/', element: <IndexPage /> },
    //경로 컴포넌 추가
  ]
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
