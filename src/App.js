import React, { Component } from 'react';
import Switch from 'react-ios-switch';
import './App.css';
import setToggles from './setToggles';

class App extends Component {
  state = {
    good: false,
    cheap: false,
    fast: false
  };

  render() {
    const { good, cheap, fast } = this.state;

    return (
      <section>
        <h2>Good/Cheap/Fast - pick two</h2>
        <form>
          <label>
            Good
            <Switch
              checked={good}
              className="label__switch"
              onChange={() => {
                this.setState(setToggles('good', this.state));
              }}
            />
          </label>
          <label>
            Cheap
            <Switch
              checked={cheap}
              className="label__switch"
              onChange={() => {
                this.setState(setToggles('cheap', this.state));
              }}
            />
          </label>
          <label>
            Fast
            <Switch
              checked={fast}
              className="label__switch"
              onChange={() => {
                this.setState(setToggles('fast', this.state));
              }}
            />
          </label>
        </form>
        <h3>What are your priorities?</h3>
        <ul>
          <li>Cheap + fast = lower quality work</li>
          <li>Fast + good = expensive</li>
          <li>Good + cheap = not happening anytime soon</li>
        </ul>
      </section>
    );
  }
}

export default App;
