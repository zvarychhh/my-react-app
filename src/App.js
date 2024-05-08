import './App.css';
import MenuComponent from "./components/menu-component/MenuComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BinComponent from "./components/bin-component/BinComponent";
import AboutComponent from "./components/about-component/AboutComponent";
import ListComponents from "./components/list-component/ListComponents";
import { useState } from 'react';


function App() {
    const [totalPrice, setTotalPrice] = useState(0);

    const addToTotalPrice = (price) => {
      setTotalPrice(totalPrice + price);
      
    };

    const setTotalNull = () => {setTotalPrice(0)};

  return (
    <section className="app">
      <header className="app-header">
     
      </header>
      <BrowserRouter>
      <MenuComponent totalPrice={totalPrice} />
      <div className='mt-3'>
      <Routes>
        <Route exact path="/" element={<ListComponents addToTotalPrice={addToTotalPrice} />} />
        <Route path="/bin" element={<BinComponent setTotalNull={setTotalNull}/>} />
        <Route path="/about" element={<AboutComponent/>} />
      </Routes>
      </div>
      </BrowserRouter>
      
    </section>
  );
}

export default App;
