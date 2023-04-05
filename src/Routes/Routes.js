import { createBrowserRouter } from "react-router-dom";
import CategoryList from "../components/Category/CategoryList";
import Main from "../Layouts/Main";
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
import Login from "../components/Authentication/Login";
import Registration from "../components/Authentication/Registration";
import RequireAuth from "../hooks/requireAuth";
import User from "../components/User/User";
import Suppliers from "../components/Supplier/Suppliers";
import Medicines from "../components/Medicine/Medicines";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [

            {
                path: "/",
                element: <Login />
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: "/salesBill",
                element: <SalesBill />
            }

        ]
    },

    {
        path: '/dashboard',
        element: <RequireAuth><DashboardLayout /></RequireAuth>,
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
                path: '/dashboard/medicines',
                element: <Medicines />
            },
            {
                path: '/dashboard/categoryList',
                element: <CategoryList />
            },
            {
                path: '/dashboard/suppliers',
                element: <Suppliers />
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

            },
            {
                path: '/dashboard/user',
                element: <User />

            }


        ]
    },
    {
        path: "*",
        element: <NotFound />
    },

])

export default router;