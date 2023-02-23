import { createBrowserRouter } from "react-router-dom";
import AddCategory from "../components/Category/AddCategory";
import CategoryList from "../components/Category/CategoryList";
import SupplierList from "../components/Supplier/SupplierList";
import Main from "../Layouts/Main";
import MedicineList from "../components/Medicine/MedicineList";
import SalesBill from "../components/SalesBill/SalesBill";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import PurchaseBill from "../components/PurchaseBill";
import Dashboard from "../components/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [

            {
                path: "/salesBill",
                element: <SalesBill />
            },
            {
                path: '/medicineList',
                element: <MedicineList />
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
                path: '/dashboard/account',
                element: <Dashboard />
            },
            {
                path: '/dashboard/purchaseBill',
                element: <PurchaseBill />
            },
            {
                path: '/dashboard/medicineList',
                element: <MedicineList />
            },
            {
                path: '/dashboard/categoryList',
                element: <CategoryList />
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