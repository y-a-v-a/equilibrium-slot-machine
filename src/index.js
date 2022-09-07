/**
 * @author Vincent Bruijn <vebruijn@gmail.com>
 */
import css from './css/style.css';
import tank from './images/tank_empty.jpg';
import tank_p from './images/tank_back_portrait.jpg';
import tank_l from './images/tank_back_landscape.jpg';

import React from 'react';
import { hydrate, render } from 'react-dom';
import FruitMachine from './js/components/FruitMachine';

const rootElement = document.getElementById('fruitmachine');

if (rootElement.hasChildNodes()) {
  hydrate(<FruitMachine />, rootElement);
} else {
  render(<FruitMachine />, rootElement);
}
