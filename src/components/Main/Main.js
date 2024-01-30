/**
 * Main component
 */
import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Playlist from "../../components/Playlist/Playlist";
import "./Main.css";

async function requestApi(searchTerm) {
    const url = `http://localhost:3001/artists?name_like=${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default function Main() {
    const [results, setResults] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    const handleSearch = (searchTerm) => {
        if (searchTerm === "") {
            return;
        }
        requestApi(searchTerm).then((data) => setResults(data));
        setIsVisible(!isVisible);

    };
    return (
        <main className="main-container">
            <Header onSearch={handleSearch} />         
            <Playlist isVisible={isVisible} results={results}/>
        </main>
    )
}
