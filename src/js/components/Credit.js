/**
 * @author Vincent Bruijn <vebruijn@gmail.com>
 */
import React from 'react';

const Credit = ({ direction, credit }) => {
  const scoreClassName = direction === 1 ? 'increase' : direction === -1 ? 'decrease' : '';

  return (
    <span className={`credit ${scoreClassName}`}>${(credit * 1e4).toLocaleString('en-US')}</span>
  );
};

export default React.memo(Credit);
