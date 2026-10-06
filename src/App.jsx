import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./component/pages/HomePage";
import ProductsPage from "./component/pages/ProductsPage";
import AppLayout from "./component/layout/AppLayout";
import SingolProductPage from "./component/pages/SingolProductPage";
import AboutUs from "./component/pages/AboutUs";
import NotFoundPage from "./component/pages/NotFound";


export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingolProductPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );  
}