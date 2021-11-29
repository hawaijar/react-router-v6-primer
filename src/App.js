import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { css } from "@emotion/css";
import Admin from "./routes/Admin";
import Product from "./routes/Product";

const AppStyles = css`
  margin: 50px auto;
  width: 380px;
  .Container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`;

const App = () => {
  return (
    <div className={AppStyles}>
      <Router>
        <div className="Container">
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="*" element={<div>Page not found </div>} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
