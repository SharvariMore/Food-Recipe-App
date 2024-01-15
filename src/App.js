import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, MealDetailsPage, ErrorPage, CategoryPage } from './pages/index';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meal/:id" element={<MealDetailsPage />} />
          <Route path="/meal/category/:name" element={<CategoryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
