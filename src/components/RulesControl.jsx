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

          `}</style>
        </div>
        <div>
          <button onClick={this.handleRulesList.bind(this)}>Show Rules</button>
          <button onClick={this.hideRuleList.bind(this)}>Hide Rules</button>
        </div>
        <div>
          {ruleFilter}
        </div>
      </div>
    );
  }
}

export default RulesList;