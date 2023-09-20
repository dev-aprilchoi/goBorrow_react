import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SliderPage from "./pages/main";
import IndexPage from "./pages";

const router = createBrowserRouter(
  [
    { path: '/', element: <SliderPage /> },
    { path: '/aa', element: <IndexPage /> },
    //경로 컴포넌 추가
  ]
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
