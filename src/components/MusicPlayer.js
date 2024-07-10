// src/components/MusicPlayer.js

import React, { useState, useRef } from "react";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [songs] = useState([
    { name: "Song 1", src: "/songs/song1.mp3", backgroundImage: "/images/song1.jpg" },
    { name: "Song 2", src: "/songs/song2.mp3", backgroundImage: "/images/song2.jpg" },
    { name: "Song 3", src: "/songs/song3.mp3", backgroundImage: "/images/song3.jpg" },
  ]);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const playSong = (song) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div className="music-container container" style={{ backgroundImage: currentSong ? `url(${currentSong.backgroundImage})` : 'none' }}>
      <div className="music-header">
        <h1>Music Player App</h1>
      </div>
      <div className="list-group">
        {songs.map((song, index) => (
          <button
            key={index}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            onClick={() => playSong(song)}
          >
            {song.name}
            <i className="fas fa-play btn-play"></i>
          </button>
        ))}
      </div>
      <div className="audio-player mt-3">
        {currentSong && (
          <audio controls ref={audioRef}>
            <source src={currentSong.src} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
