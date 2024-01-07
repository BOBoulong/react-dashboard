import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Category from './components/Category';
import Customer from './components/Customer';
import List from './components/List';
import Report from './components/Report';
import Setting from './components/Setting';
import User from './components/User';
import './App.css';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/user" element={<User />}></Route>
          {/* <Route path="/" element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
