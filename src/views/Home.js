import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { TopNavbar } from "../components/TopNavbar.jsx";
import { SideNavbar } from "../components/SideNavbar.jsx";
import { HomeHeader } from "../components/HomeHeader.jsx";
import { GiftHomeCard } from "../components/GiftHomeCard.jsx";
import giftIcon from "../images/gift-icon.jpg";
import { MainFooter } from "../components/MainFooter.jsx";
import giftsList from "../jsons/main-gifts-list.json"

export const Home = () => {
  const [mainGiftsList, setMainGiftsList] = useState(giftsList);

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
