import logo from './logo.svg';
import './App.css';
import ItemForm from './components/ItemForm';
import AddCategory from './components/AddCategory';
import CreateSalesBill from './components/CreateSalesBill';
import AddNewPayment from './components/AddNewPayment';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layouts/Main';
import Registration from './components/Registration';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/register",
      element: <Registration />
    },
    {
      path: "/addCategory",
      element: <AddCategory />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Login /> */}
      {/* <Dashboard /> */}
      {/* <ItemForm /> */}
      {/* <CategoryDetails /> */}
      {/* <CreateSalesBill /> */}
      {/* <AddNewPayment /> */}
    </div>
  );
}

export default App;
