import React from 'react';

class Credit extends React.Component {
  render() {
    return (
      <span className="credit">${(this.props.count * 1e4).toLocaleString('en-US')}</span>
    );
  }
}

export default Credit;
