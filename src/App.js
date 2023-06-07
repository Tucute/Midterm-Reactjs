import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './component/layout_admin/header';
import Footer from './component/layout_admin/footer';
import Add from './component/layout_page/add';
import Nav from './component/layout_admin/nav';
import Home from './component/layout_page/home';
import UpdateProduct from "./component/layout_page/update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;