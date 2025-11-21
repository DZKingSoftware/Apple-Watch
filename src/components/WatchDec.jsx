import React, { useState } from "react";
import Controls from "./Controls";

import Logo from '/src/assets/logo.png'

function WatchDec ({ onRotate }) {
    const [activeButton, setActiveButton] = useState(0);
    const watchName = [
        {
            first: "White",
            second: "Gray",
            color1: "#DBDBD8",
            color2: "#6b7280",
            btnColor: 'grey'
        },
        {
            first: "Blue",
            second: "Gray",
            color1: "blue",
            color2: "#6b7280",
            btnColor: 'blue',
        },
        {
            first: "Orange",
            second: "Gray",
            color1: "#FFA136",
            color2: "#6b7280",
            btnColor: 'orange'
        },
        {
            first: "Green",
            second: "Gray",
            color1: "green",
            color2: "#6b7280",
            btnColor: 'green'
        }
    ]

    const handleButton = (index) => {
        onRotate(index)
        setActiveButton(index)
    }
    return (
        <div className="watch" style={{ fontFamily: 'gc-epicpro' }}>
            <a href="/" className="absolute top-6 left-7"><img src={Logo} alt=""/></a>
            <p className="text-2xl font-normal text-gray-500 mb-9">Apple Watch Pro</p>
            <h1 className="text-5xl">Titanium Case with <br /> 
            <span style={{ color: watchName[activeButton].color1}}>{watchName[activeButton].first}</span>
            <span>/</span>
            <span style={{ color: watchName[activeButton].color2 }}>{watchName[activeButton].second}</span>
             Trail Loop</h1>
            <div className="my-8 font-normal text-4xl">From <span style={{ color: watchName[activeButton].color1 }}>€999</span></div>
            <p className="w-[400px] text-gray-500 my-3 text-sm font-extralight">The aerospace-grade titanium case strikes the perfect balance of weight, durability and corrosion resistance. <br />
                The thin, lightweight Trail Loop is made from a soft nylon weave, with a convenient pull tab for quick adjustments on the go.</p>
            <div>
                <p className="text-1xl my-3">Select Color</p>
                <Controls onRotate={handleButton} activeButton={activeButton} />
                <button className="rounded-4xl bg-blue-600 px-5.5 py-3 text-white my-4 cursor-pointer hover:bg-transparent  transition-colors duration-700 hover:border-blue-500 border-3"
                style={{ backgroundColor: watchName[activeButton].btnColor }}
                >Buy Now</button>
            </div>
        </div>
    )
}

export default WatchDec;