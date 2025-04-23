
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Home from './features/analysis/components/Home';
import BrandPopularity from './features/analysis/components/BrandPopularity';
import ProductPopularity from './features/analysis/components/ProductPopularity';
import ProductPrice from './features/analysis/components/ProductPrices';
import BrandPopularityGraph from './features/analysis/components/BrandPopularityGraph';
import ProductPopularityGraph from './features/analysis/components/ProductPopularityGraph';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BrandPopularity" element={<BrandPopularity />} />
          <Route path="/BrandPopularityGraph" element={<BrandPopularityGraph />} />
          <Route path="/ProductPopularity" element={<ProductPopularity />} />
          <Route path="/ProductPopularityGraph" element={<ProductPopularityGraph />} />
          <Route path="/ProductPrice" element={<ProductPrice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
