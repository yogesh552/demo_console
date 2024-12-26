import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import '../public/css/common/App.css'
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Login from './components/login/login.jsx';
import AdminDashboard from './pages/adminPages/dashboard.jsx';
import Files from './pages/adminPages/files.jsx';
import UserDashboard from './pages/userPages/dashboard.jsx';

const Layout = () => {
  const location = useLocation();

  // List of routes where Header, Footer, and Sidebar should not be shown
  const hideHeaderFooterSidebarRoutes = ['/login', '/admin/filex'];
  const showHeaderFooterSidebar = !hideHeaderFooterSidebarRoutes.includes(location.pathname);

  return (
    <div className="layout">
      {showHeaderFooterSidebar && <Header />} {/* Display Header */}
      <div className="main-content">
        {showHeaderFooterSidebar && <Sidebar />} {/* Display Sidebar */}
        <div className="content">
          {/* Render page content dynamically */}
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/filex" element={<Files />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
          </Routes>
        </div>
      </div>
      {showHeaderFooterSidebar && <Footer />} {/* Display Footer */}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
