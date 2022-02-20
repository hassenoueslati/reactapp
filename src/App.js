import './App.css';
import React, {Suspense} from "react";
import styled from "styled-components";
import Header from "./components/Header";
//import Welcome from "./pages/Welcome";
//import Products from "./pages/Products";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import ProductDetails from "./pages/ProductDetails";
const Welcome = React.lazy(()=> import("./pages/Welcome"));
const Products = React.lazy(()=> import("./pages/Products"));
const ProductDetails = React.lazy(()=> import("./pages/ProductDetails"));


function App() {
  return (
      <>
          <Header></Header>
          <AppFrame className="App">
              <Suspense fallback={<p>... Page loading please wait </p>}>
              <BrowserRouter basename="/">
                  <Routes>
                      <Route path="/welcome"
                             element={<Welcome/>}
                      />

                      <Route path="/products"
                             element={<Products />}
                      />

                      <Route path="/product:name"
                             element={<ProductDetails />}
                      />
                      <Route exact
                             render={() => <p>404 Not Found</p>}
                      />
                  </Routes>
              </BrowserRouter>
              </Suspense>
          </AppFrame>
      </>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
export default App;
