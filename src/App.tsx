import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/main_layout";
import ShopOrders from "./pages/shop/shop_orders";
import ShopProducts from "./pages/shop/shop_products";
import ShopDelivery from "./pages/shop/shop_delivery";
import Accounts from "./pages/accounts";
import Deposits from "./pages/Deposits";
import RedAndCredit from "./pages/red_and_credit";
import Installments from "./pages/installments";
import Messages from "./pages/messages";
import ShopLayout from "./pages/shop/layout";
import { ShopOverview } from "./pages/shop/shop_overview";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/shop" replace />} />
          <Route path="/shop" element={<ShopLayout />}>
            <Route index element={<ShopOverview />} />
            <Route path="orders" element={<ShopOrders />} />
            <Route path="delivery" element={<ShopDelivery />} />
            <Route path="products" element={<ShopProducts />} />
          </Route>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/red-and-credit" element={<RedAndCredit />} />
          <Route path="/installments" element={<Installments />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
