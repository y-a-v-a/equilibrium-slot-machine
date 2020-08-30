/**
 * @author Vincent Bruijn <vebruijn@gmail.com>
 */
import React from 'react';
import Credit from './Credit';
import Button from './Button';
import Slots from './Slots';
import Attribution from './Attribution';

class FruitMachine extends React.Component {

  constructor(props) {
    super(props);
    this.reels = [
      [...'🏀⚽🎾🏐⚾🏉⚽🎾⚾⚽🎱⚽🏈🎾⚾⚽🏉🏐🎾⚾'],
      [...'🏀🏈🏐🏈🎾🏈🏐🏈⚽🏈🎱🏈⚾🏐🎾🏈🏐🏉🏈🏐'],
      [...'🏀⚾⚽⚾🎾⚾⚽⚾🎱⚾⚽⚾🏈⚾⚽⚾🏉⚾⚽⚾']
    ];
    this.slots = 3;
    this.timerIds = [];

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      isRunning: false,
      count: 2217,
      slotValues: [...'🏀'.repeat(this.slots)],
      tries: 0,
      success: 0,
      direction: 0
    }
  }

  clickHandler(event) {
    const {isRunning, count, success, tries} = this.state;
    if (isRunning || count <= 0) {
      return;
    }

    this.setState(state => ({
      isRunning: !state.isRunning,
      count: (state.count - 1),
      tries: (tries + 1),
      direction: 0
    }));

    let promises = [];
    for (let i = 0; i < this.slots; i++) {
      promises.push(this.runnerPromise(i));
    }

    Promise.all(promises).then(result => {
      let score = this.defineScore(result);

      this.setState(state => ({
        isRunning: false,
        count: state.count + score,
        success: score > 0 ? (success + 1): success,
        direction: !!score ? 1 : -1
      }));

      console.log(this.state.tries, this.state.success, (this.state.success/this.state.tries))
    });
  }

  runnerPromise(id) {
    let timerId;
    let newSlotValue;
    const fps = 24;
    const baseInterval = Math.floor(1e3 / fps);
    const reelLength = this.reels[0].length;

    return new Promise((resolve, reject) => {
      const randomReelIndex = Math.floor(Math.random() * reelLength);
      // minimum run time is about 1500ms for first reel
      let totalRunsForSlot = randomReelIndex + ((id + 1) * (fps * 1.5));

      const runner = currentRun => {
        if (currentRun === totalRunsForSlot) {
          clearTimeout(timerId);
          return resolve(newSlotValue);
        }
        newSlotValue = this.reels[id][currentRun % reelLength];

        this.setState(state => {
          state.slotValues[id] = newSlotValue;
          return state;
        });

        let nextRun = currentRun + 1;
        // ease the last 8 steps
        const isEase = nextRun > (totalRunsForSlot - 8);
        let interval = baseInterval;
        if (isEase) {
          interval = 1e3 / ((totalRunsForSlot - nextRun + 1) * 2.5);
        }

        timerId = setTimeout(runner, interval, nextRun);
      };

      runner(0);
    });
  }

  defineScore(result) {
    const res = result.join('');
    let score = 0;

    switch(true) {
      case(res === '🏀🏀🏀'):
        score = 400;
        break;
      case(res.startsWith('🏀🏀')):
        score = 2;
        break;
      case(res.startsWith('🏀')):
        score = 1;
        break;
      case(res === '⚽⚽⚽'):
        score = 14;
        break;
      case(res === '🏈🏈🏈'):
        score = 18;
        break;
      case(res === '⚾⚾⚾'):
        score = 10;
        break;
      case(res === '🎾🎾🎾'):
        score = 50;
        break;
      case(/^🏐🏐/.test(res)):
        score = 5;
        break;
      case(res === '🏉🏉🏉'):
        score = 100;
        break;
      case(res === '🎱🎱🎱'):
        score = 200;
        break;
      case(/^🏐/.test(res)):
        score = 2;
        break;
      case(res === '🏈🏈🏀'):
        score = 18;
        break;
      case(res === '⚽⚽🏀'):
        score = 14;
        break;
      case(res === '⚾⚾🏀'):
        score = 10;
        break;
      case(/^🎾🎾/.test(res)):
        score = 5;
        break;
      case(/^🏉/.test(res)):
        score = 2;
        break;
    }

    console.log('score:',score, score * 1e4);

    return score;
  }

  render() {
    const {count, slotValues, isRunning, direction} = this.state;

    return (
      <div className="tank" title="Click or tap the red button">
        <img src="images/tank_empty.jpg" alt="" />
        <Slots slotValues={slotValues} />
        <div className="controls">
          <div>
            <h1>ax710.org and y-a-v-a.org</h1>
            <h3 className="title">Three Ball Total Equilibrium Slot Machine <i>2020</i></h3>
            <p className="material">pixels on screen<br/><br/>
              <span>
                <Credit count={count} direction={direction} />
                <Button clickHandler={this.clickHandler} isRunning={isRunning} />
              </span>
            </p>
          </div>
          <div>
          </div>
          <Attribution />
        </div>
      </div>
    )
  }
}

export default FruitMachine;
