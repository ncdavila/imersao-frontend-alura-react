import React from "react";
import "./Playlist.css";
import Card from "../CardPlaylist/CardPlaylist";
import { listPlaylists } from "./DataPlaylist";


export default function Playlist () {
    return (
        <div className="playlist-container">
            <div id="playlists-grid">
                <div className="playlists-result__header">
                    <h1 id="greeting">Bom dia</h1>
                    <h2 className="subtitle">Navegar por todas as seções</h2>
                </div>
                <div className="playlists-result__cards">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {listPlaylists.map(function(item){
                                return <Card title={item.title} image={item.image} bgColor={item.bgColor} />;
                            })}
                        </section>    
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                </div>    
            </div>            
        </div>
    )
};
