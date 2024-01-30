/**
 * Playlist component
 */

import React from 'react';
import "./../../Variables.css";
import "./Playlist.css";
import CardPlaylist from "../CardPlaylist/CardPlaylist";
import CardArtist from '../CardArtist/CardArtist';  
import { listPlaylists } from "./DataPlaylist";

export default function Playlist({ isVisible, results }) {
    console.log(isVisible)
    return (
        <div className="playlist-container">
            <div id="playlists-grid" className={`${isVisible ? '': 'hidden'}`}>
                <div className="playlists-result__header">
                    <h1 id="greeting">Bom dia</h1>
                    <h2 className="subtitle">Navegar por todas as seções</h2>
                </div>
                <div className="playlists-result__cards">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {listPlaylists.map(function(item){
                                return <CardPlaylist title={item.title} image={item.image} bgColor={item.bgColor} />;
                            })}
                        </section>    
                    </div>
                </div>
            </div>
            <div id="result-artist" className={`${isVisible ? 'hidden' : ''}`}>
                <div className="artist">
                    <div className="grid-container">
                        {Array.isArray(results) && results.map(function(result){
                            return (<CardArtist result={result} />);
                        })}
                    </div>    
                </div>
            </div>            
        </div>
    )
};
