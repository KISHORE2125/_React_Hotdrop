import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight, FaChevronLeft, FaStar, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import Baconsalad from "../assets/Snacks/Baconsalad.jpg";
import Burger from "../assets/Snacks/Burger.jpg";
import FrenchFries from "../assets/Snacks/FrenchFries.jpg";
import Nuggets from "../assets/Snacks/Nuggets.jpg";
import Samosa from "../assets/Snacks/Samosa.jpg";

const snacksData = [
    { src: Baconsalad, title: "Baconsalad", price: 200, rating: 4.8 },
    { src: Burger, title: "Burger", price: 120, rating: 4.5 },
    { src: FrenchFries, title: "Fries", price: 80, rating: 4.2 },
    { src: Nuggets, title: "Nuggets", price: 150, rating: 4.7 },
    { src: Samosa, title: "Samosa", price: 30, rating: 4.3 },
];

export default function SnacksSection() {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);
    const [cart, setCart] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth check
    const [showAuthPrompt, setShowAuthPrompt] = useState(false);

    const handleAddToCart = (title) => {
        if (!isLoggedIn) {
            setShowAuthPrompt(true);
            return;
        }
        setCart((prev) => ({
            ...prev,
            [title]: prev[title] ? prev[title] + 1 : 1,
        }));
    };

    const handleIncrease = (title) => {
        setCart((prev) => ({ ...prev, [title]: prev[title] + 1 }));
    };

    const handleDecrease = (title) => {
        setCart((prev) =>
            prev[title] > 1 ? { ...prev, [title]: prev[title] - 1 } : { ...prev, [title]: 0 }
        );
    };

    const ImageCard = ({ src, title, price, rating }) => {
        const quantity = cart[title] || 0;

        const handleImageOrCartClick = () => {
            if (quantity === 0) {
                handleAddToCart(title);
            }
        };

        return (
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 w-full h-full">
                <div
                    className="relative aspect-[4/3] w-full h-full cursor-pointer"
                    onClick={handleImageOrCartClick}
                >
                    <img
                        src={src}
                        alt={title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                    {/* Price tag */}
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        ₹{price}
                    </div>

                    {/* Ratings */}
                    <div className="absolute bottom-10 left-3 flex items-center space-x-1 text-yellow-400">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                className={`${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                            />
                        ))}
                        <span className="text-white text-xs ml-1">{rating}</span>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-3 text-white">
                        <h3 className="text-lg font-bold">{title}</h3>
                    </div>

                    {/* Add to cart / Quantity */}
                    <div
                        className="absolute bottom-3 right-3"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleImageOrCartClick();
                        }}
                    >
                        {quantity === 0 ? (
                            <button
                                className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600"
                            >
                                <FaShoppingCart />
                            </button>
                        ) : (
                            <div className="flex items-center space-x-2 bg-white rounded-full px-2 py-1 shadow-md">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleDecrease(title); }}
                                    className="text-orange-500 p-1"
                                >
                                    <FaMinus />
                                </button>
                                <span className="font-bold">{quantity}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleIncrease(title); }}
                                    className="text-orange-500 p-1"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="relative z-10 px-4">
            {/* Auth Prompt Modal */}
            {showAuthPrompt && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-bold mb-4">Sign In Required</h2>
                        <p className="mb-4">Please sign in or sign up to add items to your cart.</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => navigate("/signin")}
                                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => navigate("/signup")}
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Sign Up
                            </button>
                        </div>
                        <button
                            onClick={() => setShowAuthPrompt(false)}
                            className="mt-4 text-sm text-gray-500 underline"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Section Title & Arrow */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-orange-600">🥪 Snacks</h3>

                <div className="flex items-center space-x-2">
                    <span className="text-base sm:text-lg text-gray-700 font-medium">
                        {showAll ? "Back to All Dishes" : "Explore more snacks"}
                    </span>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="p-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors"
                    >
                        {showAll ? <FaChevronLeft /> : <FaChevronRight />}
                    </button>
                </div>
            </div>

            {/* Snacks grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full">
                {(showAll ? snacksData : snacksData.slice(0, 4)).map((item, i) => (
                    <ImageCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
}
