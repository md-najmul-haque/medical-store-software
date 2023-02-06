import { createBrowserRouter } from "react-router-dom";
import AddCategory from "../components/Category/AddCategory";
import AddSupplier from "../components/Supplier/AddSupplier";
import CategoryList from "../components/Category/CategoryList";
import Dashboard from "../components/Dashboard";
import SupplierList from "../components/Supplier/SupplierList";
import Main from "../Layouts/Main";
import MedicineList from "../components/Medicine/MedicineList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <MedicineList />
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