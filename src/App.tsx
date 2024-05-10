import React from 'react';
import listingsData from './data/data'; // Путь к файлу data.ts
import Listing from './components/Listing'; // Путь к файлу Listing.tsx
import './App.css';

const App = () => {
    const { items } = listingsData;
    return (React.createElement("div", { className: "App" },
        React.createElement(Listing, { items: items })));
};
export default App;
