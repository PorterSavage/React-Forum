import React from 'react';
import Rules from './Rules';

class RulesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rules: false
    };
  }

  handleRulesList() {
    this.setState({ rules: true });
  }

  hideRuleList() {
    this.setState({ rules: false });
  }

  render() {
    let ruleFilter = null;
    if (this.state.rules === false) {
      ruleFilter = null;
    }
    else if (this.state.rules === true) {
      ruleFilter = <Rules/>
    } else {
      ruleFilter = 
      <div>
        <h1>Fail</h1>
      </div>
    }

    return (
      <div>
        <div>
          <style>{`
            .show, .hide {
              margin-bottom: 8px;
              background-color: #C580CD;
            }
            #rules {
              background: #eb94d0;
              background-image: -webkit-linear-gradient(top, #eb94d0, #2079b0);
              background-image: -moz-linear-gradient(top, #eb94d0, #2079b0);
              background-image: -ms-linear-gradient(top, #eb94d0, #2079b0);
              background-image: -o-linear-gradient(top, #eb94d0, #2079b0);
              background-image: linear-gradient(to bottom, #eb94d0, #2079b0);
              -webkit-border-radius: 28;
              -moz-border-radius: 28;
              border-radius: 20px;
              text-shadow: 3px 2px 1px #9daef5;
              -webkit-box-shadow: 6px 5px 24px #666666;
              -moz-box-shadow: 6px 5px 24px #666666;
              box-shadow: 6px 5px 24px #666666;
              font-family: sans-serif;
              color: #fafafa;
              font-size: 14px;
              padding: 8px;
              font-weight: lighter;
              text-decoration: none;
              mouseover: curser;
            }
          `}</style>
        </div>
        <div>
          <button id='rules' className="show" onClick={this.handleRulesList.bind(this)}>Show Rules</button>
          <button id='rules' className="hide" onClick={this.hideRuleList.bind(this)}>Hide Rules</button>
        </div>
        <div>
          {ruleFilter}
        </div>
      </div>
    );
  }
}

export default RulesList;