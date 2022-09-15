/**
 * @author Vincent Bruijn <vebruijn@gmail.com>
 */
import React, { useEffect, useRef, useState } from 'react';
import Credit from './Credit.jsx';
import Button from './Button.jsx';
import Slots from './Slots.jsx';
import Attribution from './Attribution.jsx';
import Title from './Title.jsx';
import Image from './Image.jsx';
import { defineScore } from '../utils/defineScore.js';

const reels = [
  [...'🏀⚽🎾🏐⚾🏉⚽🎾⚾⚽🎱⚽🏈🎾⚾⚽🏉🏐🎾⚾'],
  [...'🏀🏈🏐🏈🎾🏈🏐🏈⚽🏈🎱🏈⚾🏐🎾🏈🏐🏉🏈🏐'],
  [...'🏀⚾⚽⚾🎾⚾⚽⚾🎱⚾⚽⚾🏈⚾⚽⚾🏉⚾⚽⚾'],
];
const slots = 3;
const fps = 24;
const baseCredit = 2217;
const baseInterval = Math.floor(1e3 / fps);
const reelLength = reels[0].length;
const dayInSeconds = 24 * 60 * 60 * 1000;

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function customEase(current, total) {
  const currentIncrement = -current + total;
  if (current === 0) {
    return total;
  } else if (current < 8) {
    return total - 21;
  } else if (current < 15) {
    return total - 22;
  } else if (current < 19) {
    return total - 23;
  } else if (current < 23) {
    return total - 24;
  }
  return currentIncrement;
}

const FruitMachine = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [credit, setCredit] = useState(baseCredit);
  const [slotValues, setSlotValues] = useState([...'🏀'.repeat(slots)]);
  const [tries, setTries] = useState(0);
  const [success, setSuccess] = useState(0);
  const [direction, setDirection] = useState(0);

  const [startTime, setStartTime] = useState(Date.now());
  const [intervalValue, setIntervalValue] = useState(dayInSeconds);

  const [reelCount, setReelCount] = useState(undefined);
  const [reelCountRef, setReelCountRef] = useState(undefined);
  const [maxDuration, setMaxDuration] = useState(6500);

  useInterval(() => {
    if (isRunning) {
      setReelCount((reelCount) => reelCount.map((val) => Math.max(val - 1, 0)));

      if (
        Date.now() > startTime + maxDuration ||
        reelCount.every((el) => el === 0)
      ) {
        setIsRunning(false);
        setIntervalValue(dayInSeconds);

        const score = defineScore(slotValues);
        setCredit((credit) => credit + score);
        setSuccess((success) => (score > 0 ? success + 1 : success));
        setDirection(!!score ? 1 : -1);

        console.log(success, tries);

        console.log(tries, success, success / tries);
      } else {
        const keys = reelCount.map(
          (el, idx) => customEase(el, reelCountRef[idx]) % reelLength
        );

        setSlotValues(() => keys.map((key, idx) => reels[idx][key]));
      }
    }
  }, intervalValue);

  const clickHandler = () => {
    if (isRunning || credit <= 0) {
      return;
    }

    setIntervalValue(baseInterval);
    setStartTime(Date.now());
    setIsRunning(true);
    setCredit((credit) => credit - 1);
    setTries((tries) => tries + 1);
    setDirection(0);

    const runDefinition = [1, 2, 3].map(
      (el) => Math.floor(Math.random() * reelLength) + el * (fps * 1.5)
    );
    setReelCount(runDefinition);
    setReelCountRef([...runDefinition]);
    console.log(runDefinition);
    setMaxDuration(() => runDefinition[2] * Math.round(1000 / fps));
  };

  return (
    <div className="tank" title="Click or tap the red button">
      <Image />
      <Slots slotValues={slotValues} />
      <div className="controls">
        <div>
          <Title />
          <p className="material">
            <span itemProp="artMedium">pixels on screen</span>
            <br />
            <br />
            <span>
              <Credit credit={credit} direction={direction} />
              <Button clickHandler={clickHandler} isRunning={isRunning} />
            </span>
          </p>
        </div>
        <div></div>
        <Attribution />
      </div>
    </div>
  );
};

export default FruitMachine;
