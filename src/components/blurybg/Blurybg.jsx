import React, { useEffect } from 'react';
import './Blurybg.css';
import Textsec from './components/textsec/Textsec';

function Blurybg() {
    useEffect(() => {
        const interBubble = document.querySelector('.mouse');
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        }

        window.addEventListener('mousemove', (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

        move();

        return () => {
            window.removeEventListener('mousemove', (event) => {
                tgX = event.clientX;
                tgY = event.clientY;
            });
        };
    }, []);

    return (
        <div className='dark-blur'>
            <div className="mainText">
                <Textsec/>
            </div>
            <div className="gradientBg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradientContainer">
                    <div className="c1"></div>
                    <div className="c2"></div>
                    <div className="c3"></div>
                    <div className="c4"></div>
                    <div className="c5"></div>
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    );
}

export default Blurybg;
