/**
 * @author Vincent Bruijn <vebruijn@gmail.com>
 */
import React from 'react';

class Credit extends React.Component {
  render() {
    const scoreClassName = this.props.direction === 1 ? 'increase' : this.props.direction === -1 ? 'decrease' : '';
    return (
      <span className={`credit ${ scoreClassName }`}>${(this.props.count * 1e4).toLocaleString('en-US')}</span>
    );
  }
}

export default Credit;
