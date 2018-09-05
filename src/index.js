import css from './css/style.css';
import tank from './images/tank_empty.jpg';

import React from 'react';
import { render } from 'react-dom';
import FruitMachine from './js/components/FruitMachine';

render(<FruitMachine/>, document.getElementById('fruitmachine'));
