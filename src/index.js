/**
 * @author Vincent Bruijn <vebruijn@gmail.com>
 */
import css from './css/style.css';
import tank from './images/tank_empty.jpg';
import tank_p from './images/tank_back_portrait.jpg';
import tank_l from './images/tank_back_landscape.jpg';

import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import FruitMachine from './js/components/FruitMachine';

const rootElement = document.getElementById('fruitmachine');

if (rootElement.hasChildNodes()) {
  const root = hydrateRoot(rootElement);
  root.render(<FruitMachine />);
} else {
  const root = createRoot(rootElement);
  root.render(<FruitMachine />);
}
