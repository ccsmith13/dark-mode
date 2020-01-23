import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Charts from "./Charts";
import axios from "axios";

const Home = () => {
    const [coinData, setCoinData] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
            )
            .then(res => setCoinData(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <Navbar />
            <Charts coinData={coinData} />
        </div>
    );
}
export default Home 