import { createBrowserRouter } from "react-router-dom";
import AddCategory from "../components/Category/AddCategory";
import CategoryList from "../components/Category/CategoryList";
import SupplierList from "../components/Supplier/SupplierList";
import Main from "../Layouts/Main";
import MedicineList from "../components/Medicine/MedicineList";
import SalesBill from "../components/SalesBill/SalesBill";
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
                element: <SalesBill />
            },
            {
                path: '/dashboard/medicineList',
                element: <MedicineList />
            },
            {
                path: '/dashboard/categoryList',
                element: <MedicineList />
            },
            {
                path: '/dashboard/supplierList',
                element: <CategoryList />
            },
            {
                path: '/dashboard/salesBill',
                element: <SalesBill />

            }

        ]
    }

])

export default router;