import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";
//import { BackendURL } from "./component/backendURL";

import ReactDOM from "react-dom/client";

import injectContext from "./store/appContext";

import "./index.css";
import { Home } from "./views/Home.js";
// import reportWebVitals from "./reportWebVitals";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
//   const basename = process.env.BASENAME || "";

//   if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
//     return <BackendURL />;

  return (
    <div>
      {/* <BrowserRouter basename={basename}> */}
      <BrowserRouter>
        {/* <ScrollToTop> */}
          {/* <Navbar /> */}
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
          {/* <Footer /> */}
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
