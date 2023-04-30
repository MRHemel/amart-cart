// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>hello:{products.length}</h1>
        </div>
    );
};

export default Header;