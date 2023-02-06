import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import AddCategory from "../components/AddCategory";
import AddSupplier from "../components/AddSupplier";
import CategoryList from "../components/CategoryList";
import Dashboard from "../components/Dashboard";
import SupplierList from "../components/SupplierList";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/supplierList",
                element: <SupplierList />,
                children: [
                    {
                        path: "addSupplier",
                        element: <AddSupplier />
                    },
                ]
            },
            {
                path: "/categoryList",
                element: <CategoryList />,
                children: [
                    {
                        path: "addCategory",
                        element: <AddCategory />
                    },
                ]
            },
        ]
    },

])

export default router;