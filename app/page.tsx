import React from "react";
import Image from "next/image";
import LikeAProduct from "./components/LikeAProduct/LikeAProduct";
import "./product.css"; // Import the CSS file
import Filter from "./components/SideBarFilter/Filter";

interface Product {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const page = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const responseJson: Product[] = await response.json();

  return (
    <main>
      <div className="product-grid">
        {responseJson.map((singleProduct) => (
          <div className="product-card" key={singleProduct.id}>
            <img 
              src={singleProduct.image} 
              alt={singleProduct.title}   
            />
            <div className="product-card-content">
              <h2 className="product-card-title">{singleProduct.title}</h2>
              {/* <p className="product-card-description">{singleProduct.description}</p> */}
              <p className="product-card-rating">
                Rating: {singleProduct.rating.rate} ({singleProduct.rating.count} reviews)
              </p>
            </div>
           <div className="like-price-card">
           <p className="product-card-price">${singleProduct.price}</p>
           <LikeAProduct/>
           </div>
          </div>
        ))}
      </div>

    </main>
  );
};

export default page;
