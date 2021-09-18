import React from 'react';
import Switch from 'react-ios-switch';
import './App.css';

function App() {
  return (
    <section>
      <h2>Good/Cheap/Fast - pick two</h2>
      <form>
        <label>
          Good
          <Switch
            checked={true}
            className="label__switch"
            onChange={(checked) => {}}
          />
        </label>
        <label>
          Cheap
          <Switch
            checked={false}
            className="label__switch"
            onChange={(checked) => {}}
          />
        </label>
        <label>
          Fast
          <Switch
            checked={false}
            className="label__switch"
            onChange={(checked) => {}}
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

export default App;
