
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Home from './features/analysis/components/Home';
import BrandPopularity from './features/analysis/components/BrandPopularity';
import ProductPopularity from './features/analysis/components/ProductPopularity';
import BrandPopularityGraph from './features/analysis/components/BrandPopularityGraph';
import ProductPopularityGraph from './features/analysis/components/ProductPopularityGraph';
import ProductPrices from './features/analysis/components/ProductPrices';
import ProductPricesGraph from './features/analysis/components/ProductPricesGraph';
import AboutMe from './features/aboutMe/components/AboutMe';

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
          <Route path="/ProductPrices" element={<ProductPrices />} />
          <Route path="/ProductPricesGraph" element={<ProductPricesGraph />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
