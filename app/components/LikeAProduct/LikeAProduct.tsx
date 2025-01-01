'use client'
import { useState  } from "react";
import react from "react";
import './LikeAProduct.css'
import Image from "next/image";

const LikeAProduct = () => {
  const [likeHeart, setLikeHeart] = useState(false);
  const toLikeHeart = 'https://img.icons8.com/?size=100&id=87&format=png&color=000000';
  const likedHeart = 'https://img.icons8.com/?size=100&id=V4c6yYlvXtzy&format=png&color=000000';

  return (
    <div
      className="like-button"
      onClick={() => setLikeHeart(!likeHeart)}
    >
      <Image
        src={likeHeart ? likedHeart : toLikeHeart}
        alt="Likable heart for users to save the product"
        className="heart-image"
        width={20}
        height={20}
      />
    </div>
  );
};

export default LikeAProduct;
