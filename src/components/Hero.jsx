import React from 'react';
import HeroImage from '../images/heroImage.png';


const HeroSection = () => {
    return (
        <div className="hero-section bg-gradient-to-r from-yellow-600 to-blue-500 text-white py-20 text-white py-20">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 lg:pl-16">
                    <h1 className="text-6xl font-extrabold mb-5">Welcome to CryptoWatch</h1>
                    <p className="text-3xl mb-6">
                        Stay ahead of the game with real-time cryptocurrency prices and market trends.
                    </p>
                    <p className="text-sm">
                        Stay up-to-date with the latest cryptocurrency prices, monitor market movements 
                        in real-time, and uncover profitable opportunities to make informed investment 
                        decisions. Whether you're a seasoned trader or a curious enthusiast, CryptoWatch
                        provides you with comprehensive market data, including historical price charts, 
                        trading volumes, and market capitalizations. Explore trending coins, discover 
                        emerging projects with potential, and gain valuable insights to navigate the dynamic 
                        world of cryptocurrencies with confidence.
                    </p>

                </div>
                <div className="">
                    <img src={HeroImage} alt="CryptoWatch" className="w-9/9 h-auto mx-auto lg:ml-0 lg:mr-10" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
