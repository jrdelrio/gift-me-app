import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { TopNavbar } from "../components/TopNavbar.jsx";
import { SideNavbar } from "../components/SideNavbar.jsx";

export const Home = () => {
  const [mainGiftsList, setMainGiftsList] = useState([
    {
      name: "Samsung 4K Smart TV",
      brand: "Samsung",
      shop: "Amazon",
      price: 599.99,
      category: "Electronics",
      shipping_option: ["Me", "Gifter"],
      delivery_date: "2023-01-15",
    },
    {
      name: "Nike Air Zoom Pegasus 38",
      brand: "Nike",
      shop: "AliExpress",
      price: 89.99,
      category: "Sport",
      shipping_option: ["Me"],
      delivery_date: "2023-02-01",
    },
    {
      name: "KitchenAid Stand Mixer",
      brand: "KitchenAid",
      shop: "Media Markt",
      price: 299.99,
      category: "Home",
      shipping_option: ["Me", "Gifter"],
      delivery_date: "2023-01-20",
    },
    {
      name: "LEGO Technic Porsche 911",
      brand: "LEGO",
      shop: "Toys 'R' Us",
      price: 129.99,
      category: "Hobby",
      shipping_option: ["Me"],
      delivery_date: "2023-01-25",
    },
    {
      name: "Bose QuietComfort 35 II Headphones",
      brand: "Bose",
      shop: "Best Buy",
      price: 349.99,
      category: "Electronics",
      shipping_option: ["Me", "Gifter"],
      delivery_date: "2023-02-10",
    },
    {
      name: "Yamaha YAS-109 Soundbar",
      brand: "Yamaha",
      shop: "Amazon",
      price: 199.99,
      category: "Electronics",
      shipping_option: ["Me"],
      delivery_date: "2023-02-05",
    },
    {
      name: "Adidas Ultraboost 21 Running Shoes",
      brand: "Adidas",
      shop: "Zalando",
      price: 159.99,
      category: "Sport",
      shipping_option: ["Me", "Gifter"],
      delivery_date: "2023-02-15",
    },
    {
      name: "Instant Pot Duo Evo Plus",
      brand: "Instant Pot",
      shop: "Media Markt",
      price: 129.99,
      category: "Home",
      shipping_option: ["Me"],
      delivery_date: "2023-02-20",
    },
    {
      name: "Canon EOS Rebel T7i DSLR Camera",
      brand: "Canon",
      shop: "B&H",
      price: 699.99,
      category: "Electronics",
      shipping_option: ["Me", "Gifter"],
      delivery_date: "2023-02-28",
    },
    {
      name: "Fender Player Stratocaster Electric Guitar",
      brand: "Fender",
      shop: "Guitar Center",
      price: 799.99,
      category: "Music",
      shipping_option: ["Me"],
      delivery_date: "2023-03-05",
    },
  ]);

  console.log(mainGiftsList);

  return (
    <div className="App">
      <TopNavbar />
      <div className="main-container">
        <SideNavbar />
        <main>
          <header>aqui hay un header</header>
          <p>some content</p>
        </main>
      </div>
    </div>
  );
};
