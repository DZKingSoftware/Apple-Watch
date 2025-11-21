import React, { useEffect, useRef } from "react";
import './Carusel.css';

import WhiteWatch from '/src/assets/white.png'
import OrangeWatch from '/src/assets/orange.png'
import BlueWatch from '/src/assets/blue.png'
import GreenWatch from '/src/assets/green.png'

function Carusel({ rotation }) {
  const circleRef = useRef(null);
  const gradients = [
    "radial-gradient(circle, #ffffff 0%, #DBDBD8 80%)",
    "radial-gradient(circle, #d8e6f5 0%, #95AEC7 80%)",
    "radial-gradient(circle, #FFCBB8 0%, #FFB092 80%)",
    "radial-gradient(circle, #b9e7b9 0%, #6EA06E 80%)",
  ];
  const index = Math.abs((rotation / 90) % gradients.length);

  const activeIndex = ((rotation % 360) / 90 + 4) % 4;

  useEffect(() => {
    const circle = circleRef.current;
    const cards = circle.querySelectorAll(".card");

    const radius = 250;
    const circleWidth = circle.offsetWidth;
    const circleHeight = circle.offsetHeight;

    const centerX = circleWidth / 2;
    const centerY = circleHeight / 2;

    cards.forEach((card, i) => {
      const angle = (Math.PI * 2 / cards.length) * i;
      const x = centerX + radius * Math.cos(angle) - card.offsetWidth / 2;
      const y = centerY + radius * Math.sin(angle) - card.offsetHeight / 2;
      card.style.left = `${x}px`;
      card.style.top = `${y}px`;
    });

    circle.style.transform = `rotate(${rotation}deg)`;

    cards.forEach((card) => {
      card.style.transform = `rotate(${-rotation}deg)`;
    });
  }, [rotation])
  return (
    <div className="carusel relative w-[900px] h-[900px] rounded-full transition-transform duration-[700ms]" style={{ background: gradients[index] }} ref={circleRef}>
      <div className={`card absolute w-[300px] h-[300px] rounded-full flex items-center justify-center text-3xl font-bold transition-transform duration-700
        ${Math.floor(activeIndex) === 2 ? "active" : "default"}`}>
        <img src={OrangeWatch} className="w-[300px]" alt="" />
      </div>

      <div className={`card absolute w-[300px] h-[300px] rounded-full flex items-center justify-center text-3xl font-bold transition-transform duration-700
        ${Math.floor(activeIndex) === 1 ? "active" : "default"}`}>
        <img src={GreenWatch} className="w-[350px]" alt="" />
      </div>

      <div className={`card absolute w-[300px] h-[300px] rounded-full flex items-center justify-center text-3xl font-bold transition-transform duration-700
        ${Math.floor(activeIndex) === 0 ? "active" : "default"}`}>
        <img src={WhiteWatch} className="w-[350px]" alt="" />
      </div>

      <div className={`card absolute w-[300px] h-[300px] rounded-full flex items-center justify-center text-3xl font-bold transition-transform duration-700
        ${Math.floor(activeIndex) === 3 ? "active" : "default"}`}>
        <img src={BlueWatch} className="w-[350px]" alt="" />
      </div>
    </div>
  )
}

export default Carusel