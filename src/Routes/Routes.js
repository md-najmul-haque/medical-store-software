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
import Reports from "../components/Dashboard/Reports";
import StockInfo from "../components/Stock/StockInfo";
import NotFound from "../components/NotFound/NotFound";
import PaymentToVendor from "../components/Payment/PaymentToVendor";
import ItemForm from "../components/ItemForm";
import StockReport from "../components/Reports/StockReport";
import DatewiseReport from "../components/Reports/DatewiseReport";

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

            },
            {
                path: '/dashboard/paymentToVendor',
                element: <PaymentToVendor />

            },
            {
                path: '/dashboard/stockInfo',
                element: <StockInfo />

            },
            {
                path: '/dashboard/ItemForm',
                element: <ItemForm />

            },
            {
                path: '/dashboard/stockReport',
                element: <StockReport />

            },
            {
                path: '/dashboard/datewiseReport',
                element: <DatewiseReport />

            }


        ]
    },
    {
        path: "*",
        element: <NotFound />
    },

])

export default router;