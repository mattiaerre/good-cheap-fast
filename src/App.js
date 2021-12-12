import React, { useState } from 'react';
import Switch from 'react-ios-switch';
import './App.css';
import toggle from './toggle';

function App() {
  const [toggles, setToggles] = useState({
    good: false,
    cheap: false,
    fast: false
  });

  return (
    <section>
      <h1>Good/Cheap/Fast - pick two</h1>
      <form>
        <label>
          Good
          <Switch
            checked={toggles.good}
            className="label__switch"
            onChange={() => {
              setToggles(toggle(toggles, 'good'));
            }}
          />
        </label>
        <label>
          Cheap
          <Switch
            checked={toggles.cheap}
            className="label__switch"
            onChange={() => {
              setToggles(toggle(toggles, 'cheap'));
            }}
          />
        </label>
        <label>
          Fast
          <Switch
            checked={toggles.fast}
            className="label__switch"
            onChange={() => {
              setToggles(toggle(toggles, 'fast'));
            }}
          />
        </label>
      </form>
      <h2>What are your priorities?</h2>
      <ul>
        {toggles.cheap && toggles.fast && (
          <li>Cheap + fast = lower quality work</li>
        )}
        {toggles.fast && toggles.good && <li>Fast + good = expensive</li>}
        {toggles.good && toggles.cheap && (
          <li>Good + cheap = not happening anytime soon</li>
        )}
      </ul>
    </section>
  );
}

export default App;
