import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isRunning, clickHandler} = this.props;

    return (
      <span className={`button ${isRunning ? '' : 'inactive'}`} onClick={clickHandler}>🔴</span>
    );
  }
}

export default Button;
