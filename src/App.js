import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes/Routes";


function App() {
  return (
    <div className=''>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
