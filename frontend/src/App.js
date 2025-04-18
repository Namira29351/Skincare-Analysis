
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Home from './features/analysis/components/Home';
import BrandPopularity from './features/analysis/components/BrandPopularity';
import ProductPopularity from './features/analysis/components/ProductPopularity';
import ProductPrice from './features/analysis/components/ProductPrices';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BrandPopularity" element={<BrandPopularity />} />
          <Route path="/ProductPopularity" element={<ProductPopularity />} />
          <Route path="/ProductPrice" element={<ProductPrice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
