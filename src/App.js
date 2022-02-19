import './App.css';
import styled from "styled-components";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";



function App() {
  return (
      <>
          <Header></Header>
        <AppFrame className="App">
            <Welcome/>
            <Products/>
        </AppFrame>
      </>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
export default App;
