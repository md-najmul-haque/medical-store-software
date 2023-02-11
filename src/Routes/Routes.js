import { createBrowserRouter } from "react-router-dom";
import AddCategory from "../components/Category/AddCategory";
import AddSupplier from "../components/Supplier/AddSupplier";
import CategoryList from "../components/Category/CategoryList";
import Dashboard from "../components/Dashboard";
import SupplierList from "../components/Supplier/SupplierList";
import Main from "../Layouts/Main";
import MedicineList from "../components/Medicine/MedicineList";
import AddMedicine from "../components/Medicine/AddMedicine";
import SalesBill from "../components/SalesBill/SalesBill";
import DashboardMain from "../components/DashboardMain";
import DashboardLayout from "../components/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [

            {
                path: "/categoryList",
                element: <CategoryList />
            },
            {
                path: "addCategory",
                element: <AddCategory />
            }

        ]
    },

    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/supplierList',
                element: <SupplierList />
            },
            {
                path: '/dashboard/salesBill',
                element: <SalesBill />

            }

        ]
    }

])

export default router;