import './App.css';
import MenuComponent from "./components/menu-component/MenuComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BinComponent from "./components/bin-component/BinComponent";
import AboutComponent from "./components/about-component/AboutComponent";
import ListComponents from "./components/list-component/ListComponents";
import { useState, useEffect } from 'react';

function App() {
    const [totalPrice, setTotalPrice] = useState(() => {
        return parseInt(localStorage.getItem('totalPrice')) || 0;
    });

    const [selectedItems, setSelectedItems] = useState(() => {
        return JSON.parse(localStorage.getItem('selectedItems')) || [];
    });

    useEffect(() => {
        localStorage.setItem('totalPrice', totalPrice);
    }, [totalPrice]);

    useEffect(() => {
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }, [selectedItems]);

    const addToTotalPrice = (price) => {
        setTotalPrice(totalPrice + price);
    };

    const minusFromTotalPrice = (price) => {
        setTotalPrice(prevPrice => Math.max(prevPrice - parseInt(price), 0));
    };

    const setTotalNull = () => {
        setTotalPrice(0);
        setSelectedItems([]);
    };

    const addToSelectedItems = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

    const removeFromSelectedItems = (item) => {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
    };

    return (
        <section className="app">
            <header className="app-header">
            </header>
            <BrowserRouter>
                <MenuComponent totalPrice={totalPrice} />
                <div className='mt-3'>
                    <Routes>
                        <Route exact path="/" element={<ListComponents addToTotalPrice={addToTotalPrice} addToSelectedItems={addToSelectedItems} />} />
                        <Route path="/bin" element={<BinComponent selectedItems={selectedItems} setTotalNull={setTotalNull} removeFromSelectedItems={removeFromSelectedItems} minusFromTotalPrice={minusFromTotalPrice} />} />
                        <Route path="/about" element={<AboutComponent />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </section>
    );
}

export default App;
