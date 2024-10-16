import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sandbox from "../Product/Product";
import ProductDetail from "../Product/ProductDetail";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import AdminCategory from "../Admin/Category/category";
import AdminOrder from "../Admin/Order/Order";
import Login from "../User/login";
import Signup from '../User/signup';
import Logout from '../User/logout';
import OrderPage from '../Order/OrderPage';
import ChatPage from '../Chat/chatPage';
import ProductAdmin from '../Admin/Product/ProductAdmin';
import ProductOptionAdmin from '../Admin/Product/ProductOptionAdmin';
import ProductOptionEdit from '../Admin/Product/ProductOptionEdit';
import Coupon from "../Admin/Coupon/Coupon";
import ProductCreate from '../Admin/Product/ProductCreate';

function AppRouter() {
    return (
        <Routes>
            <Route path="/category/:categoryId" element={<Sandbox />} />
            <Route path="/category" element={<Sandbox />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin/category" element={<AdminCategory />} />
            <Route path="/admin/order" element={<AdminOrder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/admin/product" element={<ProductAdmin />} />
            <Route path="/admin/edit-product/:productId" element={<ProductOptionAdmin />} />
            <Route path="/admin/edit-option/:detailId" element={<ProductOptionEdit />} />
            <Route path="/admin/createProduct" element={<ProductCreate />} />
                <Route path="/coupon" element={<Coupon />} />

        </Routes>
    );
}
export default AppRouter;