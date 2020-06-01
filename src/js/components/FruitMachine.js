import React from 'react';
import Credit from './Credit';
import Button from './Button';
import Slots from './Slots';

class FruitMachine extends React.Component {

  constructor(props) {
    super(props);
    this.options = [...'⚽🏀🏈⚾🎾🏐🏉🎱'];
    this.slots = 3;
    this.timerIds = [];

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      isRunning: false,
      count: 2217,
      slotValues: [...'🏀'.repeat(this.slots)]
    }
  }

  clickHandler(event) {
    const {isRunning, count} = this.state;
    if (isRunning || count <= 0) {
      return;
    }

    this.setState(state => ({
      isRunning: !state.isRunning,
      count: (state.count - 1)
    }));

    let promises = [];
    for (let i = 0; i < this.slots; i++) {
      promises.push(this.runnerPromise(i));
    }

    Promise.all(promises).then(result => {
      let score = this.defineScore(result);

      this.setState(state => ({
        isRunning: false,
        count: state.count + score
      }));
    });
  }

  runnerPromise(id) {
    let timerId;
    let newSlotValue;

    return new Promise((resolve, reject) => {
      let runs = ~~(Math.random() * 10) + 20;

      const runner = runs => {
        if (runs === 0) {
          clearTimeout(timerId);
          return resolve(newSlotValue);
        }
        let newRuns = runs - 1;
        newSlotValue = this.options[~~(Math.random() * this.options.length)];

        this.setState(state => {
          state.slotValues[id] = newSlotValue;
          return state;
        });

        timerId = setTimeout(runner, (800 / runs), newRuns);
      };

      runner(runs);
    });
  }

  defineScore(result) {
    const score = result.reduce((acc, el) => {
      return acc.indexOf(el) > -1 ? acc : acc.push(el), acc;
    }, []);

    switch(score.length) {
      case 1:
        return 5;
      case 2:
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const {count, slotValues, isRunning} = this.state;

    const nameSpaces = {
      "xmlns:dct": "http://purl.org/dc/terms/",
      "xmlns:cc": "http://creativecommons.org/ns#"
    };

    return (
      <div className="tank" title="Click or tap the red button">
        <img src="images/tank_empty.jpg" alt="" />
        <Slots slotValues={slotValues} />
        <div className="controls">
          <div>
            <h1>ax710.org and y-a-v-a.org</h1>
            <h3 className="title">Three Ball Total Equilibrium Slot Machine <i>2018/2019</i></h3>
            <p className="material">pixels on screen<br/><br/>
              <span>
                <Credit count={count} />
                <Button clickHandler={this.clickHandler} isRunning={isRunning} />
              </span>
            </p>
          </div>
          <div>
            <p {...nameSpaces} className="license-text">
              <span rel="dct:title">Three Ball Total Equilibrium Slot Machine</span> by <a rel="cc:attributionURL" href="www.ax710.org">
                <span rel="cc:attributionName">ax710&nbsp;and&nbsp;y_a_v_a</span>
              </a><br/>CC&nbsp;BY-SA&nbsp;4.0&nbsp;
              <a href="https://creativecommons.org/licenses/by-sa/4.0">
                <img style={{height:"1em",marginLeft: "3px",verticalAlign:"text-bottom"}} src="https://search.creativecommons.org/static/img/cc_icon.svg" />
                <img style={{height:"1em",marginLeft: "3px",verticalAlign:"text-bottom"}} src="https://search.creativecommons.org/static/img/cc-by_icon.svg" />
                <img style={{height:"1em",marginLeft: "3px",verticalAlign:"text-bottom"}} src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" />
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitMachine;
