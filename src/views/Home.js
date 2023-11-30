import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { TopNavbar } from "../components/TopNavbar.jsx";
import { SideNavbar } from "../components/SideNavbar.jsx";
import { HomeHeader } from "../components/HomeHeader.jsx";
import { GiftHomeCard } from "../components/GiftHomeCard.jsx";
import giftIcon from "../images/gift-icon.jpg";
import { MainFooter } from "../components/MainFooter.jsx";
import giftsList from "../jsons/main-gifts-list.json";

export const Home = () => {
  const [mainGiftsList, setMainGiftsList] = useState([]);

  useEffect(() => {
    const fetchGiftList = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/USER/giftList/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMainGiftsList(data)
        console.log(data)
      } catch (error) {
        console.error("Fetching error:", error);
        // Handle the error appropriately in your application
      }
    };

    fetchGiftList();
  }, []);

  return (
    <div className="App">
      <TopNavbar />
      <div className="main-container">
        <SideNavbar />
        <main>
          <HomeHeader />
          {mainGiftsList.map((gift, index) => (
            <GiftHomeCard
              key={index}
              name={gift.name}
              brand={gift.brand}
              shop={gift.shop}
              price={gift.price}
              category={gift.category}
              shipping_option={gift.shipping_option}
              delivery_date={gift.delivery_date}
              image={giftIcon}
            />
          ))}
        </main>
      </div>
    </div>
  );
};
