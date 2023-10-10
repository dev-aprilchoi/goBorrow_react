import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages";
import MyPostPage from "./pages/mypost";

const router = createBrowserRouter(
  [
    { path: '/', element: <IndexPage /> },
    { path: '/mypost', element: <MyPostPage /> }
    //경로 컴포넌 추가
  ]
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
