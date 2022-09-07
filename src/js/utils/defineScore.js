const defineScore = result => {
  const res = result.join('');
  let score = 0;

  switch (true) {
    case res === '🏀🏀🏀':
      score = 400;
      break;
    case res.startsWith('🏀🏀'):
      score = 2;
      break;
    case res.startsWith('🏀'):
      score = 1;
      break;
    case res === '⚽⚽⚽':
      score = 14;
      break;
    case res === '🏈🏈🏈':
      score = 18;
      break;
    case res === '⚾⚾⚾':
      score = 10;
      break;
    case res === '🎾🎾🎾':
      score = 50;
      break;
    case /^🏐🏐/.test(res):
      score = 5;
      break;
    case res === '🏉🏉🏉':
      score = 100;
      break;
    case res === '🎱🎱🎱':
      score = 200;
      break;
    case /^🏐/.test(res):
      score = 2;
      break;
    case res === '🏈🏈🏀':
      score = 18;
      break;
    case res === '⚽⚽🏀':
      score = 14;
      break;
    case res === '⚾⚾🏀':
      score = 10;
      break;
    case /^🎾🎾/.test(res):
      score = 5;
      break;
    case /^🏉/.test(res):
      score = 2;
      break;
  }

  console.log('score:', score, score * 1e4);

  return score;
};

export { defineScore };
