import React from 'react';
import Switch from 'react-ios-switch';
import './App.css';

function App() {
  return (
    <section>
      <h1>Good/Cheap/Fast - pick two</h1>
      <form>
        <label>
          Good
          <Switch
            checked={true}
            className="label__switch"
            onChange={() => {}}
          />
        </label>
        <label>
          Cheap
          <Switch
            checked={false}
            className="label__switch"
            onChange={() => {}}
          />
        </label>
        <label>
          Fast
          <Switch
            checked={false}
            className="label__switch"
            onChange={() => {}}
          />
        </label>
      </form>
      <h2>What are your priorities?</h2>
      <ul>
        <li>Cheap + fast = lower quality work</li>
        <li>Fast + good = expensive</li>
        <li>Good + cheap = not happening anytime soon</li>
      </ul>
    </section>
  );
}

export default App;
