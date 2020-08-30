import React from 'react';

export default class Attribution extends React.PureComponent {
  render() {
    const nameSpaces = {
      "xmlns:dct": "http://purl.org/dc/terms/",
      "xmlns:cc": "http://creativecommons.org/ns#"
    };

    return(<div>
      <p {...nameSpaces} className="license-text">
        <span rel="dct:title">Three Ball Total Equilibrium Slot Machine</span> by <a rel="cc:attributionURL" href="http://www.ax710.org">
          <span rel="cc:attributionName">ax710&nbsp;and&nbsp;y_a_v_a</span>
        </a><br/>CC&nbsp;BY-SA&nbsp;4.0&nbsp;
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          <img style={{height:"1em",marginLeft: "3px",verticalAlign:"text-bottom"}} src="https://search.creativecommons.org/static/img/cc_icon.svg" />
          <img style={{height:"1em",marginLeft: "3px",verticalAlign:"text-bottom"}} src="https://search.creativecommons.org/static/img/cc-by_icon.svg" />
          <img style={{height:"1em",marginLeft: "3px",verticalAlign:"text-bottom"}} src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" />
        </a>
      </p>
    </div>);
  }
}
