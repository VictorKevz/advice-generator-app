import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./card.css";
import dice from "../assets/images/icon-dice.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";

function Card() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(71);
  const [animationKey, setAnimationKey] = useState(0);
  const fetchAdvice = (id = "") => {
    const url = id
      ? `https://api.adviceslip.com/advice/${id}`
      : "https://api.adviceslip.com/advice";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
        setAnimationKey(prevKey => prevKey + 1);
        
      })
      
  };

  useEffect(() => {
    fetchAdvice(71); 
  }, []);

  return (
    <motion.div
    key={animationKey}
    initial={{ y: -600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .25, ease: 'easeIn' }} 
    className="card-container">
      <div className="text-container">
        <h1 className="card-title">ADVICE {`#${adviceId}`}</h1>
        <p className="quote">{`"${advice}"`}</p>
      </div>
      <picture className='pattern-divider'>
        <source media="(max-width:510px )" srcset={dividerMobile} />
        <img src={dividerDesktop} alt="pattern divider" />
      </picture>
      <div className="dice-container">
        <button className='btn' onClick={() => fetchAdvice()}>
          <img src={dice} alt="dice icon" className="dice-img" />
        </button>
      </div>
    </motion.div>
  );
}

export default Card;
