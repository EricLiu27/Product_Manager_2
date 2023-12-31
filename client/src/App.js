import './App.css';
import { Routes, Route } from 'react-router-dom';
// import CreatePage from './views/CreatePage';
import Main from './views/Main';
import DashboardPage from './views/DashboardPage';
import DetailsPage from './views/DetailsPage';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/products" element={<Main />} />
        <Route path="/products/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
