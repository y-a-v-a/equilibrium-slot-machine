/**
 * @author Vincent Bruijn <vebruijn@gmail.com>
 */
import React from 'react';
import Slot from './Slot';

const Slots = ({ slotValues }) => (
  <>
    <div className="slots">
      {slotValues.map((value, idx) => (
        <Slot item={value} key={idx} />
      ))}
    </div>
  </>
);

export default Slots;
