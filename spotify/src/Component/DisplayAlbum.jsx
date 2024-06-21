import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";

const DisplayAlbum = () => {
  const { playWithId } = useContext(PlayerContext);
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col">
          <p>PlayList</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="Spotify Logo" />
            <b>Spotify</b>
            • 1,32,154 Likes
            • <b>50 Songs</b>
            About 2 hour 50 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="Clock Icon" />
      </div>

      <hr />
      {
        songsData.map((item, index) => (
          <div onClick={() => playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer">
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-10 mr-5" src={item.image} alt={item.name} />
            </p>

            <p className="text-[15px]">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">5 days Ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))
      }
    </>
  );
};

export default DisplayAlbum;
