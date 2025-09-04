import React from "react";
import Header from "../Components/Header_Section";
import SnacksSection from "../Components/Snacks_Section";
import Footer from "../Components/Footer_Section";
import DessertSection from "../Components/Dessert_Section";
// import VegSection from "../Components/Vegetarian_Section";
import NonVegSection from "../Components/Non_Veg_Section";
import MilkshakeSection from "../Components/Milk_Shake_Section";
// import WaffleSection from "../Components/Waffles_Section";
import FreshJuiceSection from "../Components/Fresh_Juice_Section";

export default function Home() {
    return (
     <>        {/* Snacks Section */}
        <Header/>
        <SnacksSection />
         <NonVegSection/>
        {/* <VegSection/> */}
        <DessertSection/>
        <MilkshakeSection/>
        {/* <WaffleSection/> */}
        <FreshJuiceSection/> 
        <Footer/>
        </>


    );
  }