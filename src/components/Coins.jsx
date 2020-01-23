import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Coins = () => {
    const [coinList, setCoinList] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/list"
            )
            .then(res => setCoinList(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Navbar />
            <div className="coin-list">
                {coinList.map((coin) => {
                    return (
                        <div className="coin-list-item">
                            <p className="coin-list-title">{coin.name}</p>
                            <p>Symbol: {coin.symbol}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Coins;