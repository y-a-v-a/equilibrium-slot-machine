import React from 'react';

const Attribution = () => {
  const nameSpaces = {
    'xmlns:dct': 'http://purl.org/dc/terms/',
    'xmlns:cc': 'http://creativecommons.org/ns#',
  };

  return (
    <div>
      <p {...nameSpaces} className="license-text">
        <span rel="dct:title">Three Ball Total Equilibrium Slot Machine</span>&nbsp;by&nbsp;
        <a rel="cc:attributionURL" href="https://www.ax710.org">
          <span rel="cc:attributionName">ax710</span>
        </a>
        &nbsp;and&nbsp;
        <a rel="cc:attributionURL" href="https://www.y-a-v-a.org">
          <span rel="cc:attributionName">y_a_v_a</span>
        </a>
        <br />
        CC&nbsp;BY-SA&nbsp;4.0&nbsp;
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          <img
            style={{ height: '1em', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          />
          <img
            style={{ height: '1em', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          />
          <img
            style={{ height: '1em', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
          />
        </a>
      </p>
    </div>
  );
};

export default React.memo(Attribution);
