import React from 'react';
const payout = [
  [
    ['🏀', '🏀', '🏀', '400'],
    ['🎱', '🎱', '🎱', '200'],
    ['🏉', '🏉', '🏉', '100'],
    ['🎾', '🎾', '🎾', '50'],
    ['🏈', '🏈', '🏈', '18'],
    ['🏈', '🏈', '🏀', '18'],
    ['⚽', '⚽', '⚽', '14'],
    ['⚽', '⚽', '🏀', '14']
  ],
  [
    ['⚾', '⚾', '⚾', '10'],
    ['⚾', '⚾', '🏀', '10'],
    ['🏐', '🏐', '•', '5'],
    ['🎾', '🎾', '•', '5'],
    ['🏐', '•', '•', '2'],
    ['🏉', '•', '•', '2'],
    ['🏀', '🏀', '•', '2'],
    ['🏀', '•', '•', '1']
  ]
];

export default class Payout extends React.PureComponent {
  render() {
    let rowrow = 1;
    return (payout.map((tableData, tidx) => {
      return (<table key={tidx} className={`table-${tidx}`}>
        <tbody>
        {tableData.reverse().map((row, ridx, rowlist) => {
          return (<tr key={ridx}>
            {row.map((cell, cidx) => {
              const cn = row.length - 1 === cidx ? 'last-cell' : '';
              if (row.length - 1 === cidx && rowlist[ridx + 1] && rowlist[ridx + 1][cidx] === cell) {
                rowrow++;
                return;
              } else if (row.length - 1 === cidx && rowlist[ridx - 1] && rowlist[ridx - 1][cidx] === cell) {
                const cellData = (<td rowSpan={rowrow} key={cidx} className={cn}>{cell}</td>);
                rowrow = 1;
                return cellData;
              }
              return (<td key={cidx} className={`${cn} ${rowrow > 1 ? '' : 'last-row'}`}>{cell}</td>)
            })}
          </tr>);
        }).reverse()}
        </tbody>
      </table>)
    }));
  }
}
