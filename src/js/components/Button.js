/**
 * @author Vincent Bruijn <vebruijn@gmail.com>
 */
import React from 'react';

const Button = ({ isRunning, clickHandler }) => {
  return (
    <span className={`button ${isRunning ? '' : 'inactive'}`} onClick={clickHandler}>
      🔴
    </span>
  );
};

export default React.memo(Button);
