import {RouterProvider, createBrowserRouter} from "react-router-dom";
import SliderPage from "./pages/main";

const router = createBrowserRouter(
  [
    {path:'/' , element : <SliderPage/>},
    //경로 컴포넌 추가
  ]
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
