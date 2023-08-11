import React from 'react';
import {Card} from '../ComandCard/Card.tsx';
import Slider from 'react-slick';
import style from './style.module.css'
import {useRef} from 'react';
interface FootballPlayer {
    id: number;
    logo: string;
    comandName: string;
  }

  interface CarouselProps {
    players: FootballPlayer[];
  }
  
  const Carousel: React.FC<CarouselProps> = ({ players }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    let startX: number | null = null;
    let scrollLeft: number | null = null;
  
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      startX = event.clientX;
      scrollLeft = sliderRef.current?.scrollLeft as number;
    };
  
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!startX || scrollLeft === null) return;
        event.preventDefault();
      
        const x = event.clientX;
        const walk = (x - startX) * 1.5;
        sliderRef.current!.scrollLeft = (scrollLeft - walk) as number;
      };
  
    const handleMouseUp = () => {
      startX = null;
      scrollLeft = null;
    };
  
    return (
      <div
        className={style.carousel_container}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className={style.carousel} ref={sliderRef}>
          {players.map((player, index) => (
            <div key={index} className={style.card}>
              <h3>{player.id}</h3>
              <p>Nationality: {player.logo}</p>
              <p>Position: {player.comandName}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;