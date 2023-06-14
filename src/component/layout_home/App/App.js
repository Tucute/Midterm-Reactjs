import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import FormRegister from "../../layout_page/formRegister";
import LoginForm from "../../layout_page/LoginForm";
import ProductCategory from "../ProductCategory";
import ShowDetail from "../showDetails";
import Searchitems from "../Searchitems";
import Contact from "../Contact";

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Header />} >
              <Route path="/" element={<Content />} />
              <Route path="/Searchitems" element={<Searchitems />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/formRegister" element={<FormRegister/>} />
              <Route path="/formLogin" element={<LoginForm/>} />
              <Route path="/productCategory/:id" element={<ProductCategory/>} />
              <Route path="/details/:id" element={<ShowDetail/>} />
            </Route>
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;