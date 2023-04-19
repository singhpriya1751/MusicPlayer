import React, { useEffect, useState } from "react";
import Player from "./components/Player";
function App() {
  const [songs] = useState([
    {
      title: "Titliya",
      artist: "Hardy Sandhu",
      img_src: "./images/titaliya.jpg",
      src: "./music/Titliaan.mp3",
    },
    {
      title: "Lets Dance Chotu Motu",
      artist: "Yo Yo honey singh",
      img_src: "./images/lets dance chotu motu.jpg",
      src: "./music/Lets Dance Chotu Motu_192(Ghantalele.com).mp3",
    },
    {
      title: "Tere Hawaale",
      artist: "Arijit Singh",
      img_src: "./images/Tere-Hawaale.jpg",
      src: "./music/Tere Hawaale(PagalWorld.com.se).mp3",
    },
    {
      title: "Nach meri rani",
      artist: "Guru Randhawa",
      img_src: "./images/nach-meri-rani.jpg",
      src: "./music/Naach Meri Rani Guru Randhawa 128 Kbps.mp3",
    },
    {
      title: "Tere Hawaale",
      artist: "Arijit Singh",
      img_src: "./images/JasonDerulo-TakeYouDancing.jpg",
      src: "Tere Hawaale.mp3",
    },
    {
      title: "Tere Hawaale",
      artist: "Arijit Singh",
      img_src: "./images/care-ni-karda.jpg",
      src: "Tere Hawaale.mp3",
    },
    {
      title: "Tere Hawaale",
      artist: "Arijit Singh",
      img_src: "./images/burjkalifa.jpg",
      src: "Tere Hawaale.mp3",
    },
    {
      title: "Tere Hawaale",
      artist: "Arijit Singh",
      img_src: "./images/Ashnikko-Daisy.jpg",
      src: "Tere Hawaale.mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
