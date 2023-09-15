import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import CartPage from "./pages/CartPage";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/count" element={<CounterPage />}></Route>
        <Route path="/card" element={<CartPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
